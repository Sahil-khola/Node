import http from "http";

const myserver = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let content = "";

  if (req.url === "/home" ) {
    content = `<h1>Home Page</h1>`;
    return res.write("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    content = `<h1>About Page</h1>`;
    return res.write("<h1>About Page</h1>");
  } else if (req.url === "/contact") {
    content = `<h1>Contact Page</h1>`;
    return res.write("<h1>Contact Page</h1>");
  } else if (req.url === "/login") {
    content = `<h1>Login Page</h1>`;
    return res.write("<h1>Login Page</h1>");
  } else {
    content = `<h1>404 Page</h1>`;
  }

  res.end(`
  <html>
    <head>
      <title> Sahil Khola </title>
    </head>
    <body>
      ${content}
      <ul>
        <li> <a href="/home"> Home </a> </li>
        <li> <a href="/about"> About </a> </li>
        <li> <a href="/contact"> Contact </a> </li>
        <li> <a href="/login"> Login </a> </li>
      </ul>
    </body>
  </html>
  `);
});

myserver.listen(3000, () => {
  console.log("Server Start at http://localhost:3000");
});
