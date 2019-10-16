var fs = require("fs");
fs.readFile("./31/public/4.css",function(err,data){
    fs.writeFile("./31/public/4xie.css",data,function(){
        if(err){
            throw err;
        }
        console.log("get it!");
    })
})