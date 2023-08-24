const ROW_NUMBER = 10 
$(document).ready(function(){
    // params feature
    $(".header").load("../header/header.html");
    // 최초 랜더링
 
    $.getJSON( "./data/event.json", function(data) { // 제이슨 객체 불러오기 
        console.log(data.data)
        console.log("json 데이터 길이 " , data.data.length);
        let setTotalPage =   data.data.length / ROW_NUMBER
        console.log(setTotalPage);
        // 토탈 카운트 세팅
        let paginatedItems = []
        paginatedItems = data.data
        const paginationOptions = {
            items: paginatedItems,
            rows: ROW_NUMBER,
            buttonsWrapper: "#pagination",
            handlePaginatedItems: (paginatedItems) => {
                $('.event_main_board_content_wrap').empty()
                paginatedItems.forEach((item) => {
                    listRender(item)
                });
            },
        };
        easyPagination(paginationOptions).paginate();
        
    })
    $("#event_url").click(function(){
        alert("URL이 복사되었습니다.")
    })
    // 글로벌 네비게이션 li바 최초 숨기기 
    $("#event_gnb_li").children('ul:eq(0)').css("display","none")
    // 글로벌 네비게이션 바 클릭시 최초 숨긴 li요소 슬라이드 토글 메소드 실행 
    $("#event_gnb_li").click(function () {
        $("#event_gnb_li").children('ul:eq(0)').slideToggle(500)
    })
    // 필터 버튼 누르면 이벤트 리스트 새로 세팅하는 함수한테 전달
      //ing_filter_btn getElement<- 
    $("#ing_filter_btn").click(function(){
        // add click change background-color <-?
       $("#ing_filter_btn").css({"background-color":"#0051A4","color":"white"})
       $("#ing_filter_btn").siblings().css({"background-color":"white","color":"black"})
        // id: ing_filter_btn 버튼을 누르면 어트리뷰트 value값 setEventList함수에 전달
        setEventList($("#ing_filter_btn").attr('value'))
    })
    $("#due_filter_btn").click(function(){
        $("#due_filter_btn").css({"background-color":"#0051A4","color":"white"})
        $("#due_filter_btn").siblings().css({"background-color":"white","color":"black"})
        setEventList($("#due_filter_btn").attr('value'))
    })
    $("#complete_filter_btn").click(function(){
        $("#complete_filter_btn").css({"background-color":"#0051A4","color":"white"})
        $("#complete_filter_btn").siblings().css({"background-color":"white","color":"black"})
        setEventList($("#complete_filter_btn").attr('value'))
    })
    
     function setEventList(eventStatus) {
        console.log(eventStatus)
        // 필터 버튼 이벤트발생 순간 아래 클래스 자식요소 모두 제거
        $('.event_main_board_content_wrap').children().remove()
        $.getJSON( "./data/event.json", function(data) {
            console.log(data.data)
            console.log("json 데이터 길이 " , data.data.length);
            totalCount = data.data.length
            let count = 0;
            let filterArrayData = []
             for(let i =0; i<data.data.length; i++){
                // 필터버튼 누른 value값이랑 일치하는 json객체의 eventStatus 값만 랜더링 할 수 있도록 세팅
                if(data.data[i].eventStatus == eventStatus){
                    // 반복문 한번 돌때마다 +1 씩 증감연산 
                    count++
                    // 필터 버튼의 value값과 일치하는 json객체 데이터 리스트랜더링 함수 전달
                    filterArrayData.push(data.data[i])
                } 
            }
            // 반복문에서 증감연산된 정수 totalCount에 저장
            totalCount = count
            // total count text변경
            $("#total_count_text").text(totalCount);
            $("#pagination").empty();
            const paginationOptions = {
                items: filterArrayData,
                rows: ROW_NUMBER,
                buttonsWrapper: "#pagination",
                handlePaginatedItems: (filterArrayData) => {
                    $('.event_main_board_content_wrap').empty()
                    filterArrayData.forEach((item) => {
                        listRender(item)
                    });
                },
            };
            easyPagination(paginationOptions).paginate();
        }) 
    }


    function listRender(data) {
      
        // data 파라미터 전달 받은후 데이터 세팅 
        // event_main_board_content_wrap 요소 자식으로 랜더링하기 

        if(data.eventStatus!=="complete"){
            $('.event_main_board_content_wrap')
            .append(
                `
                <li class="event_main_li_content_wrap">
                    <a class="link" href="${data.link}">
                    <div class="event_content_img">
                        <img src="images/${data.img}" alt="">
                    </div>
                    <div class="event_content">
                        <p class="title">${data.title}</p>
                        </a>
                        <p class="content">${data.content}</p>
                        <div class="event_main_bottom">
                            <span class="writer">작성자</span>
                            <b class="createdBy">${data.createdBy}</b>
                            <span class="writerDate">작성일</span>
                            <span>${data.createdAt}</span>
                        </div>
                    </div>
                </li>
                <hr>
                `
            )
       
        } else {
            $('.event_main_board_content_wrap')
            .append(
                `
                <li class="event_main_li_content_wrap">
                    <a class="link" href="${data.link}">
                    <div class="event_content_img">
                        <img src="images/${data.img}" alt="" style="filter: brightness(30%);">
                    </div>
                    <div class="event_content">
                        <p class="title">${data.title}</p>
                        </a>
                        <p class="content">${data.content}</p>
                        <div class="event_main_bottom">
                            <span class="writer">작성자</span>
                            <b class="createdBy">${data.createdBy}</b>
                            <span class="writerDate">작성일</span>
                            <span>${data.createdAt}</span>
                        </div>
                    </div>
                </li>
                <hr>
                `
            )
        }
     
    }
})
