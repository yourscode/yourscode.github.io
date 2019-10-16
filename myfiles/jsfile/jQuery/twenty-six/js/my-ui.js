if(typeof jQuery !=="function"){
    throw new Error("我的ui基于jquery,请先引用");
}else{
    jQuery.fn.dropdown = function(){
        //this->  #my-dropdown
        //侵入
        this.addClass("dropdown")  //div
        this.children().first().attr("data-trigger","dropdown").next().addClass("dropdown-menu fade");
        //绑定事件
        this.hover(function(){
            $(this).children(".dropdown-menu")
            .toggleClass("in")
        })
    }
}