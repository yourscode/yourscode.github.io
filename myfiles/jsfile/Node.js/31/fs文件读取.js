var fs = require("fs");
var data = fs.readFileSync("./31/test.html");
fs.writeFileSync("./31/helloworld.js",data);