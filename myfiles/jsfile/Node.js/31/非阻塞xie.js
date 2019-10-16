var fs = require("fs");
var date = new Date();
date = date.toLocaleString();
console.log(1);
fs.writeFile("./31/public/no.txt",date,function(err){
    if(err){
        throw err;
    }
    console.log(2)
})
console.log(3);