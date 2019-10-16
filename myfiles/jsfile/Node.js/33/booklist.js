const http = require("http");
const express = require("express");
var mysql = require("mysql");
const qs = require("querystring");
var pool = mysql.createPool({
    port : 3306,
    user : "root",
    password : "",
    database : "dangdang",
    host : "localhost",
    connectionLimit : 50
})
var app = express();
var server = http.createServer(app);
server.listen(3000);
// app.get()

app.get("/booklist.html",(req,res)=>{
    res.sendFile(__dirname+"/booklist.html");

})
app.get("/jquery-1.12.4.js",(req,res)=>{
    res.sendFile(__dirname+"/jquery-1.12.4.js");
})

app.get("/book",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = `SELECT bid,title,price,pubDate FROM book`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
    })
})
app.get("/delete/book/:uid",(req,res)=>{
    var uid = req.params.uid;
    console.log(uid);
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = `DELETE FROM book WHERE bid=?`;
        conn.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result.affectedRows>0){
                res.send("删除成功!");
            }else{res.json({code : -1,msg : "删除失败!"});}
            

        })
    })
})

/* app.delete("/delete/book/:uid",(req,res)=>{
   req.on("data",(buf)=>{
    var obj = qs.parse(buf.toString());
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = `DELETE FROM book WHERE bid=?`;
        conn.query(sql,[obj.uid],(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result.affectedRows>0){
                res.send("删除成功!");
            }else{
                res.json({code : -1,msg : "删除失败!"});
            }
        })
    })
   })
    
}) */