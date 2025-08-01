import http from 'http'

const myServer = http.createServer((req,res)=>{
  console.log(req.url ,req.method,req.headers);
  if (req.url === "/") {
    return res.end("Home Page");
  } else if (req.url === "/about") {
    return res.end("About Page");
  }
  
  res.setHeader('Content-type',"text/html");
  res.write("<Html>");
  res.write("<head> <title> Sahil Khola </title></head>");
  res.write("<body> <h3> Sahil Khola </h3></body>");
  res.write("</Html>");
 res.end();
})

const port = 3000;
myServer.listen(port,()=>{
  console.log(`Server Start at http://localhost:${port}`);
})