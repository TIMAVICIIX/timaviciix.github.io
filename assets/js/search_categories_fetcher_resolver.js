window.addEventListener("DOMContentLoaded", function () {

    let res, xhr, resP, xhrP;

    const categories_data_url = "/datas/categories_creator.json";
    const categories_html_container = document.getElementById("categories_container");

    const posts_data_url = "/datas/posts_creator.json";
    const posts_html_container = $("#search_post_container");

    function resolveEnCode(resoleString) {
        var stringArray = resoleString.split("#");

        try {

            let decodeString = decodeURIComponent(stringArray[1]);
            return `${stringArray[0]}#${decodeString}`;

        } catch (error) {
            return resoleString;
        }
    }

    const getCategories = () => {

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open("GET", categories_data_url, true);
        xhr.send();

        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4 && xhr.status == 200) {
                res = JSON.parse(xhr.responseText);

                for (let category of res.categories) {

                    //console.log(`${category.name}`);

                    var divElement = document.createElement("div");
                    divElement.classList.add("classify_item");
                    divElement.classList.add("shallow_shadow");

                    var aElement = document.createElement("a");
                    aElement.classList.add("color_4_black");
                    aElement.classList.add("normal_a");
                    aElement.classList.add("bold_text");
                    aElement.href = resolveEnCode(category.url);
                    aElement.innerText = category.name;

                    divElement.appendChild(aElement);
                    categories_html_container.append(divElement);

                }

            }
        }
    };
    getCategories();

    const getPosts = () => {

        if (window.XMLHttpRequest) {
            xhrP = new XMLHttpRequest();
        } else {
            xhrP = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhrP.open("GET", posts_data_url, true);
        xhrP.send();

        xhrP.onreadystatechange = function () {

            if (xhrP.readyState == 4 && xhrP.status == 200) {
                resP = JSON.parse(xhrP.responseText);

                changedHash();
            }
        }
    };
    getPosts();

    function changedHash() {
        var hash = resolveEnCode(this.window.location.hash).split("#")[1];

        console.log(`hash:${hash}`);

        var buildHTMLString = "";

        for (let post of resP.posts) {
            console.log(`postTags:${post.categories}`);
            if (post.categories == hash) {

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

        if (buildHTMLString == "") {
            buildHTMLString += `
        <h2 style="text-align:center;">请选择一个分类吧!</h2>
        `
        }

        posts_html_container.html(buildHTMLString);
    }

    this.window.addEventListener("hashchange", function () {

        changedHash();

    });

    


});