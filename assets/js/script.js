$(function(){
    $('#menu-button').click(function(){
        $(this).next().slideToggle();
    });
    $('div.p-qa__item__qustion').click(function(){
        if($(this).find('i').is('.fa-minus')) {
            $(this).find('i').removeClass().addClass('fa fa-plus');
        } else {
            $(this).find('i').removeClass().addClass('fa fa-minus');
        }
        $(this).next().slideToggle(450);
    }); 

    var pagetop =$('#pageTop');
    pagetop.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            pagetop.fadeIn(); 
        }   else {
                pagetop.fadeOut();
        }
    });
    pagetop.click(function(){
        $('body,html').animate({ scrollTop: 0}, 500);
        return false;
    });

    // 上部～スクロール500pxの間、li:first-childのcurrent表示を消したい
});