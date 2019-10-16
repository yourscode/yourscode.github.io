var http = require("http");
const express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.use("/admin",(req,res,next)=>{
    if(req.query.type == "admin"){
        next();
    }else{
        res.redirect("/login");       //重定向到login
    }
})
app.get("/admin",(req,res)=>{
    res.json("hello admin");
})
app.get("/login",(req,res)=>{
    res.send("<h1>欢迎登入!</h1>");
})