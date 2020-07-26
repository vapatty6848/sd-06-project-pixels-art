// Starting Pixel Art
function addColorSelected(color) {
  const point = '.';
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  let element = document.querySelector(point + color);
  element.className = 'color ' + color + ' selected';
}

const btnColorBlack = document.querySelector('.black');
btnColorBlack.addEventListener('click', function () {
  addColorSelected('black');
});

const btnColorRed = document.querySelector('.red');
btnColorRed.addEventListener('click', function () {
  addColorSelected('red');
});

const btnColorGreen = document.querySelector('.green');
btnColorGreen.addEventListener('click', function () {
  addColorSelected('green');
});

const btnColorBlue = document.querySelector('.blue');
btnColorBlue.addEventListener('click', function () {
  addColorSelected('blue');
});
