$(document).ready(function () {
    const receivedData = location.href.split('?')[1];
    let keys = JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i<=keys.length; i++) {
        if (i == receivedData) {
            const result = JSON.parse(localStorage.getItem("data"));
            const name = JSON.parse(result)[i].명칭;
            const address = JSON.parse(result)[i].주소;
            const x = JSON.parse(result)[i].위도;
            const y = JSON.parse(result)[i].경도;
            var mapContainer = document.getElementById('festivalDetail_map'), // 지도를 표시할 div 
                mapOption = {
                    center: new kakao.maps.LatLng(x, y), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };
            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            // 마커가 표시될 위치입니다 
            var markerPosition = new kakao.maps.LatLng(x, y);
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            var iwContent = `<div style="padding:5px 5px 25px;">${name}<br>${address}<br>
            <a href="https://map.kakao.com/link/map/${name},${x},${y}" 
            style="color:blue" target="_blank">큰지도보기</a> 
            <a href="https://map.kakao.com/link/to/${name},${x},${y}" 
            style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(x, y); //인포윈도우 표시 위치입니다
            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent
            });
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);
        }
    }
});
