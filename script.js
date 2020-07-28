
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const pixels = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
let color = 'black';

color1.addEventListener('click', function() {selectColor(color1)});
color2.addEventListener('click', function() {selectColor(color2)});
color3.addEventListener('click', function() {selectColor(color3)});
color4.addEventListener('click', function() {selectColor(color4)});
clear.addEventListener('click', clearBoard);

function changeClass(div) {
  const oldDiv = document.getElementsByClassName('selected')[0];
  oldDiv.classList.remove('selected');
  div.classList.add('selected');
}

function selectColor(div){
  color = document.defaultView.getComputedStyle(div, null).getPropertyValue('background-color');
  changeClass(div);
}

function changeColor(pixel) {
  pixel.addEventListener('click', function() {
    pixel.style.backgroundColor = color;
  });
}

function clearBoard() {
  for(let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white';
  }
}

for(let i = 0; i < pixels.length; i++) {
  changeColor(pixels[i])
}
