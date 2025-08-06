const express = require('express');
const app = express();

app.use((req,res,next)=>{
  console.log("Middleware One ",req.url,req.method);
  // res.send("Sahil Khola  ")
  next();
})
app.use((req,res,next)=>{
  console.log("Middleware Second  ",req.url,req.method);
  res.send("Sahil khola <p>From second Middleware </p>")
})
app.use((req,res,next)=>{
  console.log("Middleware Third ",req.url,req.method);
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

