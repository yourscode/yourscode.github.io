var as = document.querySelectorAll("li>a");
console.log(as);
for(var a of as){
    a.onclick = function(){
    var divs = document.querySelectorAll("#container>div");
    for(var div of divs){
        div.style.zIndex = "";
    }
    var id = this.href.slice(-8);
     document.getElementById(id).style.zIndex = 10;
}
}



/* for(var a of as){
    a.style.zIndex = "";
    a.onclick = function(){
    // console.log(typeof a.href.slice(-8));
    var c  = this.href.slice(-8);
    var it = document.getElementById(c);
//    content2.style.zIndex = 10;
//    console.log(it);
    it.style.zIndex = 10;

    }
} */
