window.onload = function () {
  const colorList = ['black', 'red', 'green', 'blue'];
  // const pixels = document.querySelectorAll('.pixel');

  createColorPalette(colorList);

  createPixelBoard(5);
};

function createColorSelector(color) {
  const selectorDivElement = document.createElement('div');
  selectorDivElement.className = 'color';
  selectorDivElement.style.backgroundColor = color;
  selectorDivElement.style.display = 'table-cell';
  return selectorDivElement;
}

function createColorPalette(colors) {
  const paletteContainer = document.getElementById('color-palette');
  for (let i = 0; i < colors.length; i += 1) {
    const colorSelector = createColorSelector(colors[i]);
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
  const pixelBoardContainer = document.querySelector('#pixel-board');
  for (let i = 0; i < n; i += 1) {
    pixelBoardContainer.appendChild(createRow(n));
  }
}
