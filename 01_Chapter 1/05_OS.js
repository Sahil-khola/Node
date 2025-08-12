const os = require("os");

// example of os module
console.log(os.platform());
console.log(os.arch());
console.log(os.version());

const user = os.userInfo();
console.log(user);