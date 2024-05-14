var Container = document.getElementById('map'), // 지도를 표시할 div
	Option = {
		center: new kakao.maps.LatLng(37.4895097, 126.7835609), // 지도의 중심좌표
		level: 1, // 지도의 확대 레벨
	};

let branchBtn = document.querySelectorAll('.branch li');
var map = new kakao.maps.Map(Container, Option); // 지도를 생성합니다
let trafficOnBtn = document.querySelectorAll('.traffic li')[0];
let trafficOffBtn = document.querySelectorAll('.traffic li')[1];

// 아래와 같이 li를 배열변수로 담고 각 버튼을 배열의 순번으로 변수로 담을경우
// 변수의 갯수가 좀 더 많아지기 때문에 위에의 경우 li를 배열변수로 담는 과정을
// 생략하면서 바로 순번변수로 지정하는 방법임

// let trafficBtn = document.querySelectorAll('.traffic li');
// let Onbtn = trafficBtn[0];
// let Offbtn = trafficBtn[1];

let markerOptions = [
	{
		title: '본점', //제목
		latlng: new kakao.maps.LatLng(37.4895097, 126.7835609), //지도의 위치
		imgSrc: '../img/marker1.png', //마커이미지 경로설정
		imgSize: new kakao.maps.Size(232, 99), // 마커이미지의 크기 (실제 가지고 있는 png파일의 크기를 기재해주어야함)
		imgPosition: { offset: new kakao.maps.Point(116, 99) },
		// 이미지의 위치를 지정합니다. x축은 이미지 크기 절반을 작성하고 y축은 임의조정해야함
		button: branchBtn[0], //마커와 매치시킬 버튼의 인덱스를 저장해둠
	},
	{
		title: '지점1', //제목
		latlng: new kakao.maps.LatLng(37.6711777, 126.7595354), //지도의 위치
		imgSrc: '../img/marker2.png', //마커이미지 경로설정
		imgSize: new kakao.maps.Size(232, 99), // 마커이미지의 크기 (실제 가지고 있는 png파일의 크기를 기재해주어야함)
		imgPosition: { offset: new kakao.maps.Point(116, 99) },
		// 이미지의 위치를 지정합니다. x축은 이미지 크기 절반을 작성하고 y축은 임의조정해야함
		button: branchBtn[1], //마커와 매치시킬 버튼의 인덱스를 저장해둠
	},
	{
		title: '지점2', //제목
		latlng: new kakao.maps.LatLng(37.6577129, 126.7736526), //지도의 위치
		imgSrc: '../img/marker3.png', //마커이미지 경로설정
		imgSize: new kakao.maps.Size(232, 99), // 마커이미지의 크기 (실제 가지고 있는 png파일의 크기를 기재해주어야함)
		imgPosition: { offset: new kakao.maps.Point(116, 99) },
		// 이미지의 위치를 지정합니다. x축은 이미지 크기 절반을 작성하고 y축은 임의조정해야함
		button: branchBtn[2], //마커와 매치시킬 버튼의 인덱스를 저장해둠
	},
];

/* 객체?
성격이 다른 내용을 묶는 자료형태, 배열, 성격이 같은 내용을 묶는 자료형태
*/

markerOptions.forEach((el, index) => {
	let marker = new kakao.maps.Marker({
		map: map, //앞의 map은 Marker함수의 키이름이고, 뒤 map은 10번째 줄의 map임
		position: el.latlng,
		// 지도의 위치, 위도 경도의 값인데 이 값은 우리가 markerOptions에 latlng의 이름으로
		// 저장했으므로 거기의 값을 가져다가 사용하는 것
		title: el.title,
		image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPosition),
	});

	//버튼을 클릭했을때 해당위치로 이동도하고, 해당버튼도 활성화시키는 코드
	el.button.addEventListener('click', () => {
		//버튼활성화부터
		branchBtn.forEach((el) => {
			el.classList.remove('on');
		});
		el.button.classList.add('on');

		map.setCenter(el.latlng);
	});
});

trafficOnBtn.addEventListener('click', () => {
	if (trafficOnBtn.classList.contains('on')) return;
	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	trafficOffBtn.classList.remove('on');
	trafficOnBtn.classList.add('on');
});
trafficOffBtn.addEventListener('click', () => {
	if (trafficOffBtn.classList.contains('on')) return;
	map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	trafficOnBtn.classList.remove('on');
	trafficOffBtn.classList.add('on');
});
