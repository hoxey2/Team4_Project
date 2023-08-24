var recentSlideX = 0;
var yesterSlideX = 0;
var recentBar = 0;
$(".travelAi_guideList li:eq(2)").click(() => {
    $(".travelAi_3depthList").slideToggle("fast");
})

$(".travelAi_today_hover_wrap ul li").hover(
    function () {
        $(".travelAi_today_hover_wrap ul li").stop().animate({ width: "250" }, 100);
        $(this).stop().animate({ width: "370" }, 100);
        $(".travelAi_today_hover_wrap ul li:first-child").css("box-shadow", "");
        $(this).css("box-shadow", "11px 12px 29px 0px rgba(32, 54, 90, 0.27)");
    }, function () {
        $(this).stop().animate({ width: "250" }, 100);
        $(this).css("box-shadow", "");
    });

$(".travelAi_today_hover_wrap li").mouseleave(function () {
    $(".travelAi_today_hover_wrap ul li:first-child").stop().animate({ width: "370" }, 100);
    $(".travelAi_today_hover_wrap ul li:first-child").css("box-shadow", "11px 12px 29px 0px rgba(32, 54, 90, 0.27)");
})

$(document).on("click", ".travelAi_likeBtn[title='x']", function () {
    alert("좋아요를 저장하였습니다.");
    $(this).addClass("travelAi_likeBtnOn");
    $(this).attr("title", "o");
});

$(document).on("click", ".travelAi_likeBtn[title='o']", function () {
    alert("이미 좋아요를 한 콘텐츠입니다.");
});

// recent slide
// 버튼 변경
if (recentSlideX == 0) {
    $(".travelAi_recent_wrap>.travelAi_recentSlide_prevBtn").css("background-position", "0 -36px");
}

// 이전 버튼 클릭
$(".travelAi_recentSlide_prevBtn").click(function () {
    // 다음 버튼 원상태
    $(".travelAi_recent_wrap>.travelAi_recentSlide_nextBtn").css("background-position", "50% 0");

    if (recentSlideX <= 0) {
        return false;
    }

    recentSlideX -= 300;
    recentBar -= 236;
    $(".travelAi_recent_wrap ul li").animate({ right: recentSlideX }, 200);
    $(".travelAi_scrollBar").animate({ left: recentBar }, 200);

    if (recentSlideX == 0) {
        // 이전 버튼 투명 상태
        $(".travelAi_recent_wrap>.travelAi_recentSlide_prevBtn").css("background-position", "0 -36px");
    }
});

// 다음 버튼 클릭
$(".travelAi_recentSlide_nextBtn").click(function () {
    // 이전 버튼 원상태
    $(".travelAi_recent_wrap>.travelAi_recentSlide_prevBtn").css("background-position", "50% 0");
    if (recentSlideX >= 1200) {
        return false;
    }
    recentSlideX += 300;
    recentBar += 236;
    if (recentSlideX == 1200) {
        // 다음 버튼 투명 상태
        $(".travelAi_recent_wrap>.travelAi_recentSlide_nextBtn").css("background-position", "0 -36px");
    }
    $(".travelAi_recent_wrap ul li").animate({ right: recentSlideX }, 200);
    $(".travelAi_scrollBar").animate({ left: recentBar }, 200);
    console.log(recentSlideX);
});


// yester
// 버튼 변경
if (yesterSlideX == 0) {
    $(".travelAi_yesterList_wrap>.travelAi_yesterSlide_prevBtn").css("background-position", "0 -36px");
}

// 이전 버튼 클릭
$(".travelAi_yesterSlide_prevBtn").click(function () {
    $(".travelAi_yesterList_box").animate({ right: 0 }, 200);

    // 다음 버튼 원상태
    $(".travelAi_yesterList_wrap>.travelAi_yesterSlide_nextBtn").css("background-position", "50% 0");

    // 이전 버튼 투명 상태
    $(".travelAi_yesterList_wrap>.travelAi_yesterSlide_prevBtn").css("background-position", "0 -36px");
});

// 다음 버튼 클릭
$(".travelAi_yesterSlide_nextBtn").click(function () {
    $(".travelAi_yesterList_box").animate({ right: 1180 }, 200);

    // 이전 버튼 원상태
    $(".travelAi_yesterList_wrap>.travelAi_yesterSlide_prevBtn").css("background-position", "50% 0");

    // 다음 버튼 투명 상태
    $(".travelAi_yesterList_wrap>.travelAi_yesterSlide_nextBtn").css("background-position", "0 -36px");
});


$(document).on("click", ".layerBtn[title='off']", function () {
    $(".travelAi_yesterSub_box").show();
    $(this).attr("title", "on");
});
$(document).on("click", ".layerBtn[title='on']", function () {
    $(".travelAi_yesterSub_box").hide();
    $(this).attr("title", "off");
});