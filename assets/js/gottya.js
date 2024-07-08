//居然找到这儿来了,这儿没啥，快走吧
window.addEventListener("DOMContentLoaded", function () {

    var responseList = [
        "可惜了,Robo不喝咖啡,他喜欢喝茶",
        "请他喝茶也行吗?",
        "但是Robo已经有茶可以喝了,他还有其他愿望",
        "他希望把这个站点做成动态站点",
        "但是Robo没钱买服务器",
        "他希望有人能帮助他",
        "真的可以吗?",
        "那以后再说吧,Robo正在开通捐赠渠道",
        "请记住该彩蛋",
        "保持与Robo联系哦",
        "Robo要睡觉了",
        "梦见Money+"
    ]

    var gottyaElement = this.document.getElementById("robo_coffee");
    var count = 0;
    var moneyCount = 1;

    gottyaElement.addEventListener("click", function () {

        if (count < responseList.length-1) {
            gottyaElement.innerHTML = responseList[count];
            count++;
        } else {
            gottyaElement.innerHTML = responseList[responseList.length - 1] + moneyCount;
            moneyCount++;
        }

    });



});