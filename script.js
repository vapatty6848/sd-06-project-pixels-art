const colorsPaletteNotBlack = document.querySelectorAll('.not-black');
const colorsPalette = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
let selectedColor = document.querySelector('.selected');
const clearButton = document.querySelector('#clear-board');
const boardSizeInput = document.querySelector('#board-size');
const generateButton = document.querySelector('#generate-board');

const colors = ['red', 'green', 'blue'];

const generatePaletteColors = () => {
  colorsPaletteNotBlack.forEach((item, index) => {
    item.style.backgroundColor = colors[index];
  });
};

const checkBoardSize = (number) => {
  switch (true) {
    case (number < 5):
      return 5;
    case (number > 50):
      return 50;
    default:
      return number;
  }
};

const generateBoard = (number) => {
  for (let i = 0; i < number; i += 1) {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    pixelBoard.appendChild(lineDiv);
    for (let j = 0; j < number; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lineDiv.appendChild(pixel);
    }
  }
};

const killBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  const lines = document.querySelectorAll('.line');
  pixels.forEach((item) => item.remove(item));
  lines.forEach((item) => item.remove(item));
};

generateButton.addEventListener('click', () => {
  if (boardSizeInput.value && boardSizeInput.value > 0) {
    let number = boardSizeInput.value;
    number = checkBoardSize(number);
    killBoard();
    generateBoard(number);
  } else {
    alert('Board inválido!');
    killBoard();
    generateBoard(5);
  }
});

const removeClassSelected = () => {
  colorsPalette.forEach((item) => item.classList.remove('selected'));
};

pixelBoard.addEventListener('click', (event) => {
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
});

colorsPalette.forEach((item) => {
  item.addEventListener('click', (event) => {
    removeClassSelected();
    item.classList.add('selected');
    selectedColor = event.target;
  });
});

clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
});

window.onload = () => {
  generatePaletteColors();
  generateBoard(5);
};
