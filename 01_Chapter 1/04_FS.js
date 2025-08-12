const fs = require("fs");

// const txt = fs.readFileSync("demo.txt","utf-8");
// console.log(txt);
// fs.readFile("demo.txt","utf-8",(err , data)=>{
// console.log(data);
// });




const data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque molestiae, explicabo doloremque repellendus est error esse iure voluptas nostrum? Tempora sunt similique, qui accuveniam officiis suscipit hic cumque aut. Odit non ducimus odio ab nostrum libero vel neque similique amet. Ad dolorem iusto ratione sapiente ab inventore est."
fs.writeFile("test.txt", data, "utf-8", (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File written successfully!");
  }
});