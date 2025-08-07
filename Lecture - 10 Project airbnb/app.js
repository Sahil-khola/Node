const express = require("express");
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")

const app = express();
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
  res.status(404).send("<h1>404 Page Not Found</h1>")
})


const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
