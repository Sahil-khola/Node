const { log } = require("console");
const fs = require("fs");



// fs.writeFileSync("./text.txt","Hello There My Name is Sahil khola ")

// fs.writeFile("./text", "Rao Shabh", (err, res) => {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log(res);
//     }
// });



// const result = fs.readFileSync("text.txt","utf-8");
// console.log(result);

// fs.readFile("./text.txt", "utf-8", (err, res) => {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log(res);
//     }
// });

// const result = fs.appendFileSync("./text.txt","\nEmail : Sahilkhola@124")
// fs.appendFile("text.txt", "\nCity : Gurugram", (err, res) => {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log(res);
//     }
// })

// console.log(fs.statSync("./text.txt"));
fs.unlinkSync("copy.txt");
// fs.cpSync("./text.txt","copy.txt")
