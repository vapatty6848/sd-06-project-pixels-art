let colorSelected = 'black';
const boardSizeInput = document.querySelector('#board-size');
const pixelBoardContainer = document.querySelector('#pixel-board');
const vqvButton = document.querySelector('#generate-board');

function colorSelection(event) {
  const chosenColor = event.target;
  const oldChosenColor = document.querySelector('.selected');
  oldChosenColor.classList.remove('selected', 'pushed');
  chosenColor.classList.add('selected', 'pushed');
  colorSelected = chosenColor.style.backgroundColor;
}

function createColorSelector(color) {
  const selectorDivElement = document.createElement('div');
  selectorDivElement.className = 'color';
  selectorDivElement.style.backgroundColor = color;
  selectorDivElement.style.display = 'table-cell';
  selectorDivElement.addEventListener('click', colorSelection);
  return selectorDivElement;
}

function createColorPalette(colors) {
  const paletteContainer = document.getElementById('color-palette');
  for (let i = 0; i < colors.length; i += 1) {
    const colorSelector = createColorSelector(colors[i]);
    if (colors[i] === 'black') {
      colorSelector.classList.add('selected');
    }
    paletteContainer.appendChild(colorSelector);
  }
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}

function createRow(num) {
  const pixelRow = document.createElement('div');
  for (let i = 0; i < num; i += 1) {
    pixelRow.appendChild(createPixel());
  }
  return pixelRow;
}

function createPixelBoard(n) {
  for (let i = 0; i < n; i += 1) {
    pixelBoardContainer.appendChild(createRow(n));
  }
}

function pixelColoring() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = colorSelected;
    }
  });
}

function erasePixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function clearBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', erasePixels);
}

function handleVQVClick() {
  vqvButton.addEventListener('click', function () {
    pixelBoardContainer.innerHTML = null;
    if (boardSizeInput.value <= 5) {
      createPixelBoard(5);
    } else if (boardSizeInput.value >= 50) {
      createPixelBoard(50);
    } else {
      createPixelBoard(boardSizeInput.value);
    }
  });
}

window.onload = function () {
  const colorList = ['black', 'red', 'green', 'blue'];

  createColorPalette(colorList);

  createPixelBoard(5);

  pixelColoring();

  clearBoard();

  handleVQVClick();
};
