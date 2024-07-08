window.addEventListener("DOMContentLoaded", function () {
    let res, xhr, resP, xhrP;

    const tags_data_url = "/datas/tags_creator.json";
    const posts_data_url = "/datas/posts_creator.json";
    const tags_html_container = this.document.getElementById("tag_sea_container");
    const posts_html_container = $("#search_post_container");

    const colorArray = [
        "#95E1D3",
        "#EAFFD0",
        "#FCE38A",
        "#F38181"
    ]


    function resolveEnCode(resoleString) {

        var stringArray = resoleString.split("#");

        try {

            let decodeString = decodeURIComponent(stringArray[1]);
            return `${stringArray[0]}#${decodeString}`;

        } catch (error) {
            return resoleString;
        }
    }


    const getTagsData = () => {

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open("GET", tags_data_url, true);
        xhr.send();

        console.log("Start get Tags");

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {

                console.log("Get Tags Data Success");
                res = JSON.parse(xhr.responseText);



                var counter = 0;

                for (let tag of res.tags) {


                    var divElement = document.createElement("div");
                    divElement.classList.add("tag_sea_item");
                    divElement.classList.add("bold_text");
                    divElement.style.backgroundColor = colorArray[counter % 4];

                    var hrefElement = document.createElement("a");

                    hrefElement.style.color = "#444444";
                    hrefElement.style.textDecoration = "none";

                    divElement.appendChild(hrefElement);
                    tags_html_container.appendChild(divElement);


                    hrefElement.href = resolveEnCode(tag.url);
                    hrefElement.innerHTML = `#${tag.name}# ${tag.times}次`;

                    /*divElement.addEventListener("click", function () {
                        window.location.href = resolveEnCode(tag.url);
                    });*/



                    counter++;
                    //DEBUG
                    //console.log(`tagName:${tag.name}\ntagUrl:${resolveEnCode(tag.url)}\ntagDatas:${tag.datas}\ntagTimes:${tag.times}`);

                }

            }
        };

    };
    getTagsData();

    const getPostsData = () => {

        if (window.XMLHttpRequest) {
            xhrP = new XMLHttpRequest();
        } else {
            xhrP = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhrP.open("GET", posts_data_url, true);
        xhrP.send();

        console.log("Start get Posts");

        xhrP.onreadystatechange = function () {
            if (xhrP.readyState == 4 && xhrP.status == 200) {
                console.log("get Posts Success");
                resP = JSON.parse(xhrP.responseText);

                changedHash();
            }
        }
    };
    getPostsData();

    function changedHash() {
        var hash = resolveEnCode(this.window.location.hash).split("#")[1];


        console.log(`hash:${hash}`);

        if(hash == "undefine"){
            hash = "ai生成";
        }

        var buildHTMLString = "";

        for (let post of resP.posts) {
            console.log(`postTags:${post.tags}`);
            if (post.tags.includes(hash)) {

                buildHTMLString += `
                <div class="blog_item">
                <a href="${post.url}" class="blog_item_title bold_text color_4_black normal_a">${post.title}</a>
                <a href="${post.url}" class="blog_item_content bold_text color_85_gray normal_a">${post.description}</a>
                <div class="blog_item_footer">
        
                <a href="/${post.author}.html"
                            class="bold_item_author bold_text color_4_black normal_a">${post.author}</a>
        
                    <div class="blog_item_time bold_text color_4_black">${post.date}</div>
        
        
                </div>
            </div>`

            }
        }

        if( buildHTMLString == ""){
            buildHTMLString += `
            <h2 style="text-align:center;">请选择一个标签吧!</h2>
            `
        }

        posts_html_container.html(buildHTMLString);
    }

    this.window.addEventListener("hashchange", function () {

        changedHash();

    });

});


