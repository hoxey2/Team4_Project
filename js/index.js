// 메인 슬라이더(김준성)
// 현재 나타나고 있는 슬라이드 인덱스
let currentSlide=1;
// 슬라이더 아이템
const sliderItems = document.querySelectorAll('.index_sliderListItem');
// 진행바 아이템
const progressbars = document.querySelectorAll('.index_sliderProgressbar');
// 자동 실행이 되고 있는지 확인
let isInterval;

// 현재 슬라이더 인덱스
const currentSlideIndex = document.querySelector('.index_currentPageText');
// 이전 버튼
const sliderPrevBtn = document.querySelector('.index_sliderPrevBtn');
// 다음 버튼
const sliderNextBtn = document.querySelector('.index_sliderNextBtn');
// 재생 버튼
const sliderPlayBtn = document.querySelector('.index_sliderPlayBtn');
// 정지 버튼
const sliderStopBtn = document.querySelector('.index_sliderStopBtn');

sliderPrevBtn.addEventListener('click', function(){
    clearInterval(isInterval);
    runCurrentSlideInterval();
    currentSlide = currentSlide > 1 ? currentSlide - 1 : 4;
    renderCurrentSlideIndex();
})

sliderNextBtn.addEventListener('click', function(){
    clearInterval(isInterval);
    runCurrentSlideInterval();
    addCurrentSlide();
    renderCurrentSlideIndex();
})

sliderPlayBtn.addEventListener('click', function(){
    runCurrentSlideInterval();
    sliderPlayBtn.classList.add('hidden');
    sliderStopBtn.classList.remove('hidden');
})

sliderStopBtn.addEventListener('click', function(){
    clearInterval(isInterval);
    sliderStopBtn.classList.add('hidden');
    sliderPlayBtn.classList.remove('hidden');
})

runCurrentSlideInterval();
showCurrentSlider();
showCurrentProgressbar();

function renderCurrentSlideIndex(){
    currentSlideIndex.textContent=currentSlide;
    showCurrentSlider();
    showCurrentProgressbar();
}

function showCurrentSlider(){
    sliderItems.forEach((sliderItem, sliderIndex)=>{
        sliderItem.classList.add('invisible');
    })
    sliderItems[currentSlide-1].classList.remove('invisible');
}

function showCurrentProgressbar(){
    progressbars.forEach((progressbar, barIndex)=>{
        progressbar.classList.remove('index_sliderProgressbar--on')
    })
    progressbars[currentSlide-1].classList.add('index_sliderProgressbar--on')
}

function runCurrentSlideInterval(){
    isInterval = setInterval(addCurrentSlide, 4000);
}

function addCurrentSlide(){
    currentSlide = currentSlide < 4 ? currentSlide + 1 : 1;
    renderCurrentSlideIndex();
}

// 메인 맵 (임재훈)
// 지역 여행지 슬라이드
var slideX = 0;
var dotSlideX = 0;

// 이전 버튼 투명화
$(".regionMap_slide_prevBtn").css("background-position", "0 -36px");

// 슬라이드 도트
$(".regionMap_slideDot_box>button").eq(0).css("background", "#000");

// 도트 클릭시

$(".regionMap_slideDot_box>button").click(function () {
    dotSlideX = Number($(this).text());
    $(".regionMap_slideDot_box>button").css("background", "#fff");
    $(this).css("background", "#000");
    slideX = dotSlideX * 610;
    $(".regionMap_slide_box").animate({ right: slideX }, 200);


    // 이전 다음 버튼 투명상태
    // 첫 슬라이드
    if (slideX == 0) {
        $(".regionMap_slide_prevBtn").css("background-position", "0 -36px"); // 이전 반투명
        $(".regionMap_slide_nextBtn").css("background-position", "0 0"); // 다음 원상태
        // 마지막 슬라이드    
    } else if (slideX == 1830) {
        $(".regionMap_slide_prevBtn").css("background-position", "0 0"); // 이전 원상태
        $(".regionMap_slide_nextBtn").css("background-position", "0 -36px"); // 다음 반투명
        // 중간 슬라이드
    } else if (slideX > 0 && slideX < 1830) {
        $(".regionMap_slide_prevBtn").css("background-position", "0 0"); // 이전 원상태
        $(".regionMap_slide_ntextBtn").css("background-position", "0 0"); // 다음 원상태
    }
});


$(".regionMap_slide_prevBtn").click(function () {
    // 슬라이드 통제
    if (slideX <= 0) {
        return false;
    }
    slideX -= 610;
    $(".regionMap_slide_box").animate({ right: slideX }, 200);

    // 슬라이드 도트
    $(".regionMap_slideDot_box>button").css("background", "#fff");
    $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");

    // 슬라이드 처음으로 왔을 때 이전 버튼 투명화 / 처음이 아닐 때 다음 버튼 원상태
    if (slideX == 0) {
        $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
    } else {
        $(".regionMap_slide_nextBtn").css("background-position", "0 0px");
    }
})


$(".regionMap_slide_nextBtn").click(function () {
    // 이전 버튼 원상태
    $(".regionMap_slide_prevBtn").css("background-position", "0 0px");
    if (slideX >= 1770) {
        return false;
    }
    slideX += 610;
    $(".regionMap_slide_box").animate({ right: slideX }, 200);

    // 슬라이드 도트
    $(".regionMap_slideDot_box>button").css("background", "#fff");
    $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
    // 마지막 슬라이드일 때 다음 버튼 투명화
    if (slideX >= 1770) {
        $(".regionMap_slide_nextBtn").css("background-position", "0 -36px");
    }
})

// 지도
$(document).on("click", ".regionMap_map_box a", function () {
    // 클래스명 변수에 담기
    var classNames = $(this).attr("class");
    // 클래스명에 _on이 없을 때
    if (!classNames.includes("_on")) {
        // 클래스명에 _on 추가
        classNames += "_on";
        // _on 추가된 클래스 추가
        $(this).addClass(classNames);
    } else {
        // 클래스명 _on 공백으로 변경
        classNames = classNames.replace("_on", "");
    }

    // 다른 지역 _on 클래스 지우기
    $(this).siblings().each(function () {
        // 클래스명 가져오기
        var otherclassNames = $(this).attr("class");
        // 공백 기준 스플릿
        var spclass = otherclassNames.split(" ");
        // _on 들어간 클래스 지우기
        $(this).removeClass(spclass[1]);
    });
});





// 지역 json 이용
$(document).ready(function () {
    $.getJSON("https://gist.githubusercontent.com/JaeHoon925/fda7b044cdc296532b470a88e7d8a611/raw/35f7624cd31db530db662d9ae1de2a15022ae058/regionData.json", function (data) {

        for (var i = 0; i < data.seoul.length; i++) {
            $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.seoul[`${i}`].명칭);
            // 주소 가공
            var arr = data.seoul[`${i}`].주소;
            var splitarr = arr.split(" ");
            let twoarr = "";
            twoarr += splitarr[0];
            twoarr += " " + splitarr[1];
            $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

            $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.seoul[`${i}`].이미지경로 });
            $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.seoul[`${i}`].명칭 });
            $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.seoul[`${i}`].전화번호);

            $(".regionMap_slide_wrap>.regionMap_slide_box li a").eq(`${i}`).attr("value", data.seoul[`${i}`].명칭);
        }
        // 서울
        $(".seoul").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("서울");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.seoul.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.seoul[`${i}`].명칭);
                // 주소 가공
                var arr = data.seoul[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.seoul[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.seoul[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.seoul[`${i}`].전화번호);
            }
        });
        // 인천
        $(".incheon").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("인천");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.incheon.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.incheon[`${i}`].명칭);
                // 주소 가공
                var arr = data.incheon[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.incheon[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.incheon[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.incheon[`${i}`].전화번호);
            }
        });
        // 경기
        $(".gyeonggi").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("경기도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.gyeonggi.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gyeonggi[`${i}`].명칭);
                // 주소 가공
                var arr = data.gyeonggi[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gyeonggi[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gyeonggi[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gyeonggi[`${i}`].전화번호);
            }
        });
        // 강원
        $(".gangwondo").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("강원도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.gangwon.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gangwon[`${i}`].명칭);
                // 주소 가공
                var arr = data.gangwon[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gangwon[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gangwon[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gangwon[`${i}`].전화번호);
            }
        });
        // 충남
        $(".chungnam").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("충청남도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.chungnam.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.chungnam[`${i}`].명칭);
                // 주소 가공
                var arr = data.chungnam[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.chungnam[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.chungnam[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.chungnam[`${i}`].전화번호);
            }
        });
        // 세종
        $(".sejong").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("세종");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.sejong.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.sejong[`${i}`].명칭);
                // 주소 가공
                var arr = data.sejong[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.sejong[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.sejong[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.sejong[`${i}`].전화번호);
            }
        });
        // 대전
        $(".daejeon").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("대전");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.daejeon.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.daejeon[`${i}`].명칭);
                // 주소 가공
                var arr = data.daejeon[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.daejeon[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.daejeon[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.daejeon[`${i}`].전화번호);
            }
        });
        // 전북
        $(".jeonbuk").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("전라북도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.jeonbuk.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.jeonbuk[`${i}`].명칭);
                // 주소 가공
                var arr = data.jeonbuk[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.jeonbuk[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.jeonbuk[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.jeonbuk[`${i}`].전화번호);
            }
        });
        // 광주
        $(".gwangju").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("광주");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.gwangju.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gwangju[`${i}`].명칭);
                // 주소 가공
                var arr = data.gwangju[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gwangju[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gwangju[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gwangju[`${i}`].전화번호);
            }
        });
        // 전남
        $(".jeonnam").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("전라남도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.jeonnam.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.jeonnam[`${i}`].명칭);
                // 주소 가공
                var arr = data.jeonnam[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.jeonnam[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.jeonnam[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.jeonnam[`${i}`].전화번호);
            }
        });
        // 충북
        $(".chungbuk").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("충청북도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.chungbuk.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.chungbuk[`${i}`].명칭);
                // 주소 가공
                var arr = data.chungbuk[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.chungbuk[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.chungbuk[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.chungbuk[`${i}`].전화번호);
            }
        });
        // 경북
        $(".gyeongbuk").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("경상북도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.gyeongbuk.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gyeongbuk[`${i}`].명칭);
                // 주소 가공
                var arr = data.gyeongbuk[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gyeongbuk[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gyeongbuk[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gyeongbuk[`${i}`].전화번호);
            }
        });
        // 대구
        $(".daegu").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("대구");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.daegu.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.daegu[`${i}`].명칭);
                // 주소 가공
                var arr = data.daegu[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.daegu[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.daegu[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.daegu[`${i}`].전화번호);
            }
        });
        // 울산
        $(".ulsan").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("울산");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.ulsan.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.ulsan[`${i}`].명칭);
                // 주소 가공
                var arr = data.ulsan[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.ulsan[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.ulsan[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.ulsan[`${i}`].전화번호);
            }
        });
        // 부산
        $(".busan").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("부산");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.busan.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.busan[`${i}`].명칭);
                // 주소 가공
                var arr = data.busan[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.busan[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.busan[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.busan[`${i}`].전화번호);
            }
        });
        // 경남
        $(".gyeongnam").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("경상남도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.gyeongnam.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gyeongnam[`${i}`].명칭);
                // 주소 가공
                var arr = data.gyeongnam[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gyeongnam[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gyeongnam[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gyeongnam[`${i}`].전화번호);
            }
        });
        $(".jeju").click(function () {
            // 슬라이드 원위치
            $(".regionMap_slide_container>h4>strong").text("제주도");
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 200);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            // 슬라이드 도트
            $(".regionMap_slideDot_box>button").css("background", "#fff");
            $(".regionMap_slideDot_box>button").eq(`${slideX / 610}`).css("background", "#000");
            // 슬라이드 이미지 / 텍스트 지역에 맞게 뿌리기
            for (var i = 0; i < data.jeju.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.jeju[`${i}`].명칭);
                // 주소 가공
                var arr = data.jeju[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.jeju[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.jeju[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.jeju[`${i}`].전화번호);
            }
        });
    }).fail(function (jqxhr, textStatus, error) {
        // 오류 발생 시 실행되는 콜백 함수
        var err = textStatus + ", " + error;
        console.log("Failed to fetch data.json: " + err);
    });
})



// 박경훈 공지사항
var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var dateString = year + '-' + month  + '-' + day;
document.querySelector(".main_noticeDate_top").innerHTML = day;
document.querySelector(".main_noticeDate_bottom").innerHTML = year+"."+month+".";