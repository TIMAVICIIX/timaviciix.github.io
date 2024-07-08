window.addEventListener('DOMContentLoaded', function () {

    var backgroundItem = this.document.getElementsByClassName("main_background_container")[0];

    var headerAndRoboTitle = this.document.getElementsByClassName("header_robo_and_title")[0];

    headerAndRoboTitle.addEventListener('mousemove', function (e) {

        var x = e.clientX;
        var y = e.clientY;
        var left = -((x / window.innerWidth * 50) + 5);
        var top = -((y / window.innerHeight * 50) + 5);
        backgroundItem.style.left = left + 'px';
        backgroundItem.style.top = top + 'px';

        // 添加 transition 属性，实现平滑移动
        backgroundItem.style.transition = 'left 0.3s, top 0.3s';

    });


});