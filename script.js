onload = function() {

  // Gerando array com cor randomica
    let arrayRandomColor = ['#000'];
    while (arrayRandomColor.length < 4) {
      let newColor = random_color('hex');
      arrayRandomColor.push(newColor);
    }
    createColorPallet(arrayRandomColor);
    createPixelBoard(5);
    selectedColor = 'black';
  };
  
  // Pega a paleta de cores e add os itens a paleta
  function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById('color-palette');
    for (let i in colors) {
      let palletColorDiv = createPalletItem(colors[i]);
      colorPalletContainer.appendChild(palletColorDiv);
    }
  }
  
  // Criação dos itens da paleta (divs)
  function createPalletItem(color) {
    let palletColorDiv = document.createElement('div');
    palletColorDiv.style.backgroundColor = color;
    palletColorDiv.className = 'color';
    palletColorDiv.addEventListener('click', handlePalletColorEvent);
      if (color === '#000') {
        palletColorDiv.classList.add('selected');
      }
    return palletColorDiv;
  }
  
  // Quando clica, add o selected e retira da cor antiga
  function handlePalletColorEvent(event) {
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;
  
    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
    selectedColor = currentSelectedDiv.style.backgroundColor;
  }
  
  // Criando pixel board
  let pixelBoard = document.getElementById('pixel-board');
  function createPixelBoard(size) {
    for(let i = 1; i <= size; i += 1){
      let createDivTr = document.createElement('div');
      createDivTr.className = "tr";
      pixelBoard.appendChild(createDivTr);
      for (let i = 1; i <= size; i += 1){
      let createDivPixel = document.createElement('div');
      createDivPixel.className = "pixel";
      createDivTr.appendChild(createDivPixel);
      }
    }  
  }
  
  // Pintando o quadro
  let pixelBoardDiv = document.querySelector('#pixel-board');
  pixelBoardDiv.addEventListener('click', handlePixelClick);
  
  function handlePixelClick(event) {
    let selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
  }
  
  // Botão reset
  let resetButton = document.getElementById('clear-board');
  resetButton.addEventListener('click', clearPixelBoard);
  function clearPixelBoard() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  }
  
  // Criando pixel board pelo usuario
  let createButton = document.getElementById('generate-board');
  createButton.addEventListener('click', resetPixelBoard);
  function resetPixelBoard() {
    pixelBoard.innerHTML = '';
    let sizeBoard = document.getElementById('board-size').value;
    if (sizeBoard === '') {
      alert('Board inválido!');
      createPixelBoard(5);
    } else if (sizeBoard < 5) {
      sizeBoard = 5;
    } else if (sizeBoard > 50) {
      sizeBoard = 50;
    }
    for(let i = 1; i <= sizeBoard; i += 1){
      let createDivTr = document.createElement('div');
      createDivTr.className = "tr";
      pixelBoard.appendChild(createDivTr);
      for (let i = 1; i <= sizeBoard; i += 1){
      let createDivPixel = document.createElement('div');
      createDivPixel.className = "pixel";
      createDivTr.appendChild(createDivPixel);
      }
    }  
  }
  
  // Gerando cor randomica
  function random_color(format) {
    var rint = Math.round(0xffffff * Math.random());
    switch(format) {
      case 'hex':
        return ('#0' + rint.toString(16)).replace(/^#0([0-9a-f]{6})$/i, '#$1');
        break;
  
      case 'rgb':
        return 'rgb(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255) + ')';
        break;
  
      default:
        return rint;
        break;
      }
  }

// // otimizar os color setings para não pintar os elementos pais
// let pixelBoard = document.querySelector("#pixel-board");
// pixelBoard.addEventListener("click", setPixelColor);

// let colorPalette = document.querySelector("#color-palette");
// colorPalette.addEventListener("click", chooseColor);

// let clearBoard = document.querySelector("#clear-board");
// clearBoard.addEventListener("click", clearPixelBoard);

// let customBoardButton = document.querySelector("#generate-board");
// customBoardButton.addEventListener("click", createCustomPixelBoard);

// createPaletteColors("black", generateRandomColor(), generateRandomColor(), generateRandomColor());
// createPixelBoard();

// colorPalette.firstElementChild.classList.add("selected");
// let currentSelectedColor = document.querySelector(".selected");


// function createPaletteColors (color1, color2, color3, color4){
//     let colorArray = [color1, color2, color3, color4];

//     for (index = 0; index < colorArray.length; index += 1){
//         let newDiv = document.createElement("div");
//         colorPalette.appendChild(newDiv).className = "color";
//         colorPalette.lastChild.style.backgroundColor = colorArray[index];

//     }
// }

// function createPixelBoard(){
//     for (index = 1; index <= 5; index += 1){
//         let newLine = document.createElement("div");
//         pixelBoard.appendChild(newLine).className = "board-line";
//         for (internIndex = 1; internIndex <= 5; internIndex += 1){
//             let newPixel = document.createElement("div");
//             pixelBoard.lastChild.appendChild(newPixel).className = "pixel";
//         }

//     }
// } 

// function chooseColor(event){
//     document.querySelector(".selected").classList.remove("selected");
//     event.target.classList.add("selected");
//     currentSelectedColor = document.querySelector(".selected");
// }

// function setPixelColor(event){
//     event.target.style.backgroundColor = currentSelectedColor.style.backgroundColor;
// }

// function clearPixelBoard(){
//     let pixelArray = document.querySelectorAll(".pixel");
//     for (index = 0; index < pixelArray.length; index += 1){
//         pixelArray[index].style.backgroundColor = "rgb(255,255,255)";
//     }
// }

// function createCustomPixelBoard(){
//     let boardSizeInput = document.querySelector("#board-size").value;
//     if (boardSizeInput > 50){
//         boardSizeInput = 50
//     } else if (boardSizeInput < 5){
//         boardSizeInput = 5;
//     }
//     if (boardSizeInput == ""){
//         alert("Board inválido!")
//     } else{
//         let boardLines = document.querySelectorAll(".board-line");
//         for (index = 0; index < boardLines.length; index += 1){
//             pixelBoard.removeChild(boardLines[index]);
//         }

//         for (index = 1; index <= boardSizeInput; index += 1){
//             let newLine = document.createElement("div");
//             pixelBoard.appendChild(newLine).className = "board-line";
//             for (internIndex = 1; internIndex <= boardSizeInput; internIndex += 1){
//                 let newPixel = document.createElement("div");
//                 pixelBoard.lastChild.appendChild(newPixel).className = "pixel"
//             }
//         }
//     }
// }

// function generateRandomColor(){
//     return "#" + Math.floor(Math.random()*16777215).toString(16);
// }