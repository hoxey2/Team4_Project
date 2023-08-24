// 경로 선택
$(".main_themeRoute_wrap h5 a").on("click", () => {
	$(".main_themeRoute_wrap ul").slideToggle();
});

// go to top 기능
var topBtn = document.querySelector(".theme_float_btn");
topBtn.onclick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

$(document).ready(() => {
	// sample 슬라이드
	s_currentSlide = 1;
	s_sliderWidth = 1180;
	s_slideCount = 3;
	$(".sample_slideBtn_next").on("click", function () {
		s_currentSlide++;
		if (s_currentSlide > s_slideCount) {
			s_currentSlide = 1;
			$(".sample_slideImg_box").css("left", "0px");
		}
		$(".sample_slideImg_box")
			.stop()
			.animate({ left: -s_currentSlide * s_sliderWidth + "px" }, "fast");
	});
	$(".sample_slideBtn_prev").on("click", function () {
		s_currentSlide--;
		if (s_currentSlide < 1) {
			s_currentSlide = s_slideCount;
			$(".sample_slideImg_box").css(
				"left",
				-1180 - s_currentSlide * s_sliderWidth + "px"
			);
		}
		$(".sample_slideImg_box")
			.stop()
			.animate({ left: -s_currentSlide * s_sliderWidth + "px" }, "fast");
	});
});