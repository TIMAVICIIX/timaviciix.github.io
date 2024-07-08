$(document).ready( function () {

    var commeBtn = $("#blog_nav_comme");
    var classifyBtn = $("#blog_nav_classify");
    var authorBtn = $("#blog_nav_author");

    var commeContainer = $("#blog_container");
    var classifyContainer = $("#categories_container");
    var authorContainer = $("#author_container");

    var displayColor = "#444444";
    var hideColor = "#8F8787";

    commeBtn.click(function () {
        commeBtn.css("color", displayColor);
        classifyBtn.css("color", hideColor);
        authorBtn.css("color", hideColor);

        commeContainer.show();
        classifyContainer.hide();
        authorContainer.hide();
    });

    classifyBtn.click(function () {
        commeBtn.css("color", hideColor);
        classifyBtn.css("color", displayColor);
        authorBtn.css("color", hideColor);

        commeContainer.hide();
        classifyContainer.show();
        authorContainer.hide();
    });

    authorBtn.click(function () {
        commeBtn.css("color", hideColor);
        classifyBtn.css("color", hideColor);
        authorBtn.css("color", displayColor);

        commeContainer.hide();
        classifyContainer.hide();
        authorContainer.show();
    });

    commeBtn.click();

});