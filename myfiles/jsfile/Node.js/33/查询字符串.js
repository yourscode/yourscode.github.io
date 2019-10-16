const express = require("express");
const http = require("http");
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.get("/user", (req,res) => {
  console.log(req.query.uid);
  console.log(req.query.loc);
  res.send("OK");
});
