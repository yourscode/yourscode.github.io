const express = require("express");
const http = require("http");
const routerProduct = require("./router/product.js");
const routerUser = require("./router/user.js");
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.use("/product",routerProduct);
app.use("/user",routerUser);