// Starting Pixel Art
let colorSelected = 'black';
function addColorSelected(color) {
  colorSelected = color;
  const point = '.';
  const selected = 'selected';
  const elementToRemove = document.querySelector('.selected');
  elementToRemove.classList.remove('selected');
  const elementToAdd = document.querySelector(point + color);
  elementToAdd.classList.add(selected);
}

function createDivPixel() {
  const div = document.createElement('div');
  div.className = 'pixel';
  return div;
}

const btnColorBlack = document.querySelector('.black');
btnColorBlack.addEventListener('click', function () {
  addColorSelected('black');
});

const btnColorRed = document.querySelector('.red');
btnColorRed.addEventListener('click', function () {
  addColorSelected('red');
});

const btnColorGreen = document.querySelector('.green');
btnColorGreen.addEventListener('click', function () {
  addColorSelected('green');
});

const btnColorBlue = document.querySelector('.blue');
btnColorBlue.addEventListener('click', function () {
  addColorSelected('blue');
});

const boardClickedPixel = document.querySelector('#pixel-board');
boardClickedPixel.addEventListener('click', function (event) {
  const clickedPixel = event.target;
  clickedPixel.style.backgroundColor = colorSelected;
});

const clearBoard = document.querySelector('#clear-board');
clearBoard.addEventListener('click', function () {
  const clearPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixel.length; index += 1) {
    clearPixel[index].style.backgroundColor = 'white';
  }
});

const btnMakePixel = document.querySelector('#generate-board');
btnMakePixel.addEventListener('click', function () {
  const inputMakePixel = document.getElementById('board-size');
  const gridPixel = inputMakePixel.value * inputMakePixel.value;
  const pixels = document.getElementById('pixel-board');
  pixels.querySelectorAll('*').forEach((n) => n.remove());
  for (let index = 0; index < gridPixel; index += 1) {
    pixels.appendChild(createDivPixel());
  }
  const board = document.getElementsByClassName('board')[0];
  const boardSize = (36 * inputMakePixel.value).toString + 'px';
  board.style.width = boardSize;
});
