var oSpans = document.querySelectorAll("span");
for(var oSpan of oSpans){
    oSpan.onclick = function(){
        if(this.hasAttribute("class")){
            this.removeAttribute("class");
        }else{
            for(var oSpan of oSpans){
                if(oSpan.hasAttribute("class")){
                    oSpan.removeAttribute("class");
                }
            }
            this.setAttribute("class","open");
        }
    }
}

/* var spans = document.getElementsByTagName("span");
for(var span of spans){
    span.onclick = function(){
        if(this.className == "open"){
            this.className = "";
        }else{
            var openSpan = document.querySelector(".tree>li>span");
            if(openSpan !==null){
                openSpan.className = "";
            }
            this.className = "open";
        }
    }
} */