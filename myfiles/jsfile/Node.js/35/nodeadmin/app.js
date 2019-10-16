// 引入模块
const http=require("http");
const express=require("express");
const routerProduct=require("./router/product");
const path = require("path");
// 创建服务器
var app=express();
var server=http.createServer(app);
server.listen(3000);
// 配置静态目录
// app.use(express.static("./35/nodeadmin/public"));
app.use(express.static(path.join(__dirname)+"\\public"));
console.log(path.join(__dirname)+"\\public");

// 加载相应模块
app.use("/product",routerProduct);
// http://localhost:3000/product/public/jquery-1.12.4.js