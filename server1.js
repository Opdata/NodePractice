const http = require("http");
const fs = require("fs");
http
  .createServer((res, req) => {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  })
  .listen(8081, () => {
    console.log("8081번 포트에서 서버 대기중");
  });
