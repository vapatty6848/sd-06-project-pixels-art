// window.onload = function() {
//   localStorage.clear;
//   localStorage.setItem('colorSelected', 'black');
// }
function getColor(color) {
  localStorage.setItem('colorSelected', color);
  if (localStorage.getItem('colorSelected') === 'black') {
    document.getElementById('black').classList.add('selected');
    document.getElementById('pink').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
    document.getElementById('blue').classList.remove('selected');
  } else if (localStorage.getItem('colorSelected') === 'pink') {
    document.getElementById('black').classList.remove('selected');
    document.getElementById('pink').classList.add('selected');
    document.getElementById('red').classList.remove('selected');
    document.getElementById('blue').classList.remove('selected');
  } else if (localStorage.getItem('colorSelected' === 'red')) {
    document.getElementById('black').classList.remove('selected');
    document.getElementById('pink').classList.remove('selected');
    document.getElementById('red').classList.add('selected');
    document.getElementById('blue').classList.remove('selected');
  } else {
    document.getElementById('black').classList.remove('selected');
    document.getElementById('pink').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
    document.getElementById('blue').classList.add('selected');
  }
}
const btnBlack = document.getElementById('black');
btnBlack.addEventListener('click', function () {
  getColor('black');
});
const btnPink = document.getElementById('pink');
btnPink.addEventListener('click', function () {
  getColor('pink');
});
const btnRed = document.getElementById('red');
btnRed.addEventListener('click', function () {
  getColor('red');
});
const btnBlue = document.getElementById('blue');
btnBlue.addEventListener('click', function () {
  getColor('blue');
});

function setColor(pixel, color) {
  pixel.style.backgroundColor = color;
}
let pixelSelected = document.getElementsByClassName('pixel');
for (let i = 0; i < pixelSelected.length; i += 1) {
  pixelSelected[i].onclick = function () {
    setColor(pixelSelected[i], localStorage.getItem('colorSelected'));
  }
}
function clearAll(color) {
  let pixelsToClean = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsToClean.length; i += 1) {
    pixelsToClean[i].style.backgroundColor = 'white';
  }
}
let btnClearAll = document.getElementById('clear-board');
btnClearAll.addEventListener('click', function () {
  clearAll('white');
});
