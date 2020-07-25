
window.onload = function () {
    // console.log('page loaded')
    // global variables
  //selected = 'black';
    // calls

  colorPalete();
  createPixelBoard(5);
  clearButton();
  selected = 'black';
};

function colorPalete() {
  let colors = ['black', 'green', 'blue', 'purple']
  for (let i = 0; i < colors.length; i += 1) {
      let color = colors[i];
      createColorButton(color);
  }
}
function createColorButton(color) {
  let colorContainer = document.getElementById('color-palette');
  let colorBtn = document.createElement('button');
  colorBtn.classList.add('color');
  if (color === 'black') {
      colorBtn.classList.add('selected');
  }
  colorBtn.id = color;
  colorBtn.style.backgroundColor = color;
  colorBtn.addEventListener('click', getColor)
  colorContainer.appendChild(colorBtn);
    
}
function getColor() {
  selected = this.id;
}
function createPixelBoard(size) {
  let name = 1;
  let totalSize = size * size;
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.borderStyle = 'solid';
  pixelBoard.style.borderWidth = '2px';
  pixelBoard.style.width = (size * 40) + (size * 2) + 'px';
  for (let i = 0; i < totalSize; i += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = name;
    pixel.addEventListener('click', giveColor);
    pixelBoard.appendChild(pixel);
    name += 1;
  }
}
function giveColor() {
  let clickedPixel = document.getElementById(this.id);
  clickedPixel.style.backgroundColor = selected;
}
function clearButton() {
  let clearButon = document.getElementById('clear-board');
  clearButon.addEventListener('click', clearBoard);
}
function clearBoard() {
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach(function(pixel) {
    pixel.style.backgroundColor = 'white';
  })
}

