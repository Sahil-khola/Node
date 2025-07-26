const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.end(" Home Page ")
})
app.get("/about",(req,res)=>{
    res.end(`About page`)
})

app.listen(8000,()=>{
    console.log("server Start"); 
})


