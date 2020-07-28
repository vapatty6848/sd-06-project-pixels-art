const colors = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('.button');

let selected = document.querySelector('.selected');
let color = window.getComputedStyle(selected).backgroundColor;

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function() {
    selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    colors[i].classList.add('selected');
    color = window.getComputedStyle(colors[i]).backgroundColor;
  });
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', function() {
    pixel[i].style.backgroundColor = color;
  });
}

clearBoard.addEventListener('click', function() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});
