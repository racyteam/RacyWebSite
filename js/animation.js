$(document).ready(function(){
    $(".cont1_inner h2").css({
        "opacity" : 1,
        "transform" : "translateY(0)"
    });

    setTimeout(function(){
        $(".cont1_inner p").css({
            "opacity" : 1,
            "transform" : "translateY(0)"
        });
    },500);


    var off = 350
    
    var sectionOffset1 = $("section").eq(1).offset().top - off; //cont2
    var sectionOffset1_1 = $("section").eq(1).offset().top + 250; 

    var sectionOffset2 = $("section").eq(2).offset().top - off; //cont3
    var sectionOffset3 = $("section").eq(3).offset().top - off; //cont4
    var sectionOffset3_1 = $("section").eq(3).offset().top +200;
    var sectionOffset4 = $("section").eq(4).offset().top -300; //cont5
    var sectionOffset6 = $("section").eq(6).offset().top - off;
    
    
    
    $(window).scroll(function(){
        var scrTop = $(this).scrollTop();
        // console.log(sectionOffset1);
        if(scrTop > sectionOffset1){
            $(".cont2 h2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont2 .sub_title.no1").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont2 .cont2_txt.no1").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont2 .cont2_img1, .cont2_img1_pc").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
        }if(scrTop > sectionOffset1_1){
            $(".cont2 .sub_title.no2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont2 .cont2_txt.no2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont2 .cont2_img2, .cont2_img2_pc").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
        }if(scrTop > sectionOffset2){
            $(".cont3 h2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
                
            });
            $(".cont3 .sub_title").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont3 .cont3_txt").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont3 .img_slide").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            
        }if(scrTop > sectionOffset3){
            $(".cont4 h2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
                
            });
            $(".cont4 .sub_title.no1").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont4 .cont4_txt.no1").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont4 .cont4_img1, .cont4 .cont4_img1_pc").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
        }if(scrTop > sectionOffset3_1){
            $(".cont4 .sub_title.no2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont4 .cont4_txt.no2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".cont4 .cont4_img2, .cont4 .cont4_img2_pc").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
        }if(scrTop > sectionOffset4){
            $(".cont5 h2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".chart_wrap").css({
                "opacity" : 1,
            });
            $(".token_in").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $(".chart_text_wrap").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });

        }if(scrTop > sectionOffset6){
            $(".cont6 h2").css({
                "opacity" : 1,
                "transform" : "translateY(0)"
            });
            $('.roadmap_wrap .point span').css({
                'opacity' : 1
            });
            $('.cont6 .roadmap_wrap .point').css({
                'width' : '230px',
                'height' : "800px",
                'transition' : "3s",
            });
            $('.roadmap_wrap ul li').eq(0).find("p").css({
                'opacity' : 1,
                'transition' : "1.5s",
            });
            $('.roadmap_wrap ul li:nth-of-type(1) span').eq(0).css({
                'opacity' : 1,
                'transition' : "2.5s",
                "transform" : "translateY(0)"       
            });
            $('.roadmap_wrap ul li:nth-of-type(1) span').eq(1).css({
                'opacity' : 1,
                'transition' : "3.5s",
                "transform" : "translateY(0)"
            });
            $('.roadmap_wrap ul li:nth-of-type(1) span').eq(2).css({
                'opacity' : 1,
                'transition' : "4.5s",
                "transform" : "translateY(0)"
            });
            $('.roadmap_wrap ul li:nth-of-type(1) span').eq(3).css({
                'opacity' : 1,
                'transition' : "5.5s",
                "transform" : "translateY(0)"
            });

            // ===
            setTimeout(function(){
                $('.roadmap_wrap ul li').eq(1).find("p").css({
                    'opacity' : 1,
                    'transition' : "1.5s",
                });
                $('.roadmap_wrap ul li:nth-of-type(2) span').eq(0).css({
                    'opacity' : 1,
                    'transition' : "2.5s",
                    "transform" : "translateY(0)"       
                });
                $('.roadmap_wrap ul li:nth-of-type(2) span').eq(1).css({
                    'opacity' : 1,
                    'transition' : "3.5s",
                    "transform" : "translateY(0)"
                });
                $('.roadmap_wrap ul li:nth-of-type(2) span').eq(2).css({
                    'opacity' : 1,
                    'transition' : "4.5s",
                    "transform" : "translateY(0)"
                });
                $('.roadmap_wrap ul li:nth-of-type(2) span').eq(3).css({
                    'opacity' : 1,
                    'transition' : "5.5s",
                    "transform" : "translateY(0)"
                });
            }, 400);

            // ===
            setTimeout(function(){
                $('.roadmap_wrap ul li').eq(2).find("p").css({
                    'opacity' : 1,
                    'transition' : "1.5s",
                });
                $('.roadmap_wrap ul li:nth-of-type(3) span').eq(0).css({
                    'opacity' : 1,
                    'transition' : "2.5s",
                    "transform" : "translateY(0)"       
                });
                $('.roadmap_wrap ul li:nth-of-type(3) span').eq(1).css({
                    'opacity' : 1,
                    'transition' : "3.5s",
                    "transform" : "translateY(0)"
                });
                $('.roadmap_wrap ul li:nth-of-type(3) span').eq(2).css({
                    'opacity' : 1,
                    'transition' : "4.5s",
                    "transform" : "translateY(0)"
                });
                $('.roadmap_wrap ul li:nth-of-type(3) span').eq(3).css({
                    'opacity' : 1,
                    'transition' : "5.5s",
                    "transform" : "translateY(0)"
                });
            },800);

            // ==
            setTimeout(function(){
                $('.roadmap_wrap ul li').eq(3).find("p").css({
                    'opacity' : 1,
                    'transition' : "1.5s",
                });
                $('.roadmap_wrap ul li:nth-of-type(4) span').eq(0).css({
                    'opacity' : 1,
                    'transition' : "2.5s",
                    "transform" : "translateY(0)"
                });
                $('.roadmap_wrap ul li:nth-of-type(4) span').eq(1).css({
                    'opacity' : 1,
                    'transition' : "3.5s",
                    "transform" : "translateY(0)"
                });
                $('.roadmap_wrap ul li:nth-of-type(4) span').eq(2).css({
                    'opacity' : 1,
                    'transition' : "4.5s",
                    "transform" : "translateY(0)"
                });
                $('.roadmap_wrap ul li:nth-of-type(4) span').eq(3).css({
                    'opacity' : 1,
                    'transition' : "5.5s",
                    "transform" : "translateY(0)"
                });
            },1200);
            
        }

        
    
    });
});