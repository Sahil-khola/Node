const app = require("express")();

app.get("/",(req,res)=>{
  res.send("<h1>Sahil khola</h1>")
})

const port = 3000;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
  
})