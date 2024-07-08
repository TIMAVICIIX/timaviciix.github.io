window.addEventListener("DOMContentLoaded", function () {
    let res, xhr;

    const tags_data_url = "/datas/tags_creator.json";
    const tags_html_container = document.getElementById("tag_sea_container");

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

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
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

                    if(counter==17){
                        hrefElement.href = resolveEnCode("/tags.html#undefine");
                        hrefElement.innerHTML = `#更多标签?#`;
                        break;
                    }else{
                        hrefElement.href = resolveEnCode(tag.url);
                        hrefElement.innerHTML = `#${tag.name}# ${tag.times}次`;
    
                        /*divElement.addEventListener("click", function () {
                            window.location.href = resolveEnCode(tag.url);
                        });*/
    
                       
                    }
                    counter++;
                    //DEBUG
                    //console.log(`tagName:${tag.name}\ntagUrl:${resolveEnCode(tag.url)}\ntagDatas:${tag.datas}\ntagTimes:${tag.times}`);

                }



            }
        };

    };
    getTagsData();
});


