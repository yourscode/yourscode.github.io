/* var yh  = document.querySelector("input[name=username]");
yh.onFocus = function(){
    yh.className = "txt_focus";
} */


/* var inp = document.getElementsByName("username")[0];
var inpwd = document.getElementsByName("pwd")[0];
inp.onfocus = function(){
    this.className = "txt_focus";
    var div = this.parentNode.nextElementSibling.children[0];
    div.className = "";
} */
/* inp.onblur = function(){
    var reg = /^\w{1,10}$/;
    this.className = "";
    if(reg.test(this.value)){
        var div = this.parentNode.nextElementSibling.children[0];
        div.className = "vali_success";
    }else{
        var div = this.parentNode.nextElementSibling.children[0];
        div.className = "vali_fail";
    }
} */

/* inpwd.onblur = function(){
    var reg = /^[0-9]{6}$/;
    this.className = "";
    var div = this.parentNode.nextElementSibling.children[0];
    if(reg.test(this.value)){
        div.className = "vali_success";
    }else{
        div.className = "vali_fail";
    }
} */

/* function vail(txt,reg){
    txt.className = "";
    var div = txt.parentNode.nextElementSibling.children[0];
    if(reg.test(txt.value)){
        div.className = "vali_success";
        return true;
    }else{
        div.className = "vali_fail";
        return false;
    }
}
inpwd.onblur = function(){
    vail(this,/^\d{6}$/);
}
inp.onblur = function(){
    vail(this,/^\w{1,10}$/);
}

var form=document.forms["form1"];
form.elements[2].onclick = function(){
    var use = vail(inp,/^\w{1,10}$/);
    var pd = vail(inpwd,/^\d{6}$/);
    if(use&&pd)
    form.submit();
}


inpwd.onfocus = function(){
    this.className = "txt_focus";
    var div = this.parentNode.nextElementSibling.children[0];
    div.className = "";
} */


/* var people  = document.querySelectorAll("input");
console.log(people);
for(var p of people){
    p.onfocus =  function(){
        this.className = "txt_focus";
        var div = this.parentNode.nextElementSibling.children[0];
        div.className = "";
    }
} */


var form=document.forms["form1"];
var inp=form.username;
var inpwd=form.pwd;
// var div=txt.parentNode.nextElementSibling.children[0];
inpwd.onfocus=inp.onfocus=function(){
    this.className="txt_focus";
    var div=this.parentNode.nextElementSibling.children[0];
    div.className="";
}
inp.onblur=function(){
    vail(this,/^\w{1,10}$/);
    
}
function vail(txt,reg){
    var div=txt.parentNode.nextElementSibling.children[0];
    txt.className="";
    if(reg.test(txt.value)){ 
        div.className="vali_success";
        return true;
    }else{
        div.className="vali_fail";
        return false;
    }
}
inpwd.onblur=function(){
    vail(this,/^\d{6}$/);
}
form.elements[2].onclick=function(e){
    e.preventDefault();
    /* var use=vail(inp,/^\w{1,10}$/);
    var pd=vail(inpwd,/^\d{6}$/);
    if(use&&pd)
    form.submit(); */
    if(!vail(inp,/^\w{1,10}$/)){
        inp.focus();
    }else if(!vail(inpwd,/^\d{6}$/)){
        inpwd.focus();
    }else{
        form.submit();
    }
}

/* form.onsubmit = function(){
    var runm = vail(txtName,/^\w{1,10}$/);
} */