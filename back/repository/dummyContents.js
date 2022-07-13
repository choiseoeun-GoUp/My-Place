const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

module.exports.mapDiaryContents = [
  {
    id: 6,
    title: "나의 3순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 종로구 대학로12길 13 청민빌딩",
    category: "Photo",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 5,
    title: "나의 2순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 용산구 백범로90길 38",
    category: "Photo",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 4,
    title: "나의 1순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 용산구 한강대로39길 2-13",
    category: "Photo",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 3,
    title: "나의 3순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 용산구 효창원로70길 4",
    category: "Food",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    title: "나의 2순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 용산구 한강대로81길 8 1층",
    category: "Food",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 1,
    title: "나의 1순위 닭발 맛집",
    content:
      "닭발 맛집이다. 너무 맵다면 국물을 덜어내고 콩나물국을 넣고 끓이면 맵기 조절이 가능하다",
    address: "서울 종로구 대학로12길 13 청민빌딩",
    category: "Food",
    createdAt: new Date().toLocaleString(),
  },
];
