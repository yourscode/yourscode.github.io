var fs = require("fs");
var value = `body{
    background-color: #fff;
    display: table-cell;
    padding: 5vh;
    border: 1px solid red;
}`
fs.appendFile("./31/public/4.css",value,function(){
    console.log("到了");
})