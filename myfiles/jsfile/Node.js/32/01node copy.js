const  mysql = require("mysql");
var conn = mysql.createConnection({
    // host:"http://192.168.33.132:83/phpmyadmin/sql.php",
    host:"localhost",
    user : "root",
    password: "",
    port : "3306",
    database : "xg"
})
conn.connect();
var sql = "INSERT INTO xz_datapjsq  VALUES( ThinkpadX390)"
 
// var  sql = 'SELECT * FROM data_pjsq';
conn.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }

   console.log('--------------------------SELECT----------------------------');
   console.log(result);
   console.log('------------------------------------------------------------\n\n');  
});
conn.end();