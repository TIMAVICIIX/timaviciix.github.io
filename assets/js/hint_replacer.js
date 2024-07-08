window.addEventListener('DOMContentLoaded',function(){

    var hintElement = this.document.getElementById('hinter');
    var hintTextString = this.document.getElementById('hinter_text_container').innerHTML;

    var hintText = hintTextString.split("\n");
    var hintTextArray = [];

    //由于Liquid问题，这里需要进行一些处理,将头尾两项去除,再将单数String去除
    resovleStrings();

    console.log(hintTextString.toString());

    for(var i = 0; i < hintTextArray.length; i++){
        console.log("Num"+i+":"+hintTextArray[i]);
    }

    function replaceHintText(){
        hintElement.innerText = hintTextArray[Math.floor(Math.random()*hintTextArray.length)];
    }

    function resovleStrings(){
        for(var i=2;i<hintText.length-2;i++){
            if(i%2==0){
                hintTextArray.push(hintText[i]);
            }
        }
    }

    replaceHintText();

    //设置定时器，每隔10秒更换一次提示文本
    this.setInterval(replaceHintText, 10000);

});