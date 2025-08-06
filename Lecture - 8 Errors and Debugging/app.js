// console.log("Sahil khola ";   it throw error 
const { log } = require('console');
const http = require('http');

const myServer = http.createServer((req , res)=>{

  console.log("Sahil khola ");
  console.log("Sahil khola 2");
  

})

const port = 3000;
myServer.listen(port,()=>{
  console.log(`Server Start at http://localhost:${port}`);
})