const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기중");
  });
