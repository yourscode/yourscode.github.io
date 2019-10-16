const express = require("express");
const http = require("http");
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.get("/index.html",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
    res.send(req.query.uid);
})