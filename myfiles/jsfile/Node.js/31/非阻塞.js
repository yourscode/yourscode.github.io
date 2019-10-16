var fs = require("fs");
console.log(1);
fs.readFile("./31/public/1.css",function(err,data){
    console.log(data.toString());
    console.log(2);
})
console.log(3);