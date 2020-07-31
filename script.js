let selectedColor = 'black';
window.onload = function() {
  let randomColor0 = '#' + ((1<<24)*Math.random()|0).toString(16);
  let randomColor1 = '#' + ((1<<24)*Math.random()|0).toString(16);
  let randomColor2 = '#' + ((1<<24)*Math.random()|0).toString(16);
  createColorPallet(['black', randomColor0, randomColor1, randomColor2]);
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
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', limpaTudo);

