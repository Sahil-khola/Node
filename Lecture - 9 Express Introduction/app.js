const express = require('express');
const app = express();

app.get("/",(req,res,next)=>{
  console.log("Come from first middleware",req.url,req.method);
  next();
})

app.use("/about",(req,res,next)=>{
  console.log("Come from Second  middleware",req.url,req.method);
})

app.use("/",(req,res,next)=>{
  console.log("Come from another middleware",req.url,req.method);
  next();
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

