const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});

app.use("/", (req, res, next) => {
  console.log("second dummy Middleware", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Handel for / get ", req.url, req.method);
  res.send("<h1>Sahil khola </h1>");
});

app.get("/contact", (req, res, next) => {
  console.log("Handel for /Contact-us  ", req.url, req.method);
  res.send(`
    <h1>Plz Give some details here</h1>
    <form action="/contact" method="POST">
    <input type="text" name="name" placeholder="enter user name"><br>
    <input type="email" name="email" placeholder="enter user email"><br>
    <input type="submit">
    </form>
    `);
});

app.post("/contact", (req, res, next) => {
  console.log("Handling Request on POST ", req.url, req.method);
  res.send("<h3>We Will Contact Shortly</h3>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
