window.addEventListener("DOMContentLoaded", function () {
    let res, xhr;

    const categories_data_url = "/datas/categories_creator.json";
    const categories_container = document.getElementById("categories_container");

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

                var counter = 0;

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
                    categories_container.append(divElement);

                    if(counter == 20){
                        aElement.href = "/categories";
                        aElement.innerText = "更多分类";
                        break;
                    }

                    counter++;

                }

                if(counter < 20){
                    var divElement = document.createElement("div");
                    divElement.classList.add("classify_item");
                    divElement.classList.add("shallow_shadow");

                    var aElement = document.createElement("a");
                    aElement.classList.add("color_4_black");
                    aElement.classList.add("bold_text");
                    aElement.classList.add("normal_a");
                    aElement.href = "/categories";
                    aElement.innerText = "更多分类";

                    divElement.appendChild(aElement);
                    categories_container.append(divElement);
                }


            }
        };

    };
    getCategories();

});