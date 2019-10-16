var m= require("./arr.js");
var array = [1,2,3,4,5,6]
var re = m.sum(array);
console.log(re);
var rs = m.avg(array);
console.log(rs);
console.log(global.console);
console.time("timer");
for(var i=0; i< 1000000; i++){}
console.timeEnd("timer1");