let classColors = $a('.color');
let classPixels = $a('.pixel');

function generateRandomColor() {
  let parameters = []
  for(let i = 0 ; i < 3 ; i+=1) {
    parameters.push(generator256Bits())
  }
   let numero =parameters.join(',');
   return `rgb(${numero})`
}

function generator256Bits() {
  let valores = []
  let primeiroValor  = Math.ceil(Math.random()*2);
  for(let i = 0; i < 3; i+=1) {
    if(i === 0) {
      valores.push(primeiroValor);
    }
    if(i >= 1) {
      let DemaisValores = Math.ceil(Math.random()*5)
      valores.push(DemaisValores);
    }
  }
  return (valores.join(''));
}

function initPixelColor(classPixels) {
  for(let i = 0;i < classPixels.length;i+=1) {
    if(classPixels[i].style.backgroundColor !== undefined) {
      classPixels[i].style.backgroundColor = 'white';
    }
  }
}

function initPalleteColor(classColors) {
  classColors[0].style.backgroundColor = 'black';
  colorStoraged = 'black';
  for(let i = 1 ; i < classColors.length; i+=1) {
      classColors[i].style.backgroundColor = generateRandomColor();
  }
}

window.onload = function() {
  initPalleteColor(classColors);
  initPixelColor(classPixels);
}
