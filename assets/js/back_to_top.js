$(document).ready(function() {  
    $(window).scroll(function() {  
        if ($(this).scrollTop() > 200) { // 滚动超过200px时显示  
            $('#backToTop').fadeIn();  
        } else {  
            $('#backToTop').fadeOut();  
        }  
    });  
  
    $('#backToTop').click(function() {  
        $('html, body').animate({scrollTop: 0}, 800); // 平滑滚动到页面顶部，持续时间为800毫秒  
        return false; // 阻止链接的默认行为  
    });  
});