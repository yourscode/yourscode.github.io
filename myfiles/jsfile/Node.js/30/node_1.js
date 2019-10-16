//My code
/* for(var i=1; i<=9 ; i++){
    var html ="";
    for(var j=1 ; j<= i ; j++){
        var space = " ";
        // console.log(i+"*"+j+"="+i*j);
        html += space+ (i+"*"+j+"="+i*j);
    }
    console.log(html);
    // console.log("\n");
} */

//teacher  code
for(var i=1; i<=9 ; i++){
    var str ="";
    for(var j=1 ; j<= i ; j++){
        var space = " ";
        // console.log(i+"*"+j+"="+i*j);
        str += `${j}*${i}=${i*j}\t`;
    }
    console.log(str);
}