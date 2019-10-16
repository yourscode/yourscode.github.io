var mysql = require("mysql");
var pool = mysql.createPool({
    port : 3306,
    host : "localhost",
    user : "root",
    password : "",
    database : 'xz',
    connectionLimit:5
})
pool.getConnection((err,conn)=>{
    var sql = `SELECT uid FROM xz_user WHERE uname=? AND upwd=? `;
    conn.query(sql,["123456","高渐离"],(err,result)=>{
        console.log(result);
        conn.release();
    })
})