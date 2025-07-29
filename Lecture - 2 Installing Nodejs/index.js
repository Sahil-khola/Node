console.log("Hello World from Node.js!");
const fs = require('fs');

fs.writeFile('hello.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});
