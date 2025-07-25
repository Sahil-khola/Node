const { log } = require("console");
const fs = require("fs");

// Blocking code : Synchronous
// Non-blocking code : Asynchronous

// difference :
// Blocking code : Synchronous ----> 
// console.log("one");
// console.log("two");
// const result = fs.readFileSync("./text.txt", "utf-8");
// console.log(result);
// console.log("three");

// synchronous - line by line execute same as blocking code (isme ek ek line execute huie hai )


// non-blocking code : Asynchronous ----->
console.log("one");
console.log("two");
fs.readFile("text.txt","utf-8",(err,res)=>{
console.log(res);
})
console.log("three");

// non-blocking code - it can not be executed line by line same as non-blocking code(isme ek ek line execute nahi huie hai  )