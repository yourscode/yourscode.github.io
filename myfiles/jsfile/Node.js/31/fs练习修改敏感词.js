var fs = require("fs");
var data = fs.readFileSync("./31/public/no.txt");
// console.log(data.toString());
var value = data.toString();
var reg = /no/g;
var value = value.replace(reg,"敏感词");
fs.writeFileSync("./31/public/no1.txt",value);
