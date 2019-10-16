var fs = require("fs");
var data = fs.readFileSync("./31/public/1.css");
fs.writeFileSync("31/public/2.css",data);