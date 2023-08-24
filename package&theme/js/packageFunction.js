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
	// package_travel_now 슬라이드
	origin = 1770;
	p_currentSlide = 0;
	sliderWidth = 295;
	slideCount = 6;
	$(".package_travel_now .package_sliderBtn_next").on("click", function () {
		p_currentSlide++;
		if (p_currentSlide > slideCount) {
			p_currentSlide = 1;
			$(".package_travel_now .package_slider").css("right", "1770px");
		}
		$(".package_travel_now .package_slider")
			.stop()
			.animate({ right: origin + p_currentSlide * sliderWidth + "px" }, "fast");
	});
	$(".package_travel_now .package_sliderBtn_prev").on("click", function () {
		p_currentSlide--;
		if (p_currentSlide < -slideCount) {
			p_currentSlide = -1;
			$(".package_travel_now .package_slider").css("right", "1770px");
		}
		$(".package_travel_now .package_slider")
			.stop()
			.animate({ right: origin + p_currentSlide * sliderWidth + "px" }, "fast");
	});


	// package_wellness_travel슬라이드
	let w_currentSlide = 0;
	$(".package_wellness_travel .package_sliderBtn_next").on(
		"click",
		function () {
			w_currentSlide++;
			if (w_currentSlide > slideCount) {
				w_currentSlide = 1;
				$(".package_wellness_travel .package_slider").css("right", "1770px");
			}
			$(".package_wellness_travel .package_slider")
				.stop()
				.animate(
					{ right: origin + w_currentSlide * sliderWidth + "px" },
					"fast"
				);
		}
	);
	$(".package_wellness_travel .package_sliderBtn_prev").on(
		"click",
		function () {
			w_currentSlide--;
			if (w_currentSlide < -slideCount) {
				w_currentSlide = -1;
				$(".package_wellness_travel .package_slider").css("right", "1770px");
			}
			$(".package_wellness_travel .package_slider")
				.stop()
				.animate(
					{ right: origin + w_currentSlide * sliderWidth + "px" },
					"fast"
				);
		}
	);
	
	// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });
	const burst = new mojs.Burst({
		left: 0,
		top: 0,
		radius: { 4: 32 },
		angle: 45,
		count: 14,
		children: {
			radius: 2.5,
			fill: "#FD7932",
			scale: { 1: 0, easing: "quad.in" },
			pathScale: [0.8, null],
			degreeShift: [13, null],
			duration: [500, 700],
			easing: "quint.out",
		},
	});

	// 좋아요 기능 숫자, 모양만
	$(".package_card_likeImg").on("click", function (e) {
		e.stopPropagation();
		console.log(e)
		$(this).find("img").toggleClass("liked");
		var liked = $(this).prev().text();
		liked = parseFloat(liked);
		if ($(this).find("img").hasClass("liked")) {
			liked++;
			$(this).prev().text(liked);
			const coords = { x: e.pageX, y: e.pageY };
			burst.tune(coords).replay();
		} else {
			liked--;
			$(this).prev().text(liked);
		}
	});
	// 배너 자동 슬라이드 기능 구현
	let bannerWidth = 1180;
	let index = 0;
	let autoSlide = setInterval(bnSlide, 3000);
	function bnSlide() {
		index++;
		$(".package_banner_box")
			.stop()
			.animate({ right: (index % 3) * bannerWidth + "px" }, 1000);
		$(`.package_banner_index div:eq(${index % 3})`).addClass("dot_active");
		$(`.package_banner_index div:eq(${index % 3})`)
			.siblings()
			.removeClass("dot_active");
	}
	// 재생 정지 버튼
	$(".package_banner_index img").on("click", function () {
		$(".package_banner_stop").toggleClass("disabled");
		$(".package_banner_play").toggleClass("active");
		if ($(".package_banner_play").hasClass("active")) {
			clearInterval(autoSlide);
		} else {
			autoSlide = setInterval(bnSlide, 3000);
		}
	});
	//banner_index 클릭시
	$(".package_banner_index div").on("click", function () {
		$(this).addClass("dot_active");
		$(this).siblings().removeClass("dot_active");
		if ($(".package_banner_play").hasClass("disabled")) {
			clearInterval(autoSlide);
			$(".package_banner_stop").addClass("disabled");
			$(".package_banner_play").addClass("active");
			let dot_index = $(this).index() - 2;
			$(".package_banner_box")
				.stop()
				.animate({ right: dot_index * bannerWidth + "px" }, 1000);
			index = dot_index;
		}
	});
	//popup 최종
	var clone;
	$(".package_card").on("click", function popup() {
		clone = $(this).clone().appendTo($(".pop_up_cont"));
		clone.find(".package_likeImg").attr("src", "../img/btn_good01.png")
		clone.find(".package_card_bgImg").append("<div class='bg_dark'></div>")
		clone.find(".package_card_content").append("<a href='https://www.hanatour.com/'>지금 예약하기</a>")
		$(".pop_up").fadeIn();
	});
	$(".pop_up").on("click", function (e) {
		let target = e.target.className;
		console.log(target)
		if(target === "pop_up_cont" || target === "pop_up") {
			$(".pop_up").css("display", "none");
			$(".pop_up_cont").children("div").remove();
		}
	});
}); //document.ready