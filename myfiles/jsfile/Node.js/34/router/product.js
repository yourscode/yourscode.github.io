const express = require("express");
var router = express.Router();
router.get("/list",(req,res)=>{
    res.json("产品列表");
})
router.get("/del",(req,res)=>{
    res.json("删除产品");
})
router.get("/user",(req,res)=>{
    res.json("user");
})
module.exports = router;