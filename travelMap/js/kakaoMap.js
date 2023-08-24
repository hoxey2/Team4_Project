let url =
	"https://gist.githubusercontent.com/JaeHoon925/fda7b044cdc296532b470a88e7d8a611/raw/ea2a787229225ad7b4cf0d71a66a53f355b3bab5/regionData.json";
let mapContainer = document.getElementById("travelMap"), 
	mapOption = {
	// 지도를 표시할 div
	center: new kakao.maps.LatLng(37.4979, 127.0276), // 지도의 중심좌표
	level: 10, // 지도의 확대 레벨
};
let map = new kakao.maps.Map(mapContainer, mapOption);

var beach_imageSrc = 'img/beach-icon.png', // 마커이미지의 주소입니다    
	nature_imageSrc = 'img/nature-icon.png', // 마커이미지의 주소입니다    
	hotel_imageSrc = 'img/hotel-icon.png', // 마커이미지의 주소입니다    
	experience_imageSrc = 'img/experience-icon.png', // 마커이미지의 주소입니다    
	camping_imageSrc = 'img/camping-icon.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(22, 69)};
var beach_markerImage = new kakao.maps.MarkerImage(beach_imageSrc, imageSize, imageOption)
var nature_markerImage = new kakao.maps.MarkerImage(nature_imageSrc, imageSize, imageOption)
var hotel_markerImage = new kakao.maps.MarkerImage(hotel_imageSrc, imageSize, imageOption)
var experience_markerImage = new kakao.maps.MarkerImage(experience_imageSrc, imageSize, imageOption)
var camping_markerImage = new kakao.maps.MarkerImage(camping_imageSrc, imageSize, imageOption)

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
// 지도 확대 최대 레벨 지정
map.setMaxLevel(13);
// 마커 클러스터러를 생성합니다
let clusterer = new kakao.maps.MarkerClusterer({
	map: map, 
	averageCenter: true, 
	minLevel: 12, // 클러스터 할 최소 지도 레벨
});
var infowindow;
var i = null
let allRegion = [];
let variable = null;
let beach_markers;
let nature_markers;
let hotel_markers;
let experience_markers;
let camping_markers;

let beach;
let nature;
let hotel;
let experience;
let camping;
var level = map.getLevel();
var array = [];
// 데이터를 가져오기 위해 jQuery를 사용합니다
$.getJSON(url, function (data) {
	// 데이터에서 좌표 값을 가지고 마커를 표시합니다
	const keys = Object.keys(data);
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = data[key];
		allRegion = [...allRegion, ...value];
	}

}).then(function () {
	// 해변 필터
	const filterText_b = ["해수","해변","포구","해안","유람"];
	beach = allRegion.filter((el) =>
		filterText_b.some((text) => el.명칭.includes(text))
	);
	// 자연 필터
	const filterText_p = ["공원", "정원", "파크","자연","산","수목","생태","숲"];
	nature = allRegion.filter((el) =>
	filterText_p.some((text) => el.명칭.includes(text))
	);
	// 숙박 필터
	const filterText_h = ["호텔", "리조트", "펜션"];
	hotel = allRegion.filter((el) =>
		filterText_h.some((text) => el.명칭.includes(text))
	);
	// 체험 필터
	const filterText_e = ["체험", "마을","시장","문화","랜드","과학","음악","테마"];
	experience = allRegion.filter((el) =>
		filterText_e.some((text) => el.명칭.includes(text))
	);
	// 캠핑 필터
	const filterText_c = ["캠핑","캠프"];
	camping = allRegion.filter((el) =>
		filterText_c.some((text) => el.명칭.includes(text))
	);
	beach_markers = beach.map((position) => {
		return new kakao.maps.Marker({
			position: new kakao.maps.LatLng(position.위도, position.경도),
			image: beach_markerImage
		});
	});
	nature_markers = nature.map((position) => {
		return new kakao.maps.Marker({
			position: new kakao.maps.LatLng(position.위도, position.경도),
			image: nature_markerImage
		});
	});
	hotel_markers = hotel.map((position) => {
		return new kakao.maps.Marker({
			position: new kakao.maps.LatLng(position.위도, position.경도),
			image: hotel_markerImage
		});
	});
	experience_markers = experience.map((position) => {
		return new kakao.maps.Marker({
			position: new kakao.maps.LatLng(position.위도, position.경도),
			image: experience_markerImage
		});
	});
	camping_markers = camping.map((position) => {
		return new kakao.maps.Marker({
			position: new kakao.maps.LatLng(position.위도, position.경도),
			image: camping_markerImage
		});
	});

	// 클러스터러에 마커 추가
	clusterer.addMarkers(beach_markers);
	clusterer.addMarkers(nature_markers);
	clusterer.addMarkers(hotel_markers);
	clusterer.addMarkers(experience_markers);
	clusterer.addMarkers(camping_markers);
	allCategory = [...beach,...nature,...hotel,...experience,...camping]
	variable = allCategory;
	let count = 7;
	let page = 2;
	let isAllLoaded = false;
	
	function loadMoreContent(index) {
		for (i = index; i < index + count; i++) {
			if(i == variable.length) {
				isAllLoaded = true;
				break;
			}
			const keys = Object.keys(variable[i]);
			const isnatureable = keys.filter((v) => v.includes("주차")).length > 0;
			const isPaid = keys.filter((v) => v.includes("요금")).length > 0;
			$(".travelMap_cont").append(
				`
				<li class="travelMap_cont_card">
				<a href="javascript:void(0)"><img src="../${
					variable[i].이미지경로
				}" alt=""></a>
				<div class="travelMap_cont_info">
				<a href="javascript:void(0)">${variable[i].명칭}</a>
				<em>${variable[i].주소}</em>
				<span>${isnatureable ? "주차가능" : "주차불가"}${
					isPaid ? " · 유료" : ""
				}</span>
				</div>
				</li>
				`
			)
		}
	};
	$(".travelMap_category_card li").on("click", function () {
		$(".travelMap_cont li").remove();
		$(this).scrollTop(0)
		zoomOut();
		if(infowindow){
			infowindow.close();
		}
		isAllLoaded = true;
		let category = { beach, nature, hotel, experience, camping };
		variable = category[$(this).find("img").attr("alt")];
		for (i = 0; i < variable.length; i++) {
			keys = Object.keys(variable[i]);
			isnatureable = keys.filter((v) => v.includes("주차")).length > 0;
			isPaid = keys.filter((v) => v.includes("요금")).length > 0;
			$(".travelMap_cont").append(
				`
                <li class="travelMap_cont_card">
                <a href="javascript:void(0)"><img src="../${
					variable[i].이미지경로
				}" alt=""></a>
                <div class="travelMap_cont_info">
                <a href="javascript:void(0)">${variable[i].명칭}</a>
                <em>${variable[i].주소}</em>
                <span>${isnatureable ? "주차가능" : "주차불가"}${
					isPaid ? " · 유료" : ""
				}</span>
                </div>
                </li>
                `
				)
			}
			// 이미지 클릭시 위치로 이동 ( 테마 선택시 )
			$(".travelMap_cont_card > a, .travelMap_cont_info > a").on("click", function () {
				let num = $(this).parents(".travelMap_cont_card").index();
				i = num
				setCenter();
				panTo();
				zoomIn();
				var iwContent = `<div style="padding:10px 0px 0px;font-size: 16px;color: #333;line-height: 23px;font-weight: 500;text-align:center;">${variable[i].명칭}<br><span style="font-size:12px;color:#666666;font-weight:300;width:100px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">${variable[i].주소}</span><br><div style="display:flex;justify-content:space-around;width:100%;padding:3px 0;border-top:1px dashed #007bff"><a style="font-size: 12px;color:#007bff;" href="https://map.kakao.com/link/map/${variable[i].명칭},${variable[i].위도}, ${variable[i].경도}" style="color:blue" target="_blank">큰지도보기</a><a href="https://map.kakao.com/link/to/${variable[i].명칭},${variable[i].위도}, ${variable[i].경도}" style="font-size: 12px;color:#007bff;padding:auto;" target="_blank">길찾기</a></div></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
				iwPosition = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
				iwRemoveable = true;
				// 인포윈도우를 생성합니다
				infowindow = new kakao.maps.InfoWindow({
					position : iwPosition, 
					content : iwContent,
					removable : iwRemoveable
		});
			array.push(infowindow);
			closeInfoWindow();
			if(variable == beach){
				infowindow.open(map, beach_markers[i]); 
			}else if(variable == nature){
				infowindow.open(map, nature_markers[i]); 
			}else if(variable == hotel){
				infowindow.open(map, hotel_markers[i]); 
			}else if(variable == experience){
				infowindow.open(map, experience_markers[i]); 
			}else if(variable == camping){
				infowindow.open(map, camping_markers[i]); 
			}
			kakao.maps.event.addListener(beach_markers[i], "click", function() {
				infowindow.open(map, beach_markers[i]);  
			});
			})
		});
	function setCenter() {            
		var moveLatLon = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
		map.setCenter(moveLatLon);
	}
	function panTo() {
		// 이동할 위도 경도 위치를 생성합니다 
		var moveLatLon = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
		// 지도 중심을 부드럽게 이동시킵니다 (만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다)
		map.panTo(moveLatLon);            
	}        
	function zoomIn() {        
		// 현재 지도의 레벨을 얻어옵니다
		var level = map.getLevel();
		level = 5;
		map.setLevel(level);
	}    
	function zoomOut() {    
		var level = map.getLevel(); 
		level = 12;
		map.setLevel(level);
	}    
	function closeInfoWindow(){
		for(var idx=0; idx<array.length; idx++){
			array[idx].close();
		}
	}
	loadMoreContent(0);
	document.querySelector('.travelMap_cont_box').addEventListener('scroll', function() {
		if (this.scrollTop + this.clientHeight >= this.scrollHeight && !isAllLoaded) {
			let startIndex = (page - 1) * count;
			loadMoreContent(startIndex);
			page++;
		}
		// 이미지 클릭시 위치로 이동 ( 무한 스크롤 후 )
		$(".travelMap_cont_card > a, .travelMap_cont_info > a").on("click", function () {
			let num = $(this).parents(".travelMap_cont_card").index();
			i = num
			console.log(i)
			if(i<=24){
				variable = beach
			}else if(i<=115&&i>24){
				variable = nature
			}else if(i<=138&&i>115){
				variable = hotel
			}else if(i<=171&&i>138){
				variable = experience
			}else if(i<=179&&i>171){
				variable = camping
			}
			setCenter();
			panTo();
			zoomIn();
			var iwContent = `<div style="padding:10px 0px 0px;font-size: 16px;color: #333;line-height: 23px;font-weight: 500;text-align:center;">${variable[i].명칭}<br><span style="font-size:12px;color:#666666;font-weight:300;width:100px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">${variable[i].주소}</span><br><div style="display:flex;justify-content:space-around;width:100%;padding:3px 0;border-top:1px dashed #007bff"><a style="font-size: 12px;color:#007bff;" href="https://map.kakao.com/link/map/${variable[i].명칭},${variable[i].위도}, ${variable[i].경도}" style="color:blue" target="_blank">큰지도보기</a><a href="https://map.kakao.com/link/to/${variable[i].명칭},${variable[i].위도}, ${variable[i].경도}" style="font-size: 12px;color:#007bff;padding:auto;" target="_blank">길찾기</a></div></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			iwPosition = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
			iwRemoveable = true;
			// 인포윈도우를 생성합니다
			infowindow = new kakao.maps.InfoWindow({
				position : iwPosition, 
				content : iwContent,
				removable : iwRemoveable
		});
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
			array.push(infowindow);
			closeInfoWindow();
			if(i<=24){
				infowindow.open(map, beach_markers[i]); 
			}else if(i<=115&&i>24){
				infowindow.open(map, nature_markers[i]); 
			}else if(i<=138&&i>115){
				infowindow.open(map, hotel_markers[i]); 
			}else if(i<=171&&i>138){
				infowindow.open(map, experience_markers[i]); 
			}else if(i<=179&&i>171){
				infowindow.open(map, camping_markers[i]); 
			}
			kakao.maps.event.addListener(beach_markers[i], "click", function() {
				infowindow.open(map, beach_markers[i]);  
				});
		})
	});	
	 // 이미지 클릭시 위치로 이동 ( 무한 스크롤 전 )
	$(".travelMap_cont_card > a, .travelMap_cont_info > a").on("click", function () {
		let num = $(this).parents(".travelMap_cont_card").index();
		i = num
		variable = beach
		setCenter();
		panTo();
		zoomIn();
		var iwContent = `<div style="padding:10px 0px 0px;font-size: 16px;color: #333;line-height: 23px;font-weight: 500;text-align:center;">${variable[i].명칭}<br><span style="font-size:12px;color:#666666;font-weight:300;width:100px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">${variable[i].주소}</span><br><div style="display:flex;justify-content:space-around;width:100%;padding:3px 0;border-top:1px dashed #007bff"><a style="font-size: 12px;color:#007bff;" href="https://map.kakao.com/link/map/${variable[i].명칭},${variable[i].위도}, ${variable[i].경도}" style="color:blue" target="_blank">큰지도보기</a><a href="https://map.kakao.com/link/to/${variable[i].명칭},${variable[i].위도}, ${variable[i].경도}" style="font-size: 12px;color:#007bff;padding:auto;" target="_blank">길찾기</a></div></div>`,
		iwPosition = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
		iwRemoveable = true;
		// 인포윈도우를 생성합니다
		infowindow = new kakao.maps.InfoWindow({
			position : iwPosition, 
			content : iwContent,
			removable : iwRemoveable
		});
		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
		array.push(infowindow);
		closeInfoWindow();
		infowindow.open(map, beach_markers[i]);
		
		kakao.maps.event.addListener(beach_markers[i], "click", function() {
			infowindow.open(map, beach_markers[i]);  
		});
	})
});
// for(i=0;i<beach.length;i++){
// 	infowindow.open(map, beach_markers[i]);  
// }


// 클러스터링이 완료됐을 때 발생한다.
kakao.maps.event.addListener(clusterer, "clustered", function (clusters) {
	for (var i = 0; i < clusters.length; i++) {
		var cluster = clusters[i];
		var overlay = cluster.getClusterMarker().getContent();
		overlay.classList.add("cluster_style");
	}
});
