const fs = require("fs");

// const txt = fs.readFileSync("demo.txt","utf-8");
// console.log(txt);
fs.readFile("demo.txt","utf-8",(err , data)=>{
console.log(data);
});
