// Starting Pixel Art
function addColorSelected(color) {
  const point = '.';
  const selected = 'selected';
  const elementToRemove = document.querySelector('.selected');
  elementToRemove.classList.remove('selected');
  const elementToAdd = document.querySelector(point + color);
  elementToAdd.classList.add(selected);
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
