// Lidando com a Paleta de Cores
function handleClick(event) {
  const oldClassSelected = document.querySelector('.selected');
  const currentSelected = event.target;
  oldClassSelected.classList.remove('selected');
  currentSelected.classList.add('selected');
}

function createPaletteItem(color) {
  const paletteItemColor = document.createElement('div');
  paletteItemColor.className = 'color';
  paletteItemColor.style.background = color;
  paletteItemColor.addEventListener('click', handleClick);
  if (color === 'black') {
    paletteItemColor.classList.add('selected');
  }
  return paletteItemColor;
}

function populatePaletteItem(colors) {
  const paletteItemDiv = document.getElementById('color-palette');

  for (let index in colors) {
    const paletteItem = createPaletteItem(colors[index]);
    paletteItemDiv.appendChild(paletteItem);
  }
}

function clickEvent(event) {
  const classSelected = document.querySelector('.selected');
  const colorSelected = event.target;
  colorSelected.style.background = classSelected.style.background;
}

// Lidando com o board
function createPixelItem() {
  const pixelDiv = document.createElement('div');
  pixelDiv.className = 'pixel';
  pixelDiv.addEventListener('click', clickEvent);
  return pixelDiv;
}

function populandoUmLinha(number) {
  const pixelLine = document.querySelector('#pixel-board');
  const br = document.createElement('br');
  for (let index = 0; index < number; index += 1) {
    const pixelItem = createPixelItem();
    pixelLine.appendChild(pixelItem);
  }
  pixelLine.appendChild(br);
}

function populandoBoard(nLine, nColumn) {
  for (let index = 0; index < nColumn; index += 1) {
    populandoUmLinha(nLine);
  }
}

// Limpando board
function clearBoard() { 
  let pixelBoard = document.querySelectorAll('.pixel');   
  for (let index = 0; index < pixelBoard.length; index += 1) {    
    pixelBoard[index].style.background = 'white';
  }
}

// Mexendo com o tamanho do board
const tamanho = document.querySelector('#board-size');

function deleteBoard() {
  const node = document.querySelector('#pixel-board');
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function gerarBoard() {
  const numTamanho = parseInt(tamanho.value);
  if (tamanho.value === '') {
    alert('Board inválido!');
  } else {
    deleteBoard();
    if ((numTamanho >= 5) && (numTamanho <= 50)) {
      const nLine = parseInt(tamanho.value);
      const nColumn = parseInt(tamanho.value);
      populandoBoard(nLine, nColumn);
    } else if (numTamanho < 5) {
      const nLine = 5;
      const nColumn = 5;
      populandoBoard(nLine, nColumn);
    } else if (numTamanho > 50) {
      const nLine = 50;
      const nColumn = 50;
      populandoBoard(nLine, nColumn);
    }
  }
}

// Gerando cor aleatória
function aleatoria(inf, sup) {
  const possibilitiesNumber = sup - inf;
  let aleat = Math.random() * possibilitiesNumber;
  aleat = Math.floor(aleat);
  return parseInt(inf) + aleat;
}

function corAleatoria() {
  const hexaArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let aleatCor = '#';
  for (let index = 0; index < 6; index += 1) {
    const posArray = aleatoria(0, hexaArray.length);
    aleatCor += hexaArray[posArray];
  }
  return aleatCor;
}

const btnBoard = document.querySelector('#generate-board');
btnBoard.addEventListener('click', gerarBoard);

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', clearBoard);

populatePaletteItem(['black', corAleatoria(), corAleatoria(), corAleatoria()]);
populandoBoard(5, 5);
