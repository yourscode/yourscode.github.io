var mysql = require("mysql");
var conn = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user: 'root',
    password : "",
    database : "xz",
})
/* var uname = "dingding";
var upwd = 123456; */
var uname = "'or'='or'";
var upwd = "";
var sql = `SELECT uid FROM xz_user WHERE uname='${uname}' AND upwd='${upwd}'`
conn.query(sql,(err,[uname,upwd],result)=>{
    if(err) console.log('[SELECT ERROR] - ',err.message);
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n'); 
    conn.end();
})               