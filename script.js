window.onload = function () {
  const colorList = ['black', 'red', 'green', 'blue'];
  const pixels = document.querySelectorAll('.pixel');

  createColorPalette(colorList);
};

function createColorSelector(color) {
  let selectorDivElement = document.createElement('div');
  selectorDivElement.className = 'color';
  selectorDivElement.style.backgroundColor = color;
  selectorDivElement.style.display = "table-cell";
  return selectorDivElement;
};

function createColorPalette(colors) {
  const paletteContainer = document.getElementById('color-palette');
  
  for (let i in colors) {
    let colorSelector = createColorSelector(colors[i]);
    paletteContainer.appendChild(colorSelector);
  }
};
