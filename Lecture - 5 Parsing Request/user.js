import fs from "fs";

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<form action='/submit-data' method='POST'>");
    res.write("<input type='text' name='name' placeholder='Enter Name'><br>");
    res.write("<label for='gender'>Gender : </label>");
    res.write(
      "<select name='gender' id='gender'> <option value='male'>Male</option> <option value='female'>Female</option> </select>"
    );
    res.write("<button type='submit'>Send</button>");
    res.write("</form>");
    return res.end();
  } else if (req.url === "/submit-data" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const bodyObj = {};
      const params = new URLSearchParams(parsedBody);
      for (const [key, value] of params) {
        bodyObj[key] = value;
      }
      // const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fs.writeFileSync("user-data.txt", JSON.stringify(bodyObj, null, 2));
    });

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
};

module.exports = requestHandler;