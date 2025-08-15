const express = require("express");
const app = express();
const router = require("./routes/product");
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.send(`<a href='/products'>Products</a>
            <a href='/users'>Users</a>`);
});

// CRUD API ------->

app.use(router);
app.use(userRouter);

// server start
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
