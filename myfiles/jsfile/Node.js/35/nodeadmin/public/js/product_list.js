//功能: 发送ajax请求返回数据,渲染界面
//创建一个函数loadProduct(page,pageSize)
//AJAX请求 路径product/list
//请求回来console.log(result)

function loadProduct(page,pageSize){
    $.ajax({
        url : "product/list",
        type : "get",
        data : {
            page : page,
            pageSize : pageSize
        },
        success : function(result){
            var res = result.data;
            console.log(res);
            
            var html = "";
            for(var key of res){
                html += `<tr>
            <td><input type="checkbox" class="psel"></td>
            <td>${key.lid}</td>
            <td>${key.title}</td>
            <td>${key.os}</td>
            <td>${key.price}</td>
            <td>${key.spec}</td>
            <td>${key.lname}</td>
            <td>
            <a href="${key.lid}" class = "btn_del">del</a>
            <a href="${key.title}_${key.lid}" class = "btn_update">updete</a>
            <a href="${key.lid}" class = "btn_list">list</a>
            </td>
        </tr>`
            }
            $("#tbody1").html(html);
            var ml = "";
            var page = parseInt(result.page);
            var pageSize = parseInt(result.pageSize);
            var pageCount = parseInt(result.pageCount);
            // 上一页
            if(page-2>0){
                ml += `<li><a href="${page-2}">${page-2}</a></li>`
            }
            // 上上一页
            if(page-1>0){
                ml += `<li><a href="${page-1}">${page-1}</a></li>`
            }
            //当前页
            ml += `<li><a href="${page}">${page}</a></li>`
            //下一页
            if(page+1<=pageCount){
                ml += `<li><a href="${page+1}">${page+1}</a></li>`
            }
             //下两页
             if(page+1<=pageCount){
                ml += `<li><a href="${page+2}">${page+2}</a></li>`
            }
            $("#pagination").html(ml);

            /* $("#tbody").on("click","td>a",function js_del(lid){

                $.ajax({
                    url : "del/lid",
                    type : "get",
                    success : function(result){
                        console.log(result);
                    }
                })
            }) */
            
        }
    });
}

loadProduct(1,8);
$("#pagination").on("click","li>a",function(event){
    event.preventDefault();
    var page = $(this).attr("href");
    loadProduct(page,8);
})
//点击全选按钮,所有的商品复选框都选中,全选取消,所有商品的复选框都取消
//点击所有商品的复选框时,判断是否全部选中,

$(".selAll").click(function(){
    var sel = $(this).prop("checked");
    $(".psel").prop("checked",sel);
})

$("#tbody1").on("click",".psel",function(){
    console.log($(".psel"));
    
    
    if($(this).prop("checked") == false){
        $(".selAll").prop("checked",false);
    }else{
        $(".selAll").prop("checked",true);
    }
    for(let key of $(".psel")){
        console.log(key);
        var val = $(key).prop("checked");
        /* if(val == true){
            $(".selAll").prop("checked",true);
        }else  */if(val == false){
            $(".selAll").prop("checked",false);
        }
        
    }
})


//teacher code





//功能四: 删除一行
$("#tbody1").on("click",".btn_del",function(e){
    e.preventDefault();
    var lid = parseInt($(this).attr("href"));
    console.log(lid);
    
    if(confirm(`确定删除?`)){
        $.ajax({
            url : "product/del/"+lid,
            type : "get",
            success : (result)=>{
                console.log(result);
            }
        })
    }
})


//更新操作update-jumbotron
$("#tbody1").on("click",".btn_update",function(e){
    e.preventDefault();
    $(".update-jumbotron").css({
        display : "block"
    })
    var arr = $(this).attr("href").split("_");
    console.log(arr);
    
    var name = arr[0];
    console.log(name);
    
    $(".pname").html(name);

    $("#ok").click(()=>{
        var price = $(".input-price").val();

        var lid = parseInt(arr[1]);
        console.log(lid);
        
        console.log(price);
        $.ajax({
            url : "product/update/"+`${lid}/${price}`,
            type : "get",
            success : function(result){
                console.log(result);
                
            }
        })
        window.location.reload();
        $(".update-jumbotron").css({
            display : "none"
        })
    })
    //data-action="update-cancel
    $("#cancel").click(function(){
        $(".update-jumbotron").css({
            display : "none"
        })
    })
})


//细节 detail-jumbotron
$("#tbody1").on("click",".btn_list",function(e){
    e.preventDefault();
    $(".detail-jumbotron").css({
        display : "block"
    })
    var lid = parseInt($(this).attr("href"));
    $.ajax({
        url : "product/search/"+lid,
        type  : "get",
        success : function(result){
            var res = result[0];
            $(".plid").html(res.lid);
            $(".ppname").html(res.lname);
            $(".pcategory").html(res.title);
            $(".pprice").html(res.price);
            $(".pos").html(res.os);
            $(".pdisk").html(res.disk);

        }
    })

    $("#detail_close").click(function(){
        $(".detail-jumbotron").css({
            display : "none"
        })
    })
})