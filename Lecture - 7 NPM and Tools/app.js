import http from "http";

const myserver = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.end(" Sahil Khola ");
});

const port = 3000;
myserver.listen(port, () => {
  console.log(`Server Start at http://localhost:${port}`);
})