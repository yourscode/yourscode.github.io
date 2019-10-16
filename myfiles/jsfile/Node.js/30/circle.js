var PI= Math.PI;
var getSize = function(value){
    return PI*value*value;
}
var getPer = function(value){
    return PI*2*value;
}
module.exports.size=getSize;
module.exports.per=getPer;
module.exports.send=function(){
    console.log("hello hu");
}