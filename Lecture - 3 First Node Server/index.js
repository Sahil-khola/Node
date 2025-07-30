import http from 'http'

const myserver = http.createServer((req,res)=>{
  console.log(req);
  res.end(" Sahil Khola ")
})

const port = 3000;
myserver.listen(port,()=>{
  console.log(`Server Start at http://localhost:${port}`);
})