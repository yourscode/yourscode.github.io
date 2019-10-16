var http  = require("http");
var url = require("url");
var fs = require("fs");
var mysql = require("mysql");
var conn = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user: 'root',
    password : "",
    database : "xz",
})
conn.connect();
var server = http.createServer();
server.listen(3000);
server.on("request",(req,res)=>{
    var objUrl = url.parse(req.url,true);
    var path = objUrl.pathname;
    res.setHeader("Content-Type","text/html;charset=UTF-8")
    if(path==="/register.html"){
        fs.readFile("./32/register.html",(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }else if(path==="/register.do"){
        var uname = objUrl.query.uname;
        var upwd = objUrl.query.upwd;
        var sql = `INSERT INTO xz_user(upwd,uname) VALUES(?,?)`
        conn.query(sql,[upwd,uname],function(err,result){
            if(err) throw err;
            if(result.affectedRows>0){
                res.write("注册成功!");
                res.end();
            }else{
                res.write("注册失败!");
                res.end();
            }
            console.log(result);
        })
        conn.end();
        /* fs.appendFile("./32/reg/user.log",data,function(err){
            if(err)  throw err;
            res.write("注册成功");
            res.end();
        }) */
    }else{
        res.write("<h1>404 not fond!</h1>");
        res.end();
    }
})