if(typeof jQuery !=="function"){
    throw new Error("myLib.js是基于jQuery的,请先引入jQuery");

}else{
     jQuery.fn.sum = function(){
         var sum = 0
        this.each(function(i,ele){
            sum += parseInt(ele.innerHTML)
        })
        return sum;
    }
}