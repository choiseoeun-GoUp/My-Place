// node_modules의 express 패키지를 가져온다.
const express = require("express");

//app이라는 변수에 express 함수의 변환 값을 저장한다.
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(express.json());

const port = 5050;
const contentsRouter = require("./router/contents");
// 라우팅 앞에 주소 를 쳤을경우 뒤에 오는 값의 있는 애들을 참조해라
app.use("/contents", contentsRouter);

//REST API의 한가지 종류인 GET 리퀘스트를 정의하는 부분입니다.
//app.get이라고 작성했기 때문에 get 요청으로 정의가 되고
//app.post로 작성할 경우 post 요청으로 정의가 됩니다.
//REST API의 종류 (get, post, update, delete 등등)을 사용하여 End Point를 작성하실 수 있습니다.
app.get("/", function (req, res) {
  res.status(200).send("MayDiary");
});

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
