// http 도구 import
const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Korea</h1>");
});

server.listen(port, host, () => {
  console.log(`Server Start http:${host}:${port}/`);
});
