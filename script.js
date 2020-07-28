const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'red', 'blue', 'green'];

function generateColorPalette() {
  for (let i = 0; i < colors.length; i += 1) {
    const divCollor = document.createElement('div');
    divCollor.classList.add('color');
    divCollor.classList.add(colors[i]);
    colorPalette.appendChild(divCollor);
  }
}

function generatePixels() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

window.onload = function () {
  generatePixels();
  generateColorPalette();
};
