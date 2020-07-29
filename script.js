createColorPalette(['black', 'cyan', 'forestgreen', 'yellow']);

// creates color palette

function createColorPalette (colorArray) {
  let colorPaletteContainer = document.getElementById('color-palette');

  for (index in colorArray) {
    let pixelDiv = createPaletteColorDiv(colorArray[index]);
    colorPaletteContainer.appendChild(pixelDiv);
  }
}

// creates the colored div in the color palette

function createPaletteColorDiv (color) {
  let addPixelDiv = document.createElement('div');
  addPixelDiv.style.backgroundColor = color;
  addPixelDiv.className = 'color';
  addPixelDiv.addEventListener('click', handlePalettePixelColor);

  if (color === 'black') {
    addPixelDiv.classList.add('selected');
  }
  return addPixelDiv
}

// handle the event to get div's background color and change selected pixel class

function handlePalettePixelColor (event) {
  let lastSelectedDiv = document.querySelector('.selected');
  let currentPixelDiv = event.target;
  lastSelectedDiv.classList.remove('selected');
  currentPixelDiv.classList.add('selected');
  // let pixelDivBgColor = currentPixelDiv.style.backgroundColor;
  // console.log(pixelDivBgColor);
}

// handle event to change div's background color and make the pixel art

function addDivBgColor () {
  let divPixel = document.querySelectorAll('.pixel');
    for (let index in divPixel) {
      let currentDiv = divPixel[index];
      currentDiv.addEventListener('click', function (event) {
        let getSelectedColor = document.querySelector('.selected').style.backgroundColor
        let currentDivPaint = event.target;
        currentDivPaint.style.backgroundColor = getSelectedColor;
      });
    }
}

// get html clear button

const btnClear = document.querySelector('#clear-board');

// add event to clean the board

btnClear.addEventListener('click', function () {
  for (let i = 0; i < document.getElementsByClassName('pixel').length; i += 1)
    document.querySelectorAll('.pixel')[i].style.backgroundColor = '';
})
