// JSON
$(document).ready(function () {
	var allData = "";
	var count = 15;
	$.get(
		"https://gist.githubusercontent.com/GyeungHoon/483112e427915938240c7d2ab9ed59b2/raw/579100bba55992cad40e360704bffa16bcc07c71/festival.json", function (data) {
			allData = JSON.parse(data);
			for (var i = 0, len = Math.ceil(allData.length / count); i < len; i++) {
				$("#paging").append(`<a href="#">${i + 1}</a>`);
			}
		}
	).then(function () {
		loadPage(1);
	});

	$("#region").on("change", function () {
		var index = $(this).val();
		loadMap(index);
	});

	$(document).on("click", "#paging>a", function () {
		$("#container").children().remove();
		loadPage($(this).index() + 1);
	});

	$(document).on("click", "#container>div", function () {
		document.querySelector("dialog").show();
		var index = $(this).data("index");
		var target = allData[index];
		var name = target.명칭;
		var address = target.주소;
		var latitude = parseFloat(target.위도);
		var longitude = parseFloat(target.경도);
		$("#info").text(
			`명칭: ${name} / 주소: ${address} / 위도: ${latitude} / 경도: ${longitude}`
		);
		loadMap(index);
	});

	function loadPage(paging) {
		var pagingStart = (paging - 1) * count;
		var pagingEnd = pagingStart + count;
		for (var index = pagingStart; index < pagingEnd; index++) {
			var target = allData[index];
			var name = target.명칭;
			var address = target.주소;
			$("#container").append(`<div data-index=${index}>
                <div>${name}</div>
                <div>${address}</div>
            </div>`);
		}
	}

	// 지도 API
	var mapContainer = document.getElementById("map"); // 지도를 표시할 div
	function loadMap(index) {
		$(mapContainer).children().remove();

		var target = allData[index];
		var name = target.명칭;
		var address = target.주소;
		var latitude = parseFloat(target.위도);
		var longitude = parseFloat(target.경도);

		mapOption = {
			center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
			level: 3, // 지도의 확대 레벨
		};
		var map = new kakao.maps.Map(mapContainer, mapOption);

		// 마커가 표시될 위치입니다
		var markerPosition = new kakao.maps.LatLng(latitude, longitude);

		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			position: markerPosition,
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);

		var iwContent = `<div style="padding:5px 5px 25px;">${name}<br>${address}<br><a href="https://map.kakao.com/link/map/${name},${latitude},${longitude}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${name},${latitude},${longitude}" style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			iwPosition = new kakao.maps.LatLng(latitude, longitude); //인포윈도우 표시 위치입니다

		// 인포윈도우를 생성합니다
		var infowindow = new kakao.maps.InfoWindow({
			position: iwPosition,
			content: iwContent,
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
