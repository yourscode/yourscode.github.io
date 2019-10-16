

/* function clickone() {}
var tr = document.querySelectorAll('tbody button');
console.log(tr.children);

// var tb = data.lastElementChild;

// console.log(tb);
jian.onclick = function jq() {
  jian.nextElementSibling.innerHTML--;
};
jia.onclick = function js() {
  jia.previousElementSibling.innerHTML++;
};
 */


 var table = document.getElementById("data");
 var btns = table.getElementsByTagName("button");
 for(var btn of btns){
     btn.onclick = function(){
         var td = this.parentNode;
         var span  = td.children[1];
         var n = parseInt(span.innerHTML);
        //  console.log(n); 
        if(this.innerHTML == "+"){
            n++;
            // sp
        }else if(n> 1){
            n--;
        }
        span.innerHTML= n;
//小计
        var price = td.previousElementSibling.innerHTML.slice(1);
        var sub = price * n;    
        td.nextElementSibling.innerHTML = "¥" + sub.toFixed(2);
        
//总计:

        var tbody = table.getElementsByTagName("tbody")[0];
        var trs  =tbody.children;
        var total = 0;
        for(var tr of trs){
            tr.lastElementChild.style.backgroundColor = "pink";
            total += parseFloat(tr.lastElementChild.innerHTML.slice(1));
        }
        var tfoot = table.lastElementChild;
        tfoot.children[0].lastElementChild.innerHTML = "¥" + total.toFixed(2);

        /* var tf = table.getElementsByTagName("tfoot");
        // console.log(tf);
        var totaltds = tf[0].getElementsByTagName("td");
        // var total = totaltds.parentNode.children[1];
        console.log(totaltds[1].innerHTML.slice(1));
        var tbody = table.getElementsByTagName("tbody");
        var trs = tbody.children;
        for(var tr in trs){
            tr.lastElementChild
        } */

     }
 }




/*  var tds = table.getElementsByTagName("tbody");
 var trs = tds.parentNode;
 for(var td of tds){
     console.log(td.innerHTML)
 } */