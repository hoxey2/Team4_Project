// JSON
$(document).ready(function() {
    var allData = "";
    $.get('https://gist.githubusercontent.com/GyeungHoon/6b6f6a0638ebc61bc3ca9f38af9e9f99/raw/8398f334ae257c716140e55485e174e0b6a596fd/festival.json', function(data) {
        allData = JSON.parse(data);
        for(var i = 0, len = allData.length; i < len; i++){
            var name = allData[i].명칭;
            $('#region').append(`<option value="${i}">${i + '.' + name}</option>`);
        }
    }).then(function() {
        loadMap(0);
    });

    $("#region").on("change", function(){
        var index = $(this).val();
        loadMap(index);
    });

    // 지도 API
    var mapContainer = document.getElementById("map"); // 지도를 표시할 div 
    function loadMap(index) {
        var target = allData[index];
        var name = target.명칭;
        var address = target.주소
        var latitude = parseFloat(target.위도);
        var longitude = parseFloat(target.경도);

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
        // setDraggable(false)

        // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
        // setZoomable(false)
        
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker); 

        function setDraggable(draggable) {
            map.setDraggable(draggable);    
        }

        function setZoomable(zoomable) {
            map.setZoomable(zoomable);    
        }
    }
});