$(document).ready(function(){
    // slick 라이브러리
    $('.cont4 .img_slide .mobi_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 2,
        slidesToShow: 2,
        prevArrow: false,
        nextArrow: false,
        dots: true,

        
        responsive: [
            {
                breakpoint : 601,
                settings:{
                    slidesToShow: 2,
                }
            },
            // {
            //     breakpoint : 1199,
            //     settings:{
            //         slidesToShow: 3,
            //     }
            // }
        ]
    });

    function responsiveControl() { 
        if ( window.matchMedia('(max-width: 767px)').matches ) {
            
            
        } else if ( window.matchMedia('(min-width: 768px)').matches ){
            
            // pc화면에서 슬릭슬라이드를 제어한다
            $(".cont4 .img_slide .mobi_slide").not('.slick-initialized').slick();
        }
    }
    window.addEventListener('resize', responsiveControl, false);
    responsiveControl();

    $(".slick-dots li").children().remove();

    /* mobile button */
    $(".side_btn").click(function(e){
        $("#mobile_sideMenu").css("display", "block");
        $(".gnb_mobile").css({
            'transform': 'translateX(0)',
        });
        $('html, body').css({'overflow': 'hidden'});
    });

    $(".closeBtn").click(function(k){
        $("#mobile_sideMenu").css("display", "none");
        $('html, body').css({'overflow': 'visible'});
    });

    
    
});

// ============== resize gnb none

$(window).on("resize",function(){
    var resizeWidth = $(window).width();
    if(resizeWidth < 1700){
        $(".gnb").css({
            position : "fixed",
            top : 100,
            left : 0,
            background : "rgba(3, 3, 3, .6)",
            width : "100%",
            height : 30
        });
        $(".gnb .line_wrap").hide();
        $(".gnb_dot").hide();
        $(".gnb > ul").css({
            flexDirection : "row",
            position : "static",
            width : 800,
            height : 30,
            margin : "0 auto"
        });
        $(".gnb > ul > li a").css({
            lineHeight : 2.4,
            fontSize : 12,
        });

        $(window).scroll(function(){
            if($(this).scrollTop() > 700) {
                $(".gnb").css({
                    top : 60,
                    transition : "all .2s",
                });
            }else{
                $(".gnb").css({
                    top : 100,
                    transition : "all .2s",
                });
            }
        });
    }if(resizeWidth > 1700){
        $(".gnb").css({
            position : "fixed",
            top : 283,
            left : 120,
            background : "none",
            width : "auto",
            height : 310,
        });
        $(".gnb .line_wrap").show();
        $(".gnb_dot").show();
        $(".gnb > ul").css({
            flexDirection : "column",
            position : "absolute",
            width : "auto",
            height : 312,
            margin : "auto"
        });
        $(".gnb > ul > li a").css({
            lineHeight : 1.1,
            fontSize : 16,
        });
    }
});


// function gnbResize(){
//     var gnb = document.querySelectorAll('.gnb');
//     for(var i = 0; i < gnb.length; i++){
//         if(window.matchMedia("(min-width : 1690px)").matches){
//             gnb[i].style.display = "block"
//         }else{
//             gnb[i].style.display = "none"
//         }
//     }
// }

// window.addEventListener('resize', gnbResize, false);
// gnbResize();
