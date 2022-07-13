import Modal from "../components/Modal";

const { kakao } = window;

export default function KakaoMapScript({ searchPlace, contents }) {
  console.log(contents);

  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.541395992818174, 126.96933860559673),
    level: 5,
  };
  // 지도 생성
  const map = new kakao.maps.Map(container, options);

  //장소 검색 객체 생성
  const ps = new kakao.maps.services.Places();

  // 키워드 검색(input과 연결)
  ps.keywordSearch(searchPlace, placesSearchCB);

  // 키워드 검색 완료시 호출되는 콜백함수
  function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가합니다
      let bounds = new kakao.maps.LatLngBounds();

      for (let i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      // 검색된 키워드 기준으로 지도 범위 재생성
      map.setBounds(bounds);
    }
  }

  // 마커 표시 함수
  // function displayMarker(place) {
  //   // 마커생성하고 지도에 표시
  //   let marker = new kakao.maps.Marker({
  //     map: map,
  //     position: new kakao.maps.LatLng(place.y, place.x),
  //   });
  //   // 나중에 온 클릭으로 연결지어서 내가 쓴 일기장 미리보기 느낌으로 인포 뜨도록 해보자
  // }
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  function displayMarker(place) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          "</div>"
      );
      infowindow.open(map, marker);
    });
  }

  // 주소-좌표 변환 객체를 생성합니다
  const geocoder = new kakao.maps.services.Geocoder();
  contents.map((el) => {
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(el.address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        // map.setCenter(coords);
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        return marker;
      }
    });
  });
}
