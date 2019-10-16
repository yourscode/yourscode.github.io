var http=require("http");
var express=require("express");
var mysql=require("mysql");
var qs=require("querystring");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dangdang",
    port:3306,
    connectionLimit:10
})
var app=express();
var server=http.createServer(app);
server.listen(3000);
app.get("/teacher.html",(req,res)=>{
    res.sendFile(__dirname+"/teacher.html");
})
app.get("/jquery-1.12.4.js",(req,res)=>{
    res.sendFile(__dirname+"/jquery-1.12.4.js")
})
app.get("/book",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err)  throw err;
        var sql="SELECT bid,title,price,pubDate FROM book";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result)
        })
    })
})
app.delete("/book/:bid",(req,res)=>{
    req.on("data",(buf)=>{
        var obj=qs.parse(buf.toString());
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            var sql="DELETE FROM book WHERE bid=?";
            conn.query(sql,[obj.bid],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.json({code:1,msg:"删除成功"})
                }else{
                    res.json({code:-1,msg:"删除失败"})
                }
            })
        })
    })
})