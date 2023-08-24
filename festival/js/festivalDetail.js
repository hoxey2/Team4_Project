function clickUserExpressionLog() {
        document.querySelector('.good').classList.toggle('goodClick');
}

function clickNotLikeExpression() {
        document.querySelector('.not').classList.toggle('notClick');
}

// Object.keys 사용 
$(document).ready(function () {
        const receivedData = location.href.split('?')[1];
        let keys = Object.keys(localStorage);
        for (let i = 0; keys.length; i++) {
                if (i == receivedData) {
                        const result = JSON.parse(localStorage.getItem("data"));
                        document.querySelector(".festivalDetail_title_box").innerHTML = `
                <h2>${JSON.parse(result)[i].명칭}</h2>
                <p>전북 전주시 : ${JSON.parse(result)[i].행사시작일} ~ ${JSON.parse(result)[i].행사종료일}</p>
                <p class="festivalDdetail_caption">${JSON.parse(result)[i].개요}</p>
                `

                        document.querySelector(".slides").innerHTML = `
                <li ><img src="/festival/images/festival_img100/${JSON.parse(result)[i].명칭}_2_공공3유형.png" alt=""></li>
                <li ><img src="/festival/images/festival_img100/${JSON.parse(result)[i].명칭}_3_공공3유형.png" alt=""></li>
                <li ><img src="/festival/images/festival_img100/${JSON.parse(result)[i].명칭}_4_공공3유형.png" alt=""></li>
                `
                        document.getElementById("festivalDetail_text_box").innerHTML = `
                <h3>상세정보</h3>
                <div>
                    <p> ${JSON.parse(result)[i].상세정보}</p>
                    <p>※ 행사지의 주차장이 협소하오니 대중교통을 이용해 주시기 바랍니다.</p>
                    <p>● 9월 16일 (토) - 10월 22일 (일) 중 매주 토·일 여의도한강공원 개장 예정</p>

                    <h4>[행사내용]</h4>
                    <p>2023년 한강달빛야시장에서는 푸드트럭 39팀과 일반 상인 60팀(총 99팀)이 함께한다. 한강공원의 아름다운 야경을 배경으로 다양한 먹거리, 수공예 상품, 체험 프로그램과
                        함께
                        서울형 야시장을 즐겨보자.</p>
                    <p>*푸드트럭 40팀, *수공예 상인 50팀, *체험 프로그램</p>
                </div>
                `

                        document.getElementById("festivalDetail_detailInfo_box").innerHTML = `
                <div>
                    <p><strong>· 시작일</strong><span>${JSON.parse(result)[i].행사시작일}</span></p>
                    <p><strong>· 전화번호</strong><span>${JSON.parse(result)[i].전화번호}</span></p>
                    <p><strong>· 주소</strong><span>${JSON.parse(result)[i].주소}</span></p>
                    <p><strong>· 주최</strong><span>${JSON.parse(result)[i].주최자정보}</span></p>
                    <p><strong>· 이용요금</strong><span>${JSON.parse(result)[i].이용요금}</span></p>
                </div>
                <div>
                    <p><strong>· 종료일</strong><span>${JSON.parse(result)[i].행사종료일}</span></p>
                    <p><strong>· 홈페이지</strong><span>http://jipf.jeonju.go.kr</span></p>
                    <p><strong>· 행사장소</strong><span>${JSON.parse(result)[i].행사장소}</span></p>
                    <p><strong>· 주관</strong><span>${JSON.parse(result)[i].주최자정보}</span></p>
                    <p><strong>· 행사시간</strong><span>${JSON.parse(result)[i].공연시간}</span></p>
                </div>
                `

                        break;

                }
        }
            //Header
    $(".header").load("../header/header.html");
    //Footer
    $(".footer").load("../footer/footer.html");
});

