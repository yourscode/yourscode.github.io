var http = require("http");
var server = http.createServer();
server.listen(3000);
server.on("request",(req,res)=>{
    console.log("node.js first");
    console.log("请求方式:"+req.method);
    console.log("请求地址"+req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html; charset= UTF-8");
    res.write("<html>");
    res.write("<body>welcoe to node 服务器</body>")
    res.write("</html>");
    res.end();
})