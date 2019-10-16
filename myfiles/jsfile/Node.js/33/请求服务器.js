const express = require("express");
const http = require("http");
const mysql = require("mysql");
var app = express();
var server = http.createServer(app);
server.listen(3000);

var pool = mysql.createPool({
    port : 3306,
    host : "localhost",
    user : "root",
    password : "",
    database : "xz",
    connectionLimit : 5
})
app.get("/user/:uid",(req,res)=>{
    var uid = req.params.uid
    
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        // var sql = `SELECT uid FROM xz_user WHERE uname=? AND upwd=?`;
        var sql = `SELECT uname,upwd FROM xz_user WHERE uid=?`;
        // var sql="SELECT uid,uname,upwd,email,phone FROM xz_user WHERE uid=?";
        conn.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                // res.json({code:1,data:result});
                res.json(result);
                console.log(result);
            }else{
                res.json({code:-1,msg:"您查找的用户不存在!"});
            }
            conn.release();
        })
    })
    
})

