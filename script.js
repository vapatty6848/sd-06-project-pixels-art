const colorsPalette = document.querySelectorAll('.not-black');
const pixelBoard = document.querySelector('#pixel-board');

const colors = ['red', 'green', 'blue'];

const generatePaletteColors = () => {
  colorsPalette.forEach((item, index) => {
    item.style.backgroundColor = colors[index];
  });
};

const generateBoard = () => {
  for (let i = 0; i < 5; i += 1) {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    pixelBoard.appendChild(lineDiv);
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lineDiv.appendChild(pixel);
    }
  }
};

window.onload = () => {
  generatePaletteColors();
  generateBoard();
};
