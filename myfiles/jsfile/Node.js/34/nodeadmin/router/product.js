//引入模块
//创建路由对象
//添加各种应用 /list 分页显示产品列表 
//导出模块

// const http = require("http");
const express = require("express");
const qs = require("querystring");
const pool = require("../pool");
var router = express.Router();
router.get("/list",(req,res)=>{
    // res.json("产品列表");
    //获取参数 pno pageSize
    var page = req.query.page || 1;   //当前页
    var pageSize = req.query.pageSize || 8;   //页大小
    //正则表达式
    console.log(page);
    console.log(pageSize);
    
    var reg = /^\d{1,}$/;
    if(!reg.test(page)){
        res.json({code: -1,msg : "界面参数有误!"});
    }else{
        if(!reg.test(pageSize)){
            res.json({code: -1,msg : "界面参数有误!"});
        }
    }
    
    //从连接池中获取链接
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql  = `SELECT count(lid) FROM xz_laptop`;
        conn.query(sql,(err,result)=>{
            console.log(result);
        })
    })
    //创建sql语句获取数据结构    总记录数
})
module.exports = router;