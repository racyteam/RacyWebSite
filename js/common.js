//The MIT License (MIT)
//Copyright (c) 2014-2021 Chart.js Contributors
$(document).ready(function(){
     

    // slick 라이브러리
    $('.cont3 .img_slide ul').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
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
        
        if ( window.matchMedia('(max-width: 1199px)').matches ) {
            
        } else if ( window.matchMedia('(min-width: 1200px)').matches ){
            
            // pc화면에서 슬릭슬라이드를 제어한다
            $(".cont3 .img_slide ul").not('.slick-initialized').slick();
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
        $('html, body').css({'overflow': 'hidden', 'width': '100%', 'height' : '100%'});
    })
    
    $(".closeBtn").click(function(k){
        $("#mobile_sideMenu").css("display", "none");
        $('html, body').css({'overflow': 'visible', 'width': 'auto', 'height' : 'auto'});
    });

    //chart_js
            const ctx = $("#chart")
            const myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [],
                    datasets: [{
                        label: '',
                        data: [20, 5, 10, 20, 5, 5, 25, 8, 2],
                        backgroundColor: [
                            '#ff427c',
                            '#ff6ea6',
                            '#c65bb9',
                            '#910cc0',
                            '#9b47e6',
                            '#7938e6',
                            '#3631b7',
                            '#367ce2',
                            '#00BAFF',
        
                        ],
                        width: [
                            100
                        ],
                        borderWidth: [
                            0
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    cutout: "70%",
                        animation: {
                          duration: 3000
                        },
                    }
                }
            );

    
            //send email false
            $(".submit").click(function(ev){
                ev.preventDefault();
            });
});

