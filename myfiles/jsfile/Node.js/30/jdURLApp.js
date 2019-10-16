var url = "https://www.jd.com:8080/ad/index?uname=zhang&password=1234";
var m= require("./jdURL.js");
var result = m.getResult(url);
console.log(result);