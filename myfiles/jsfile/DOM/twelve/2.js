//用递归遍历所有父节点下的所有后代节点
//定义函数,仅遍历直接子节点
function getChild(parent){
    console.log(parent.nodeName);
    var childs = parent.chlidren;
    for(var i = 0, len = childs.length; i < len ; i++){
        arguments.callee(childs[i]);
    }
}
getChild(document.body);



//对每个直接子节点调用和父元素完全相同的方法








/* function cha(n) {
  var value1 = document.querySelector(n);
  var value = value1.children;
  // console.log(body.children);
  for (let i = 0; i < value.length; i++) {
      //   console.log(typeof value2);
      console.log(value[i]);
      var value2 = value[i].nodeName.toLowerCase();
     cha(value2);
      
  }
}
cha('ul'); */
