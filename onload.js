function $(cssSelector){
  return document.querySelector(cssSelector);
}
function $a(tagOrClass) {
  return document.querySelectorAll(tagOrClass);
}

function generateRandomColor(){
  let parameters = []
  for(let i = 0 ; i < 3 ; i+=1){
    parameters.push(generator256Bits())
  }
   let numero =parameters.join(',');
   return `rgb(${numero})`
}

function generator256Bits(){
  let valores = []
  let primeiroValor  = Math.ceil(Math.random()*2);
  for(let i = 0; i < 3; i+=1){
    if(i === 0){
      valores.push(primeiroValor);
    }
    if(i >= 1) {
      let DemaisValores = Math.ceil(Math.random()*5)
      valores.push(DemaisValores);
    }
  }
  return (valores.join(''));
}


let classColors = $a('.color');
window.onload = function() {

  classColors[0].style.backgroundColor = 'black';
  for(let i in classColors){
    if(classColors[i]!== undefined && i > 0){
      classColors[i].style.backgroundColor = generateRandomColor();
    }
  }
}
