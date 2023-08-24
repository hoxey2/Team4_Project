$(".region_guideList li:eq(2)").click(function () {
    $(".region_3depthList").slideToggle("fast");
})

$(".region_city_box a").click(function () {
    $(".region_city_box a").removeClass("region_city_box_active");
    $(this).addClass("region_city_box_active");
})


$(document).ready(function () {
    $.getJSON("https://gist.githubusercontent.com/JaeHoon925/fda7b044cdc296532b470a88e7d8a611/raw/35f7624cd31db530db662d9ae1de2a15022ae058/regionData.json", function (data) {

        for (var i = 0; i < data.seoul.length; i++) {
            $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.seoul[`${i}`].명칭);
            $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.seoul[`${i}`].개요);
            var arr = data.seoul[`${i}`].주소;
            var splitarr = arr.split(" ");

            $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.seoul[`${i}`].이미지경로 });
            $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.seoul[`${i}`].명칭 });
            $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
            $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
            $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.seoul[`${i}`].전화번호);
        }

        
        
        $(".seoul").click(function () {
            for (var i = 0; i < data.seoul.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.seoul[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.seoul[`${i}`].개요);
                let arr = data.seoul[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.seoul[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.seoul[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.seoul[`${i}`].전화번호);
            }
        });

        $(".busan").click(function () {
            for (var i = 0; i < data.busan.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.busan[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.busan[`${i}`].개요);
                let arr = data.busan[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.busan[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.busan[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.busan[`${i}`].전화번호);
            }
        })
        
        $(".daegu").click(function () {
            for (var i = 0; i < data.daegu.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.daegu[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.daegu[`${i}`].개요);
                let arr = data.daegu[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.daegu[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.daegu[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.daegu[`${i}`].전화번호);
            }
        })
        $(".incheon").click(function () {
            for (var i = 0; i < data.daegu.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.incheon[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.incheon[`${i}`].개요);
                let arr = data.incheon[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.incheon[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.incheon[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.incheon[`${i}`].전화번호);
            }
        })
        $(".gwangju").click(function () {
            for (var i = 0; i < data.gwangju.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.gwangju[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.gwangju[`${i}`].개요);
                let arr = data.gwangju[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.gwangju[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.gwangju[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.gwangju[`${i}`].전화번호);
            }
        })
        $(".daejeon").click(function () {
            for (var i = 0; i < data.daejeon.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.daejeon[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.daejeon[`${i}`].개요);
                let arr = data.daejeon[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.daejeon[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.daejeon[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.daejeon[`${i}`].전화번호);
            }
        })
        $(".ulsan").click(function () {
            for (var i = 0; i < data.ulsan.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.ulsan[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.ulsan[`${i}`].개요);
                let arr = data.ulsan[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.ulsan[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.ulsan[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.ulsan[`${i}`].전화번호);
            }
        })
        $(".sejong").click(function () {
            for (var i = 0; i < data.sejong.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.sejong[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.sejong[`${i}`].개요);
                let arr = data.sejong[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.sejong[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.sejong[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.sejong[`${i}`].전화번호);
            }
        })
        $(".gyeonggi").click(function () {
            for (var i = 0; i < data.gyeonggi.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.gyeonggi[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.gyeonggi[`${i}`].개요);
                let arr = data.gyeonggi[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.gyeonggi[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.gyeonggi[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.gyeonggi[`${i}`].전화번호);
            }
        })
        $(".gangwon").click(function () {
            for (var i = 0; i < data.gangwon.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.gangwon[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.gangwon[`${i}`].개요);
                let arr = data.gangwon[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.gangwon[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.gangwon[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.gangwon[`${i}`].전화번호);
            }
        })
        $(".chungbuk").click(function () {
            for (var i = 0; i < data.chungbuk.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.chungbuk[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.chungbuk[`${i}`].개요);
                let arr = data.chungbuk[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.chungbuk[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.chungbuk[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.chungbuk[`${i}`].전화번호);
            }
        })
        $(".chungnam").click(function () {
            for (var i = 0; i < data.chungnam.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.chungnam[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.chungnam[`${i}`].개요);
                let arr = data.chungnam[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.chungnam[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.chungnam[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.chungnam[`${i}`].전화번호);
            }
        })
        $(".gyeongbuk").click(function () {
            for (var i = 0; i < data.gyeongbuk.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.gyeongbuk[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.gyeongbuk[`${i}`].개요);
                let arr = data.gyeongbuk[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.gyeongbuk[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.gyeongbuk[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.gyeongbuk[`${i}`].전화번호);
            }
        })
        $(".gyeongnam").click(function () {
            for (var i = 0; i < data.gyeongnam.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.gyeongnam[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.gyeongnam[`${i}`].개요);
                let arr = data.gyeongnam[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.gyeongnam[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.gyeongnam[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.gyeongnam[`${i}`].전화번호);
            }
        })
        $(".jeonbuk").click(function () {
            for (var i = 0; i < data.jeonbuk.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.jeonbuk[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.jeonbuk[`${i}`].개요);
                let arr = data.jeonbuk[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.jeonbuk[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.jeonbuk[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.jeonbuk[`${i}`].전화번호);
            }
        })
        $(".jeonnam").click(function () {
            for (var i = 0; i < data.jeonnam.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.jeonnam[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.jeonnam[`${i}`].개요);
                let arr = data.jeonnam[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.jeonnam[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.jeonnam[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.jeonnam[`${i}`].전화번호);
            }
        })
        $(".jeju").click(function () {
            for (var i = 0; i < data.jeju.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.jeju[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.jeju[`${i}`].개요);
                let arr = data.jeju[`${i}`].주소;
                let splitarr = arr.split(" ");
                
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.jeju[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.jeju[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.jeju[`${i}`].전화번호);
            }
        })
    }).fail(function (jqxhr, textStatus, error) {
        // 오류 발생 시 실행되는 콜백 함수
        var err = textStatus + ", " + error;
        console.log("Failed to fetch data.json: " + err);
    });

});








