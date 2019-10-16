const express = require("express");
const http = require("http");
var app  = express();
var server = http.createServer(app);
server.listen(3000);
app.get("/user/:uid/:loc",(req,res)=>{
  console.log(req.params.uid,req.params.loc);
  res.send("<h1>GET IT!</h1>")
})