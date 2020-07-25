// Scriptlist


function createColorButton(color) {
  const colorContainer = document.getElementById('color-palette');
  const colorBtn = document.createElement('button');
  colorBtn.classList.add('color');
  if (color === 'black') {
    colorBtn.classList.add('selected');
  }
  colorBtn.id = color;
  colorBtn.style.backgroundColor = color;
  colorBtn.addEventListener('click', getColor);
  colorContainer.appendChild(colorBtn);
}
function colorPalete() {
  const colors = ['black', 'green', 'blue', 'purple'];
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    createColorButton(color);
  }

}

function createPixelBoard(size) {
  const totalSize = size * size;
  let name = 1;
  const boardWidth = (size * 40) + (size * 2);
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.borderStyle = 'solid';
  pixelBoard.style.borderWidth = '2px';
  pixelBoard.style.width = `${boardWidth}px`;
  for (let i = 0; i < totalSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = name;
    pixel.addEventListener('click', giveColor);
    pixelBoard.appendChild(pixel);
    name += 1;
  }
}
function clearButton() {
  const clearButon = document.getElementById('clear-board');
  clearButon.addEventListener('click', clearBoard);
}
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(function (pixel) {
    pixel.style.backgroundColor = 'white';
  });
}
window.onload = function () {
  // console.log('page loaded')
  // global variables
  // selected = 'black';
  // calls
  colorPalete();
  createPixelBoard(5);
  clearButton();
};


function selectColor () {
  // pegando o ID de quem esta com a classe .selected
  let selectedColorId = document.querySelector('.selected').id;
  return selectedColorId;
}
function giveColor () {
  let color = selectColor();
  let clickedPixel = document.getElementById(this.id);
  clickedPixel.style.backgroundColor = color;
}

function getColor () {
  let clickColor = document.getElementById(this.id).id;
  let alreadyColor = selectColor();
  if (clickColor != alreadyColor) {
    removeClass(alreadyColor);
    assignClass(clickColor);
  }
}


function removeClass (colorId) {
  let removeClass = document.getElementById(colorId);
  removeClass.classList.remove('selected');  
}
function assignClass (colorId) {
  let assignClass = document.getElementById(colorId);
  assignClass.classList.add('selected');  
}
