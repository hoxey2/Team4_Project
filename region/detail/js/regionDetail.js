const pageNumSpan = document.querySelector(".slideNow_number");
var slideX = 0;
var pageNum = 1;

$(".region_guideList li:eq(2)").click(function() {
    $(".region_3depthList").slideToggle("fast");
})

$(".region_city_box a").click(function() {
    $(".region_city_box a").removeClass("region_city_box_active");
    $(this).addClass("region_city_box_active");
})


pageNumSpan.textContent = pageNum;
$(".detail_sliderPrevBtn").click(function() {
    if(slideX <= 0) {
        return false;
    }
    slideX -= 1120;
    pageNum--;
    $(".detail_imgSlider_box").animate({right: slideX}, 300);
    pageNumSpan.textContent = pageNum;
    
})

$(".detail_sliderNextBtn").click(function() {
    if(slideX >= 3360) {
        return false;
    }
    slideX += 1120;
    pageNum++;
    $(".detail_imgSlider_box").animate({right: slideX}, 300);
    pageNumSpan.textContent = pageNum;
})