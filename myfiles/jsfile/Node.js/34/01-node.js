var http  = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.use((req,res,next)=>{
    console.log(0);
    next();
})
/* app.use("/list",(req,res,next)=>{
    console.log(0);
    next();
}) */
app.get("/user",(req,res)=>{
    console.log(2);
    
    res.json("用户列表");
})
app.get("/list",(req,res)=>{
    console.log(3);
    
    res.json("用户列表list");
})