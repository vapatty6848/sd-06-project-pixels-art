function $(cssSelector){
  return document.querySelector(cssSelector);
}
function $a(tagOrClass) {
  return document.querySelectorAll(tagOrClass);
}

function add(triggerObj,triggerType,action,obj) {
  triggerObj.addEventListener(triggerType,function(event){
      let objetos = obj;
      if(objetos.length === undefined) {
        colorStoraged = action(event, objetos);
      } else {
          for(let i in objetos){
            colorStoraged = action(event, objetos[i]);
  }}})
}
