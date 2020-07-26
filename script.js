function $(cssSelector){
  return document.querySelector(cssSelector);
}
function $a(tagOrClass) {
  return document.querySelectorAll(tagOrClass);
}

function add(triggerObj,triggerType,action,obj){
  triggerObj.addEventListener(triggerType,function(event){
      let objetos = obj;
      if(objetos.length === undefined){
        colorStoraged = action(event, objetos);
      } else {
          for(let i in objetos){
            colorStoraged = action(event, objetos[i]);
  }}})
}

function getColor(event,  elementToCopy) {
  let storage;
  let elemento = event.target;
   elemento.className += ``
   storage = elemento.style.backgroundColor;

  return  storage
}

function setColor(event,storage,  elementToChange){
   event.currentTarget.style.backgroundColor = colorStoraged;
  return colorStoraged
}

let colorStoraged  = 'black';
let classColor = $('.color');
let classPixels = $a('.pixel');


for(let i in classColors) {
  if(classColors[i].className !== undefined)
  add(classColors[i],'click',getColor,classColors[i]);

}

for(let i in classPixels) {
  if(classPixels[i].className !== undefined)
  add(classPixels[i],'click',setColor,classPixels[i]);
}


// for(let i in classPixel)

// add($('.pixel'),'click',setColor,colorStoraged,$('.pixel'));


