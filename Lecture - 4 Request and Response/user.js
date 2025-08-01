import http from "http";
import fs from "fs";

const myServer = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<form action='/submit-data' method='POST'>");
    res.write("<input type='text' name='name' placeholder='Enter Name'><br>");
    res.write("<label for='gender'>Gender : </label>");
    res.write("<select name='gender' id='gender'> <option value='male'>Male</option> <option value='female'>Female</option> </select>"
    );
    res.write("<button type='submit'>Send</button>");
    res.write("</form>");
    return res.end();
  } else if (req.url === "/submit-data" && req.method === "POST") {
    fs.writeFileSync("user-data.txt", "User Data : " + req.url);
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<Html>");
  res.write("<head> <title> Sahil Khola </title></head>");
  res.write("<body> <h3> Sahil Khola </h3></body>");
  res.write("</Html>");
  res.end();
});

const port = 3000;
myServer.listen(port, () => {
  console.log(`Server Start at http://localhost:${port}`);
});