// JSON
$(document).ready(function() {
        jQuery.get("festival_data100.txt", function(data) {
            for(i=0; i<=10;i++){
                var festivals = JSON.parse(data);
                var name = festivals[i].명칭
                var address = festivals[i].주소
                var latitude = parseFloat(festivals[i].위도);
                var longitude = parseFloat(festivals[i].경도);
                $(".content").append(`<p style="padding-top:30px"><a href="#none">명칭: ${name}<br>주소: ${address}<br>위도/경도: ${latitude}/ ${longitude}</a></p>`)
                
                $(".content p").on("click", function(){
                    // var index = $(this).index();
                    // $(".content p").not(this).hide(); 
                    // $(".content p").eq(index).next().show(); 

                });
                
                idVal = "map"+i
                $(".content").append(`<div id="${idVal}" style="width:100%;height:500px;"></div>`)

                // 지도 API
                var mapContainer = document.getElementById(""+idVal+""), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(latitude,longitude), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };
                var map = new kakao.maps.Map(mapContainer, mapOption); 

                // 마커가 표시될 위치입니다 
                var markerPosition  = new kakao.maps.LatLng(latitude,longitude); 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
                
                var iwContent = `<div style="padding:5px 5px 25px;">${name}<br>${address}<br><a href="https://map.kakao.com/link/map/${name},${latitude},${longitude}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${name},${latitude},${longitude}" style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(latitude,longitude); //인포윈도우 표시 위치입니다
                
                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    position : iwPosition, 
                    content : iwContent 
                });

                // 마우스 드래그로 지도 이동 가능여부를 설정합니다
                setDraggable(false)

                // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
                setZoomable(false)
                
                // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
                infowindow.open(map, marker); 

                function setDraggable(draggable) {
                    map.setDraggable(draggable);    
                }
                function setZoomable(zoomable) {
                    map.setZoomable(zoomable);    
                }
                // $(".content p").next().hide();
            }
        });
    });