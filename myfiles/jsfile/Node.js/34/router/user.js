const express = require("express");
var router = express.Router();
router.get("/list",(req,res)=>{
    res.json("用户列表");
})
router.get("/del",(req,res)=>{
    res.json("删除用户");
})
module.exports = router;