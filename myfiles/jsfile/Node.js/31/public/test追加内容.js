var fs = require("fs");
var data = new Date();
data = data.toLocaleString();
fs.appendFileSync("./31/public/no1.txt",data);