
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

    colorDivCreated.addEventListener("click", handleColorDivCreated);
    if (color === 'black'){
    colorDivCreated.classList.add('selected');
    }
    
    return colorDivCreated;
  };

function handleColorDivCreated(event){
    let oldSeletecedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target

    oldSeletecedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected");
    selectedColor = currentSelectedDiv.style.backgroundColor;
    }

    function handlePixelClick(event) {
        let selectedPixelDiv = event.target;
        selectedPixelDiv.style.backgroundColor = selectedColor;
      }
    
      let pixelBoardDiv = document.querySelector("#pixel-board");
      pixelBoardDiv.addEventListener("click", handlePixelClick);

      let btn = document.querySelector('#clear-board');
      let pixel = document.getElementsByClassName('pixel');
      btn.addEventListener("click", function () {
        for (let i = 0; i < pixel.length; i += 1) {
          pixel[i].style.backgroundColor = "white";
        }
      })
  }


