const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.method} ${req.url}`;
    fs.appendFile("log.txt", log + "\n", (err, req) => {
        res.end(" Hello There My Name is Sahil khola....")
    })
    console.log("new Request Recives");

})

myServer.listen(3000, () => {
    console.log("Server is running on port 3000")
});