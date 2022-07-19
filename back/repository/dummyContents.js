const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

module.exports.mapDiaryContents = [
  {
    id: 8,
    title: "[망리단길-소품샵] 와이키키 아일랜드",
    content: "아기자기 스티커 천국",
    address: "서울특별시 마포구 망원로8길 77 1층 노란집",
    category: "Stationery",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 7,
    title: "[경리단길-야경] 더 로얄 푸드 앤 드링크",
    content:
      "야경을 보면서 맛난 칵테일을 먹을 수 있다. 여기서는 미모사 추천 안주는 노맛",
    address: "서울특별시 용산구 신흥로20길 37",
    category: "HotPlace",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 6,
    title: "[성수-사진] 디올성수",
    content: "사진 잘나오는 팝업스토어 예약안하고 현장 방문 가능",
    address: "서울 성동구 연무장5길 7",
    category: "Photo",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 5,
    title: "[서촌-사진] 그라운드 시소",
    content: "자연과 멋진 건물이 어우러져서 사진 맛집 프사바꾸기 가능, 전시회",
    address: "서울특별시 종로구 자하문로6길 18-8",
    category: "Photo",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 4,
    title: "[홍대-즐길거리] 레이저엑스",
    content: "현실 서든어택 여러명이서 가서 총게임을 실제로 해보자",
    address: "서울특별시 마포구 와우산로 111 태화프라자 5층 레이저엑스",
    category: "HotPlace",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 3,
    title: "[맛집] 나의 3순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 용산구 효창원로70길 4",
    category: "Food",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    title: "[맛집] 나의 2순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 용산구 한강대로81길 8 1층",
    category: "Food",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 1,
    title: "[맛집] 나의 1순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 종로구 대학로12길 13 청민빌딩",
    category: "Food",
    createdAt: new Date().toLocaleString(),
  },
];
