var selectAll = document.querySelector("thead>tr>th:nth-child(1)>input");
// console.log(selectAll1);
var inputs = document.querySelectorAll("tbody>tr>td:nth-child(1)>input");

// console.log(typeof selectAll.checked);
/* selectAll.onclick = function(){
    // this.setAttribute("checked","checked");
    // console.log("hello");
    if(selectAll.checked == false){
    for(var i = 0; i < inputs.length ; i++){
        inputs[i].checked = false;
    }
} else{
    for(var i = 0; i < inputs.length ; i++){
        inputs[i].checked = true;
    }

}
} */

selectAll.onclick = function(){
    for(var input of inputs){
        input.checked = this.checked
    }
}

// 

for(var input of inputs){
    this.onclick = function(){
var a = document.querySelectorAll("tbody>tr>td:nth-child(1)>input:not(:checked)");
// console.log(a);
    if(a.length == 0){
        selectAll.checked = true;
    }else{
        selectAll.checked = false;
    }
}
}
/* for(var input of inputs){
    input.onclick = function(){
    if(this.checked !== selectAll.checked){
        selectAll.checked = false;
    }
    else if(input.checked == false){
        selectAll.checked = false;
    }else{
        selectAll.checked = true;
    }
}
}  */


