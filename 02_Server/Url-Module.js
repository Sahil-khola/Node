const http = require("http");
const fs = require("fs");
const url = require("url")

const myServer = http.createServer((req , res)=>{

    if (req.url ==="/favicon.ico") {
       return res.end();
    }

    const log = `${Date.now()} : ${req.url} : ${req.method} New Request \n`;
    const myUrl = url.parse(req.url , true);
    
    fs.appendFile("text.txt",log , (err,data)=>{
        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page")
                break;
        
            case "/about":
                const userName = myUrl.query.name
                res.end( `hy ${userName}`)
                break;
        
            default:
                res.end("404 not found")
                break;
        }
        console.log("New Request");
        
    })
})



myServer.listen(3000,()=>{
    console.log("Server Start");
    
})