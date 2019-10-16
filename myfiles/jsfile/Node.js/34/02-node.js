var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(3000);
/* app.get("/list",(req,res)=>{
    res.sendFile(__dirname+"/booklist.html");
});
app.get("/jquery-1.12.4.js",(req,res)=>{
    res.sendFile(__dirname+"/jquery-1.12.4.js");
}) */

app.use(express.static("./34/public"));    //访问需要使用booklist.html