// Starting Pixel Art
let currentSelectedColor = 'black';

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

function clearBoard() {
  const clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', function () {
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
  const colorRGB = 'rgb(' + colorR + ', ' + colorG + ', ' + colorB + ')';
  return colorRGB;
}

function createColorPalette(colors) {
  let colorPaletteContainer = document.getElementById('color-palette');

  for (let index in colors) {
    let paletteItemDiv = createPaletteItem(colors[index]);
    colorPaletteContainer.appendChild(paletteItemDiv);
  }
}

function createPaletteItem(color) {
  let paletteItemDiv = document.createElement('div');
  paletteItemDiv.style.backgroundColor = color;
  paletteItemDiv.className = 'color';
  paletteItemDiv.addEventListener('click', handlePaletteItemEvent);

  if (color === 'black') {
    paletteItemDiv.classList.add('selected');
  }
  return paletteItemDiv;
}

function handlePaletteItemEvent(event) {
  let oldSelectedDiv = document.querySelector('.selected');
  let currentSelectedDiv = event.target;

  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');

  currentSelectedColor = window
    .getComputedStyle(currentSelectedDiv, null)
    .getPropertyValue('background-color');
}

function handlePixelEvent(event) {
  let divColorized = event.target;
  divColorized.style.backgroundColor = currentSelectedColor;
}

function createPixelsDiv(divClassName) {
  const pixelDiv = document.createElement('div');
  pixelDiv.className = divClassName;
  pixelDiv.addEventListener('click', handlePixelEvent);
  return pixelDiv;
}

function createBoard() {
  const btnVQV = document.querySelector('#generate-board');
  btnVQV.addEventListener('click', createPixelsBoard);
}

function createPixelsBoard() {
  const createBoard = document.querySelector('#pixel-board');
  let inputCreateBoard = document.getElementById('board-size').value;
  if (inputCreateBoard < 5 || inputCreateBoard > 50) {
    inputCreateBoard = 5;
    alert('Board inválido!');
  }
  const gridPixel = inputCreateBoard * inputCreateBoard;
  createBoard.querySelectorAll('*').forEach((n) => n.remove());
  for (let index = 0; index < gridPixel; index += 1) {
    createBoard.appendChild(createPixelsDiv('pixel'));
  }
}
