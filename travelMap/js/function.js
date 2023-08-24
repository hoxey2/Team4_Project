$(document).ready(function () {
	// cont_wrap 숨기기
	$(".travelMap_btn_wrap img").on("click", function () {
		$(".travelMap_cont_wrap").toggleClass("animated");
		$(this).toggleClass("btn_change");
		$(this).parent().toggleClass("btn_move");
	});
	control_mouse();
});

// 마우스 제어 (우클릭/ 드래그 차단)
function control_mouse() {
	$(document).bind("contextmenu", function (e) {
		return false;
	});
	$(document).bind("selectstart", function () {
		return false;
	});
	$(document).bind("dragstart", function () {
		return false;
	});
}
