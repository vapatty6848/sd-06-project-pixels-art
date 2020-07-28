const colorsPaletteNotBlack = document.querySelectorAll('.not-black');
const colorsPalette = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const firstColor = document.querySelector('.color');

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

const getSelectedColor = () => {
  colorsPalette.forEach((item) => {
    item.addEventListener('click', () => {
      removeClassSelected();
      if (!item.classList.contains('selected')) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  });
};

window.onload = () => {
  generatePaletteColors();
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
  generateBoard();
  getSelectedColor();
};
