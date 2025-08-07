const express = require("express");
const path = require("path");
const rootdir = require("./utils/pathutils");
const userRouter = require("./routers/userRouter");
const contactRouter = require("./routers/contact");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use(contactRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "views", "404.html"));
})

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
