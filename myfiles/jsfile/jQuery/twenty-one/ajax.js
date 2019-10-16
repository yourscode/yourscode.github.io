function ajax({type,url,data,dataType}){   //success()  type  url  data  dataType
    return new Promise(success=>{
        var xhr=null;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject("Micosoft.XMLHttp");
        }
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            //处理res逻辑
            if(dataType!==undefined&&dataType=="json"){
                res=JSON.parse(res);
            }
            success(res);

            }
        }
            if(type.toLowerCase()=="get"&&data!==undefined){
                url=url+"?"+data;
            }
        xhr.open(type,url,true);
        if(type.toLowerCase()=="post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
        if(type.toLowerCase()=="post"){
            xhr.send(data);
        }else{
            xhr.send(null);
        }
    })
}

//ajax({type:"get",url:"1.php"}).then(res=>{

// })