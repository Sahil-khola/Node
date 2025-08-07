const express = require("express");
const path = require("path");
const rootdir = require("./utils/path.utils");
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")

const app = express();
app.use(express.static(path.join(rootdir, "public")));
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootdir,"views","404.html"));
})


const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
