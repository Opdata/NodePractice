const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1> Hello Node </h1>");
    res.end("<p> Hello Server! </p>");
  })
  .listen(8080, () => {
    console.log("8080포트에서 서버 대기 중");
  });

/*
//Equal Source
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1> Hello Node </h1>");
  res.end("<p> Hello Server! </p>");
});
server.listen(8080);
server.on('listening', () => {
    console.log('8080포트에서 서버 대기 중');
});
server.on('error', (error) => {
    console.error(error);
});
*/
