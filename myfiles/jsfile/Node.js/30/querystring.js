/* var qs = require("querystring");
var str = "uname=hudada&password=123456&uage=22";
var obj = qs.parse(str);
console.log(obj); */
var obj1 = "{ uname: 'hudada', password: '123456', uage: '22' }";
console.log();

var url = require("url");
var add = "https://www.jd.com:8080/ad/index?uname=zhang&age=20";
var obj = url.parse(add,true);
console.log(obj);
console.log(obj.query.uname);