var http=require("http");
var url=require("url");
var fs=require("fs");
var server=http.createServer();
server.listen(3000);
server.on("request",(req,res)=>{
   var objUrl=url.parse(req.url,true);
   var path=objUrl.pathname;
   res.setHeader("Content-Type","text/html;charset=UTF-8")
    if(path==="/register.html"){
        fs.readFile("./31/register.html",(err,data)=>{
            if(err) throw err;
            res.write(data)
            res.end();})
    }else if(path==="/register.do"){
        var uname=objUrl.query.uname;
        var upwd=objUrl.query.upwd;
        var data=uname+":"+upwd;
        fs.appendFile("./31/public/user.log",data,function(err){
            if(err) throw err;
            res.write("注册成功")
            res.end();}) 
    }else{
        res.write("<h1>404 NOT FONUD</h1>")
        res.end();
    }
})