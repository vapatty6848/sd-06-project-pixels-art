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

function populandoBoard(nLine, nColums) {
  for (let index = 0; index < nColums; index += 1) {
    populandoUmLinha(nLine);
  }
}

// Limpando board
function clearBoard() {
  const pixelBoard = document.getElementsByClassName('pixel');
  const cor = 'white';
  for (let index in pixelBoard) {
    pixelBoard[index].style.background = cor;
  }
}

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', clearBoard);

populatePaletteItem(['black', 'blue', 'yellow', 'green']);
populandoBoard(5, 5);
