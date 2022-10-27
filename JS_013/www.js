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
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.end("반갑습니다");
});

app.get("/user", (req, res) => {
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.end("안녕하세요");
});
