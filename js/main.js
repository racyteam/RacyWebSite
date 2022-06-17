$(document).ready(function(){
    // pc 메뉴 이동
    var nav = $(".gnb ul li");
    var cont = $("#container > section");

    var sub_nav = $(".gnb_mobile nav ul li")

    nav.click(function(c){
        c.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);

        var section = cont.eq(index + 1);
        var offset = section.offset().top - 80;
        
        $("html, body").stop().animate({ scrollTop: offset },500);
        
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    // 서브 메뉴이동
    sub_nav.click(function(c){
        c.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);

        var section = cont.eq(index + 1);
        var offset = section.offset().top - 60;
        
        $("html, body").stop().animate({ scrollTop: offset },500);
        
        $("#mobile_sideMenu").css("display", "none");
        $('html, body').css({'overflow': 'visible'})
    });

    

    
})