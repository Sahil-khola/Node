const express = require("express");
const {handler} = require("./handler");
const server = express();

const reqestHandler = (handler)=>{
  server.get("/",handler);
}

const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`Server Start at http://localhost:${PORT}`);
})