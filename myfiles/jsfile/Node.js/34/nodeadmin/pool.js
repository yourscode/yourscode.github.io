var mysql = require("mysql");
var pool = mysql.createPool({
    port : 3306,
    host : "localjost",
    user : "root",
    password : "",
    database : "xz",
    connectionLimit : 10
})
/* pool.getConnection((err,conn)=>{
    var sql = ``;
    conn.query(sql,(err,result)=>{

    })
}) */
module.exports = pool;