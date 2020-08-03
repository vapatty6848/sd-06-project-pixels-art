let selectedColor = 'black';
const pixelBoard = document.querySelector('#pixel-board');

// handles the event to get selected pixel and change div's class

function handlePalettePixelColor(event) {
  const lastSelectedDiv = document.querySelector('.selected');
  const currentPixelDiv = event.target;
  lastSelectedDiv.classList.remove('selected');
  currentPixelDiv.classList.add('selected');
  selectedColor = currentPixelDiv.style.backgroundColor;
}

// creates the colored div in the color palette

function createPaletteColorDiv(color) {
  const addPixelDiv = document.createElement('div');
  addPixelDiv.style.backgroundColor = color;
  addPixelDiv.className = 'color';
  addPixelDiv.addEventListener('click', handlePalettePixelColor);
  if (color === 'black') {
    addPixelDiv.classList.add('selected');
  }
  return addPixelDiv;
}

// generate random color

function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

// creates color palette

function createColorPalette(colorArray) {
  const colorPaletteContainer = document.getElementById('color-palette');

  for (let index = 0; index < colorArray.length; index += 1) {
    const pixelDiv = createPaletteColorDiv(colorArray[index]);
    colorPaletteContainer.appendChild(pixelDiv);
  }
}

window.onload = createColorPalette([
  'black',
  generateRandomColor(),
  generateRandomColor(),
  generateRandomColor(),
]);

// handle event to change div's background color and make the pixel art

pixelBoard.addEventListener('click', function (event) {
  const divPixel = event.target;
  divPixel.style.backgroundColor = selectedColor;
});

// add event to clean the board

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    // prettier-ignore
    document.querySelectorAll('.pixel')[i]
      .style
      .removeProperty('background-color');
  }
});

// get board size user input to generate the board pixels

const btnGenerateBoard = document.getElementById('generate-board');
btnGenerateBoard.addEventListener('click', function () {
  let userInput = document.getElementById('board-size').value;
  if (!userInput) {
    alert('Board inválido!');
  }

  if (userInput < 5) {
    userInput = 5;
  } else if (userInput > 50) {
    userInput = 50;
  }
  // return function(userInput);
});
