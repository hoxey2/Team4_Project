$(".travelAiPlanner_guideList li:eq(2)").click(function() {
    $(".travelAiPlanner_3depthList").slideToggle("fast");
})

// 3D
$(".travelAiPlanner_frontMakeMore_box>button").click(function() {
    $(".travelAiPlanner_card").css("transform", "rotateY(180deg)");
})

$(".travelAiPlanner_backMakeMore_box>button").click(function() {
    $(".travelAiPlanner_card").css("transform", "rotateY(0deg)");
})


// 로그인
// 앞
$(".travelAiPlanner_frontMakeMore_box a").click(function() {
    $(".onepass_login_wrap").show();
    $(".onepass_login_on").show();
})

// 뒤
$(".travelAiPlanner_backMakeMore_box a").click(function() {
    $(".onepass_login_wrap").show();
    $(".onepass_login_on").show();
})

$(".onepass_login_title button").click(function() {
    $(".onepass_login_wrap").hide();
    $(".onepass_login_on").hide();
})


$(document).on("click", ".auto_login a[value=off]",function() {
        $(this).css("background", "url('/images/bg_ckeckbox_on.png') 0 0 / 20px 20px no-repeat");
        $(this).attr("value", "on");
})

$(document).on("click", ".auto_login a[value=on]",function() {
        $(this).css("background", "url('/images/bg_ckeckbox.png') 0 0 / 20px 20px no-repeat");
        $(this).attr("value", "off");
})