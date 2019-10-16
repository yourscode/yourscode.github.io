var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
var server = http.createServer();
server.listen(3000);
var data = fs.readFileSync("./31/register.html");
// var register = fs.readFile("./31/register.html");
// console.log(data);
server.on("request", (req, res) => {
  var objurl = url.parse(req.url, true);
  var path = objurl.pathname;
  res.setHeader("Content-Type","text/html;charset = UTF-8");
//   res.setHeader("Content-Type","text/html; charset= UTF-8");
  if (req.url == "/register.html") {
    // res.write(register);
    // console.log(req.url);
    res.statusCode = 200;
    res.write(data);
    res.end();
  } else if (path === "/register.do") {
    res.write("<h1>注册成功</h1>");
    var addurl = req.url;

    var add = "https://www.jd.com:8080/ad/index?uname=zhang&age=20";
    var obj = url.parse(addurl, true);
    var uname = obj.query.uname;
    var upwd = obj.query.upwd;
    console.log(obj.query.uname,obj.query.upwd);
    fs.writeFileSync("./31/balabal.log",uname);
    res.end();
  } else {
    res.write("<h1>404 NOT FIND</h1>");
    res.end();
  }
});
