// Variaveis //
const colorPalette = document.getElementById('color-palette');
const colors = ['black', 'green', 'red', 'blue'];
const pixelBoard = document.getElementById('pixel-board');
const colorSelected = document.getElementsByClassName('color');
const buttonElement = document.querySelector('#clear-board');
const pixelSelected = document.getElementsByClassName('pixel');
// Funções e Eventos

for (let i = 0; i < 4; i += 1) {
  const createBoxColors = document.createElement('li');
  createBoxColors.className = 'color';
  createBoxColors.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColors);
}

for (let i = 0; i < 5; i += 1) {
  const linha = document.createElement('div');
  linha.className = 'line';
  pixelBoard.appendChild(linha);
  for (let j = 0; j < 5; j += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    linha.appendChild(pixel);
  }
}

window.onload = function () {
  colorSelected[0].className += ' selected';
};

function changeSelected(select) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  select.className += ' selected';
}

colorPalette.addEventListener('click', function (e) {
  changeSelected(e.target);
});


pixelBoard.addEventListener('click', function (e) {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});

buttonElement.addEventListener('click', function () {
  for (let r = 0; r < pixelSelected.length; r += 1) {
    pixelSelected[r].style.background = 'white';
  }
});
