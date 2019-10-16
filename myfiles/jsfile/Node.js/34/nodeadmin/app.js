//引入模块
//创建服务器
//配置静态目录
//加载相应模块
const http = require("http");
const express = require("express");
const routerProduct = require("./router/product.js");
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.use(express.static("./public"));
app.use("/product",routerProduct);