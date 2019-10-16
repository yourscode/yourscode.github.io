if(typeof jQuery!=="function"){
    throw new Error("false,基于jquery,请先引入jquery");
}else{
    // jQuery.fn.dropdown= 
    (function(){
        $("[data-trigger=dropdown]").parent().hover(function(){
            $(this).children(".dropdown-menu").toggleClass("in");
        })
    })();    //在父元素上面绑定事件可以在移下面的时候任然显示
}





/* (function(){
    this.hover(function(){
        $(this).children(".dropdown-menu")
        .toggleClass("in")
    })
}) (); */