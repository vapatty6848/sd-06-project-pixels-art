const colorsPalette = document.querySelectorAll('.not-black');
const pixelBoard = document.querySelector('#pixel-board');

const colors = ['red', 'green', 'blue'];

const generatePaletteColors = () => {
  colorsPalette[0].style.backgroundColor = colors[0];
  colorsPalette[1].style.backgroundColor = colors[1];
  colorsPalette[2].style.backgroundColor = colors[2];
};

window.onload = generatePaletteColors;
