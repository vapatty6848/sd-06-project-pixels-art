window.onload = function() {
  createColorPallet(['black', 'red', 'blue', 'green']);
  //addPixelsTdEvents();
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
}
// function addPixelsTdEvents() {
//   let pixelTds = document.querySelectorAll('.pixel');
//   for (let index in pixelTds) {
//     let td = pixelTds[index];
//     td.addEventListener('click', function(event) {
//       let backColor = document.querySelector('.selected').style.backgroundColor
//       event.target.id.backgroundColor = backColor;
//     });
//   }
// }
function limpaTudo() {
  let pixel = document.querySelectorAll('.pixel')
  for (let i in pixel) {
    pixel[i].style.backgroundColor = 'white';
  }
}
let botao = document.getElementById('clear-board');
botao.addEventListener('click', limpaTudo);

const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
let seleCor = 'black';
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function() {
    pixels[i].style.background = seleCor;
  });
}

