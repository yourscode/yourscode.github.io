const http = require("http");
const express = require("express");
var qs = require("querystring")
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.get("/ajax.html",(req,res)=>{
    res.sendFile(__dirname+"/ajax.html");
})
app.get("/jquery-1.12.4.js",(req,res)=>{
    res.sendFile(__dirname+"/jquery-1.12.4.js");
})
app.post("/user",(req,res)=>{
    req.on("data",(buf)=>{
        var obj = qs.parse(buf.toString());
        console.log(obj);
        res.json({code:1,msg:"接收成功!"});
    })
})
