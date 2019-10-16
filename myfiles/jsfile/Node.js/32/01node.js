const  mysql = require("mysql");
var conn = mysql.createConnection({
    // host:"http://192.168.33.132:83/phpmyadmin/sql.php",
    host:"localhost",
    user : "root",
    password: "",
    port : "3306",
    database : "xz"
})
conn.connect();
// var sql = "INSERT INTO xz_laptop_family(fid,fname) VALUES('1000' ,'ThinkpadT590')"; 成功
// var sql = "DELETE FROM xz_laptop_family WHERE fid=888";   成功
//  var sql = "UPDATE xz_laptop_family SET fid=666 WHERE fid=999"   成功
// var  sql = 'SELECT * FROM xz_laptop_family';    成功
var sql = "SELECT fid,fname FROM xz_user ";
conn.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
    }
    if(result.affectedRows>0){
      console.log("操作成功!");
    }else{
      console.log("操作失败!");
    }
   console.log('--------------------------SELECT----------------------------');
   console.log(result);
   console.log('------------------------------------------------------------\n\n');  
});