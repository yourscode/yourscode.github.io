var sum = function(arr){
    var s = 0;
    for(var i= 0 ; i<arr.length ; i++){
        s += arr[i];
    }
    return s;
}
var avg = function(average){
    var all = 0;
    for(var j= 0; j< average.length ; j++){
        all +=average[j];
    }
    return (all/average.length);
}
module.exports={
    sum,
    avg
}