// 스크롤 시 
$(window).on("scroll", function () {
    // floating button 
    // let floatBtnPos = ($(window).scrollTop() === 0)? "-138px": "0";
    // $(".travelSubscribe_floatBtn_wrap").stop().animate({right: floatBtnPos},"fast");
   
    let floatBtnPos = $(window).scrollTop();
    if(floatBtnPos == 0){
        $(".travelSubscribe_floatBtn_wrap").stop().animate({right: '-138px'},"fast");
    }else if(floatBtnPos <= 10 && floatBtnPos > 0){
        $(".travelSubscribe_floatBtn_wrap").stop().animate({right: 0},"fast");
    }

    // icon pop
    let scrollPos = $(window).scrollTop();
    console.log(scrollPos);
    if(scrollPos >= 130){
    $(".travelSubscribe_tryTitle_img").addClass("pop");
    }else{
    $(".travelSubscribe_tryTitle_img").removeClass("pop");
    }
    if(scrollPos >= 1200){
        $(".travelSubscribe_mission_icon").addClass("pop");
        }else{
        $(".travelSubscribe_mission_icon").removeClass("pop");
        }
        if(scrollPos >= 2400){
            $(".travelSubscribe_img_tit03").addClass("pop");
        }else{
            $(".travelSubscribe_img_tit03").removeClass("pop");
        }
});
// moving text
$(document).ready(function() {
    let textMove = ()=>{
      $('.travelSubscribe_movingText').animate({
        right: '136.1px'
      }, 6000, "linear", function() {
        $(this).css('right', 0);
        textMove();
        })};
        textMove();

// arrow move
    let arrowMove = ()=>{
        $(".travelSubscribe_hotEvent_rightArrow").animate({
            right: '60px'
        }, 600, function(){
            $(this).animate({
                right: '40px'
            }, 600);
            arrowMove();
        })};
    arrowMove();

// icon move(mission)
    let iconMove = ()=>{
        $(".travelSubscribe_hotEvent_missionIcon").animate({
            top: '65px',
            right: '120px'
        }, 700, "linear", function(){
            $(this).animate({
                top: '70px',
                right: '115px'
            },700, "linear",function(){
                $(this).animate({
                    top: '65px',
                    right: '115px'
                }, 700, "linear", function(){
                    $(this).animate({
                        top: '70px',
                        right: '120px'
                    }, 700, "linear")
                    iconMove();
                })
            });
        })};
        iconMove();

// tit1 move
        let tit1Move = ()=>{
            $(".travelSubscribe_hotEvent_tit1").animate({
                top: '175px',
                left: '420px'
            }, 700, "linear", function(){
                $(this).animate({
                    top: '180px',
                    left: '425px'
                }, 700, "linear", function(){
                    $(this).animate({
                        top: '180px',
                        left: '420px'
                    }, 700)
                    tit1Move();
                })})};
            tit1Move();
        
// 가볼래-터 animation
        let divMove = ()=>{
            $(".travelSubscribe_hotEvent_box").animate({
                width:'630px',
                height: '170.31px'
            }, 1500, "linear", function(){
                $(this).animate({
                    width:'600px',
                    height: '162.2px'
                }, 1500)
                divMove();
            })
        }
        divMove();
});


/* swiper*/ 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cards',
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });