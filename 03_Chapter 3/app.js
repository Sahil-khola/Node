const express = require("express");
const app = express();
app.use(express.json());
const data = require("./data.json");

// Middleware------------------------------------------------>
// 1 APPLICATION-LEVEL MIDDLEWARE--->
app.use((req, res, next) => {
  console.log(req.hostname, req.url, req.ip);
  next();
});

// 2 Route-level middleware--->
const auth = (req, res, next) => {
  if (req.body && req.body.password === "123" || req.query.password === "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});

// 3 Built-in middleware
app.use(express.json());
app.use(express.static("public"));

// 4 third-party middleware
const morgan = require("morgan");
app.use(morgan("default"));

app.get("/product/:id", (req, res) => {
    console.log(req.params);
    res.send(req.params);
})

// API
app.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
app.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
app.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
app.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

app.get("/demo", (req, res) => {
  // res.send("Rao shabh");
  // res.json(data);
  // res.sendFile(__dirname + "/app.html");
  // res.sendStatus(200)
  // res.status(202).send("<h3> File has some problem </h3>")
});

//Server start
app.listen(3000, () => {
  console.log(`Server start at http://localhost:${3000}`);
});


// There are three method to send data in request
// 1. Query parameters
// 2. Route parameters
// 3. Request body