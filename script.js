// Starting Pixel Art
let currentSelectedColor = 'black';

function clearBoard() {
  const elementClearBoard = document.querySelector('#clear-board');
  elementClearBoard.addEventListener('click', function () {
    const clearPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < clearPixel.length; index += 1) {
      clearPixel[index].style.backgroundColor = 'white';
    }
  });
}

function generateRandomColorNumber() {
  return Math.ceil(Math.random() * 255);
}

function generateRandomColor() {
  const colorR = generateRandomColorNumber();
  const colorG = generateRandomColorNumber();
  const colorB = generateRandomColorNumber();
  const colorRGB = `rgb(${colorR}, ${colorG}, ${colorB})`;
  return colorRGB;
}

function handlePaletteItemEvent(event) {
  const oldSelectedDiv = document.querySelector('.selected');
  const currentSelectedDiv = event.target;

  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');

  currentSelectedColor = window
    .getComputedStyle(currentSelectedDiv, null)
    .getPropertyValue('background-color');
}

function createPaletteItem(color) {
  const paletteItemDiv = document.createElement('div');
  paletteItemDiv.style.backgroundColor = color;
  paletteItemDiv.className = 'color';
  paletteItemDiv.addEventListener('click', handlePaletteItemEvent);

  if (color === 'black') {
    paletteItemDiv.classList.add('selected');
  }
  return paletteItemDiv;
}

function createColorPalette(colors) {
  const colorPaletteContainer = document.getElementById('color-palette');

  for (let index = 0; index < colors.length; index += 1) {
    const paletteItemDiv = createPaletteItem(colors[index]);
    colorPaletteContainer.appendChild(paletteItemDiv);
  }
}

function handlePixelEvent(event) {
  const divColorized = event.target;
  divColorized.style.backgroundColor = currentSelectedColor;
}

function createPixelsDiv(divClassName) {
  const pixelDiv = document.createElement('div');
  pixelDiv.className = divClassName;
  pixelDiv.addEventListener('click', handlePixelEvent);
  return pixelDiv;
}

function createPixelsBoard() {
  const elementCreateBoard = document.querySelector('#pixel-board');
  const sizeCreateBoard = document.querySelector('.board');
  let inputCreateBoard = parseInt(document.getElementById('board-size').value, 10);
  const inputCreateBoardI = document.getElementById('board-size').value;
  if (inputCreateBoardI === '') {
    alert('Board inválido!');
    inputCreateBoard = 5;
  } else if (inputCreateBoard < 5) {
    inputCreateBoard = 5;
  } else if (inputCreateBoard > 50) {
    inputCreateBoard = 50;
  }
  const px = 'px';
  const gridPixel = inputCreateBoard * inputCreateBoard;
  let sizeBoard = inputCreateBoard * 40;
  sizeBoard += inputCreateBoard + 1;
  sizeCreateBoard.style.width = sizeBoard + px;
  elementCreateBoard.querySelectorAll('*').forEach((n) => n.remove());
  for (let index = 0; index < gridPixel; index += 1) {
    elementCreateBoard.appendChild(createPixelsDiv('pixel'));
  }
}

function createBoard() {
  const btnVQV = document.querySelector('#generate-board');
  btnVQV.addEventListener('click', createPixelsBoard);
}

window.onload = function () {
  createColorPalette([
    'black',
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ]);
  createPixelsBoard();
  clearBoard();
  createBoard();
};
