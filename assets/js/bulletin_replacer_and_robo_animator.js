window.addEventListener("DOMContentLoaded", function () {


    var roboImg = this.document.getElementsByClassName("little_robo")[0];

    var bulletinTitle = this.document.getElementsByClassName("bulletin_inside_title")[0];
    var bulletinContent = this.document.getElementsByClassName("bulletin_inside_content")[0];

    var bulletinString = this.document.getElementById("bulletin_board_text_container").innerText.split("\n");

    var bulletinTextPosition = 1;

    var roboState = [
        "/assets/images/main_svgs/bulletin-board/check.svg",
        "/assets/images/main_svgs/bulletin-board/Idle.svg",
        "/assets/images/main_svgs/bulletin-board/write.svg"
    ]

    var bulletinTextArray = [];


    for (var i = 2; i < bulletinString.length - 2; i++) {
        if (i % 2 == 0) {
            bulletinTextArray.push(bulletinString[i]);
        }
    }

    for (var i = 0; i < bulletinTextArray.length; i++) {
        console.log("Num" + i + ":" + bulletinTextArray[i]);
    }

    //设置小Robo的抖动
    function roboImgRotateDeg(angle) {
        roboImg.style.transform = `rotate(${angle}deg)`;
    }

    //设置小Robo的图片资源
    function roboSetSvgResource(resource) {
        roboImg.src = resource;
    }

    //设置公告板文字的模糊度
    function setTextBlur(value) {
        bulletinTitle.style.filter = `blur(${value}px)`;
        bulletinContent.style.filter = `blur(${value}px)`;
    }

    function setBulletinText(){
        if(bulletinTextPosition>bulletinTextArray.length-1){
            bulletinTextPosition = 0;
        }

        var bulletinTitleText = bulletinTextArray[bulletinTextPosition].split("**Spliter**")[0];
        var bulletinContentText = bulletinTextArray[bulletinTextPosition].split("**Spliter**")[1];

        bulletinTitle.innerText = bulletinTitleText;
        bulletinContent.innerText = bulletinContentText;
        
        bulletinTextPosition++;

    }

    //设置Robo的摇摆动画
    function swingAnimation() {

        roboImgRotateDeg(-15);
        setTimeout(() => {
            roboImgRotateDeg(15);
            setTimeout(() => {
                roboImgRotateDeg(-15);
                swingAnimation();
            }, 600);
        }, 600);


    }
    swingAnimation();

    //设置Robo的状态动画以及公告栏的文字模糊度及内容
    function roboStateAnimation() {

        setTimeout(() => {
            roboSetSvgResource(roboState[0]);
            roboImg.style.width = "113px";
            roboImg.style.height = "173px";

            setTextBlur(5);

            setTimeout(() => {
                roboSetSvgResource(roboState[2]);

                setTimeout(() => {
                    setTextBlur(0);
                    setBulletinText();
                }, 3000);

                setTimeout(() => {
                    roboSetSvgResource(roboState[1]);

                    roboImg.style.width = "93px";
                    roboImg.style.height = "153px";

                    roboStateAnimation();
                }, 5000);

            }, 3000);

        }, 20000);
    }
    roboStateAnimation();

});