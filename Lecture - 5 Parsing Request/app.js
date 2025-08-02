const http = require("http");
const requestHandler = require("./user.js");

const myServer = http.createServer(requestHandler);

const port = 3000;
myServer.listen(port, () => {
  console.log(`Server Start at http://localhost:${port}`);
});
