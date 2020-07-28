
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const pixels = document.getElementsByClassName('pixel');
let color;

color1.addEventListener('click', function() {selectColor(color1)});
color2.addEventListener('click', function() {selectColor(color2)});
color3.addEventListener('click', function() {selectColor(color3)});
color4.addEventListener('click', function() {selectColor(color4)});

function changeClass(div) {
  const oldDiv = document.getElementsByClassName('selected')[0];
  oldDiv.classList.remove('selected');
  div.classList.add('selected');
}

function selectColor(div){
  color = div.getAttribute('background-color');
  changeClass(div);
}

function changeColor(pixel) {
  pixel.addEventListener('click', function() {
    pixel.style.backgroundColor = 'color';
  });
}

for(let i = 0; i < pixels.length; i++) {
  changeColor(pixels[i])
}
