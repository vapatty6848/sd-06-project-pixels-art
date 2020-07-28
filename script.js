const colorsPaletteNotBlack = document.querySelectorAll('.not-black');
const colorsPalette = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const firstColor = document.querySelector('.color');
let selectedColor = document.querySelector('.selected');

const colors = ['red', 'green', 'blue'];

const generatePaletteColors = () => {
  colorsPaletteNotBlack.forEach((item, index) => {
    item.style.backgroundColor = colors[index];
  });
};

const generateBoard = (number = 5) => {
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

const removeClassSelected = () => {
  colorsPalette.forEach((item) => item.classList.remove('selected'));
};

const setSelectedColorToPixel = () => {
  const pixels = document.querySelectorAll('.pixel');
  selectedColor = document.querySelector('.selected');

  pixels.forEach((item) => {
    item.addEventListener('click', () => {
      item.style.backgroundColor = selectedColor.style.backgroundColor;
    });
  });
};

const getSelectedColor = () => {
  colorsPalette.forEach((item) => {
    item.addEventListener('click', () => {
      removeClassSelected();
      item.classList.add('selected');
      setSelectedColorToPixel();
    });
  });
};

window.onload = () => {
  generatePaletteColors();
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
  generateBoard();
  getSelectedColor();
  setSelectedColorToPixel();
};
