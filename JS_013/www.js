/**
 * express 도구를 install 하고
 * http 서버를 생성하고
 * GET/ 로 요청하면 "반갑습니다"
 * GET/user 로 요청하면 "안녕하세요"
 * 라고 보이도록 코드를 작성
 */

import http from "http";
import express from "express";

const host = "127.0.0.1";
const port = 3000;

const app = express();
const server = http.createServer(app);

server.listen(port, host, () => {
  console.log("Start Server");
});

app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  /**
   * 텍스트를 여러번 보내고 싶을 때는 write 로 보내고
   * 제일 마지막에 end 로 마감한다
   */
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.write("안녕하세요<hr/>");
  res.write("오늘은 목요일<hr/>");
  res.end("금요일이면 좋곘네<hr/>");

  res.send("반갑습니다");
});

app.get("/user", (req, res) => {
  // 한번만 보낼 수 있다
  res.send("안녕하세요");
});
