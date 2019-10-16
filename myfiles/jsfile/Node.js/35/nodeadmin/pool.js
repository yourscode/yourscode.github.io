const mysql=require("mysql");
var pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"xz",
    connectionLimit:100
})
module.exports=pool;