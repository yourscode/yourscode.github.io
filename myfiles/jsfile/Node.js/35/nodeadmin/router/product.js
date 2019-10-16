// 引入模块
const express=require("express");
// 创建路由对象
var router=express.Router();
const pool=require("../pool");
// 添加各种应用/list 分页显示产品列表
router.get("/list",(req,res)=>{
    // 获取参数 pno  pageSize
    var page=req.query.page  || 1;  //当前页
    var pageSize=req.query.pageSize||8;  //页大小
    // console.log(pno);
    // console.log(pageSize);
    // res.send("ok");
    // 正则表达式
    var reg=/^\d{1,}$/;
    if(!reg.test(page)){
        res.json({code:-1,msg:"页面参数有误"})
    }else{
        if(!reg.test(pageSize)){
            res.json({code:-1,msg:"页面参数有误"})
        }
    }
    var output = {};
    output.page = page;
    output.pageSize = pageSize;
    var progress = 0;
    // 从链接池中获取链接
    // 创建sql语句获取数据内容   总记录数
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT count(lid) AS c FROM xz_laptop";
        conn.query(sql,(err,result)=>{
            // console.log(result); 
            var total = result[0].c;
            output.pageCount = Math.ceil(total/pageSize);
            progress +=50;
            if(progress==100){
                res.json(output);
            }
        })
    })
    // 创建sql数据内容          当前页的内容
    pool.getConnection((err,conn)=>{
        if(err)  throw err;
        var sql = `SELECT lid,title,price,spec,lname,os FROM xz_laptop LIMIT ?,?`;
        pageSize = parseInt(pageSize);
        var offset = (page-1)*pageSize;
        conn.query(sql,[offset,pageSize],(err,result)=>{
            // console.log(result);
            output.data = result;
            progress +=50;
            if(progress==100){
                res.json(output);
            }
            conn.release();
        })
    })
    // res.json(output);
    
})



router.get("/del/:lid",(req,res)=>{
    //获取参数
    var lid = req.params.lid
    //正则表达式
    var reg = /^\d+$/;
    if(!reg.test(lid)){
        res.json({code: -1,msg : "界面参数有误!"});
    }
    //从连接池获取链接
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = `DELETE FROM xz_laptop WHERE lid=?`;
        conn.query(sql,[lid],(err,result)=>{
            if(err)   throw  err
            console.log(result);
            if(result.affectedRows>0){
                res.send("删除成功!");
            }else{
                res.json({code : -1,msg : "删除失败!"});
            }
            conn.release();
        })
    })
    //创建sql语句并发送

})

router.get("/update/:lid/:price",(req,res)=>{
    var lid = parseInt(req.params.lid);
    var price = req.params.price;
    var title = req.params.title;
    var spec = req.params.spec;
    pool.getConnection((err,conn)=>{
        if(err) throw err
        var sql = `UPDATE xz_laptop SET price=? WHERE lid=?`;
        conn.query(sql,[price,lid],(err,result)=>{
            if(err) throw err
            console.log(result);
            if(result.affectedRows>0){
                res.send("更新成功!");
            }else{
                res.json({code : -1,msg : "更新失败!"});
            }
        })
    })
})

router.get("/search/:lid",(req,res)=>{
    var lid = parseInt(req.params.lid);
    pool.getConnection((err,conn)=>{
        if(err) throw err
        var sql = `SELECT lid,title,os,price,lname,disk FROM xz_laptop WHERE lid=?`;
        conn.query(sql,[lid],(err,result)=>{
            if(err) throw err
            // console.log(result);
            res.json(result);
            // res.send("搜索成功!");
        })
    })
})
// res.json("产品列表")
// 将路由对象导出
module.exports=router;