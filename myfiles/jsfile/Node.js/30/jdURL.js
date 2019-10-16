// https://www.jd.com:8080/ad/index?uname=zhang
var getResult = function(url){
    var res ={};
    var i1 = url.indexOf(":");
    res.protocol = url.slice(0,i1);
    var i2 = url.lastIndexOf(":");
    res.hostname = url.slice(i1+3,i2);
    var i3 = url.indexOf("/",i2);
    res.port = url.slice(i2+1,i3);
    var i4 = url.indexOf("?");
    res.path = url.slice(i3,i4);
    var list = url.slice(i4+1).split("&");
    var obj = {};
    for(var key of list){
        var str = key.split("=");
        obj[str[0]] = str[1];

    }
    res.query = obj;
    return res;
}
module.exports={
    getResult
}