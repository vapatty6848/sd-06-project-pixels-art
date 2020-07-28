window.onload = function() {
  createColorPallet(['black', 'blue', 'blueviolet', 'pink']);
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
    if (color === 'black') {
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
    createDivPixel.style.backgroundColor = "white";
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
  if (sizeBoard === 0) {
    alert('Board inválido!');
  } else if (sizeBoard < 5) {
    sizeBoard = 5;
  }
  for(let i = 1; i <= sizeBoard; i += 1){
    let createDivTr = document.createElement('div');
    createDivTr.className = "tr";
    pixelBoard.appendChild(createDivTr);
    for (let i = 1; i <= sizeBoard; i += 1){
    let createDivPixel = document.createElement('div');
    createDivPixel.style.backgroundColor = "white";
    createDivPixel.className = "pixel";
    createDivTr.appendChild(createDivPixel);
    }
  }  
}


