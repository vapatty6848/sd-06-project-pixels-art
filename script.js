let selectedColor = 'black';
window.onload = function() {
  createColorPallet(['black', 'red', 'blue', 'green']);
}
function createColorPallet(colors) {
  let colorPaletContainer = document.getElementById("color-palette");
  for (let index in colors) {
    let palletItemDiv = createPalletItem(colors[index]);
    colorPaletContainer.appendChild(palletItemDiv);
  }
}
function createPalletItem(color) {
  let palletItemDiv = document.createElement('div');
  palletItemDiv.style.backgroundColor = color;
  palletItemDiv.className = "color";
  palletItemDiv.addEventListener('click', handlePalletItemEvent);
  if (color === 'black') {
    palletItemDiv.classList.add('selected');
  }
  return palletItemDiv;
}
function handlePalletItemEvent(event) {
  let oldSelectedDiv = document.querySelector('.selected');
  let currentSelectedDiv = event.target;
  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');
  selectedColor = currentSelectedDiv.style.backgroundColor;
}
function handlePixelClick() {
  let selectedPixel = event.target;
  selectedPixel.style.backgroundColor = selectedColor;
}
let pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', handlePixelClick);
for (let i in pixelBoard) {
  let pixel;
  pixel = pixelBoard[i];
}
function limpaTudo() {
  const pixels = document.querySelectorAll('.pixel');
  let seleCor = 'white';
  for (let i in pixels) {
    pixels[i].style.background = seleCor;
  }
}



