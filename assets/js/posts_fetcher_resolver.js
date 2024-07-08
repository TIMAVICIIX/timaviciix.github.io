$(window).ready(function () {

    let res, xhr;

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

    const getPostsData = () => {

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open("GET", posts_data_url, true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                res = JSON.parse(xhr.responseText);
            }
        };

    };
    getPostsData();

    $("#search_btn").click(function () {
        var search_input = $("#search_input").val();



        var buildHTMLString = "";

        for (let post of res.posts) {

            if (post.title.includes(search_input) || post.description.includes(search_input) || post.author.includes(search_input) || post.tags.includes(search_input)) {

                buildHTMLString +=  `
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
            <h2 style="text-align:center;">没找到哦!</h2>
            `
        }

        if (search_input == "") {

            for (let post of res.posts) {
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


        posts_html_container.html(buildHTMLString);

    });

});