
let selectedColor = 'black';

window.onload=function(){

    let colorPalette = document.querySelector('#color-palette');
    let colors = ['black', 'red', 'yellow', 'blue'];

  function createColorPallet(colors) {
    for (index in colors) {
      let colorDivCreated = createColor(colors[index]); // funcao createColor sera declarada abaixo
      colorPalette.appendChild(colorDivCreated);
    }
  };

  createColorPallet(colors);

  function createColor(color) { //chamando a funcao declarada acima
    let colorDivCreated = document.createElement('div');//Criando uma div para cada color
    colorDivCreated.className = 'color';//cirando class para todas as divs de color
    colorDivCreated.style.backgroundColor = color;//utilizando a mesma cor para o background
    colorDivCreated.style.border = "black 3px solid";
    
    return colorDivCreated;
  };

  }


