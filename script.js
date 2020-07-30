let selectedElement = document.getElementById('color-palette')

selectedElement.addEventListener('click', function() {
  let oldSelectedElement = document.querySelector('.selected');
  oldSelectedElement.classList.remove('selected');
  let currentSelectedElement = event.target;
  currentSelectedElement.classList.add('selected');
})

let selectedPixel = document.getElementById('pixel-board')

selectedPixel.addEventListener('click', function() {
  let pixelColorSelected = document.querySelector('.selected').id;
  event.target.style.backgroundColor = pixelColorSelected;
})

let botaoLimpar = document.querySelector('#clear-board');

botaoLimpar.addEventListener('click', clearBoard);

let pixelColorido = document.getElementsByClassName('pixel');

function clearBoard () {
  //selectedPixel.style.backgroundColor = 'white';
  for (let index = 0; index < pixelColorido.length; index += 1) {
    pixelColorido[index].style.backgroundColor = 'white';
  }
}