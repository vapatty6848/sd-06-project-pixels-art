// creates color palette

function createColorPalette (colorArray) {
  const colorPaletteContainer = document.getElementById('color-palette');
  
  for (index in colorArray) {
    let pixelDiv = createPaletteColorDiv(colorArray[index]);
    colorPaletteContainer.appendChild(pixelDiv);
  }
}

// creates the colored div in the color palette

createColorPalette(['black', 'cyan', 'red', 'yellow']);

function createPaletteColorDiv (color) {
  const addPixelDiv = document.createElement('div');
  addPixelDiv.style.backgroundColor = color;
  addPixelDiv.className = 'color';
  addPixelDiv.addEventListener('click', handlePalettePixelColor);

  if (color === 'black') {
    addPixelDiv.classList.add('selected');
  }
  return addPixelDiv
}

// handles the event to get selected pixel and change div's class

function handlePalettePixelColor (event) {
  const lastSelectedDiv = document.querySelector('.selected');
  const currentPixelDiv = event.target;
  lastSelectedDiv.classList.remove('selected');
  currentPixelDiv.classList.add('selected');
}

// handle event to change div's background color and make the pixel art

function addDivBgColor () {
  const pixelDivs = document.querySelectorAll('.pixel')
  
  for (let i in pixelDivs) {
    let currentDiv = pixelDivs[i];
    currentDiv.addEventListener('click', function (event) {
      const currentSelectedColor = document.querySelector('.selected').style.backgroundColor;
      currentDiv = event.target;
    currentDiv.style.backgroundColor = currentSelectedColor;
    });
  }
  return currentDiv;
}

document.querySelector('.pixel').addEventListener('click', addDivBgColor);

// add event to clean the board

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', function () {
  for (let i = 0; i < document.getElementsByClassName('pixel').length; i += 1)
    document.querySelectorAll('.pixel')[i].style.removeProperty('background-color');
})