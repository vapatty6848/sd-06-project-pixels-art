const colorPalette = document.querySelector('#color-palette');
const pixelsBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const boardButton = document.getElementById('generate-board');

function changeClass(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', changeClass);

function pixelColoring(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}
pixelsBoard.addEventListener('click', pixelColoring);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '';
  }
}
clearButton.addEventListener('click', clearBoard);

function generatePixels(size) {
  for (let line = 0; line < size; line += 1) {
    const createPixelLine = document.createElement('div');
    createPixelLine.className = 'pixel-line';
    pixelsBoard.appendChild(createPixelLine);
    for (let pixel = 0; pixel < size; pixel += 1) {
      const createNewPixel = document.createElement('div');
      createNewPixel.className = 'pixel';
      createPixelLine.appendChild(createNewPixel);
    }
  }
}

function verifyAndCreateBoard(size) {
  if (size === '' || size < 1) {
    alert('Board inválido!');
    return generatePixels(5);
  }
  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  return generatePixels(size);
}

boardButton.addEventListener('click', function () {
  pixelsBoard.innerHTML = '';
  const boardSizeInput = document.getElementById('board-size');
  verifyAndCreateBoard(boardSizeInput.value);
});

function getRandomColor() {
  const colors = [];
  for (let i = 0; i < 3; i += 1) {
    colors.push(Math.floor(Math.random() * 255));
  }
  return `rgb(${colors[0]}, ${colors[1]}, ${colors[0]})`;
}

function changeColorToRandom() {
  const color = document.getElementsByClassName('color');
  color[1].style.backgroundColor = getRandomColor();
  color[2].style.backgroundColor = getRandomColor();
  color[3].style.backgroundColor = getRandomColor();
}

window.onload = function () {
  generatePixels(5);
  changeColorToRandom();
};
