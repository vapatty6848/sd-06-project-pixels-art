let pixelBoard = document.querySelector('#pixel-board');
let selectedColor = document.querySelector('.color');
let onClickColor = {};
const selectedClass = 'selected';

for (let i = 0; i < 25; i++) {
  const div = document.createElement('div');
  div.className = 'pixel';
  pixelBoard.appendChild(div);
}

function addSelectedClass() {
  selectedColor.classList.add(selectedClass);
}

for (let i = 0; i < document.querySelectorAll('.color').length; i++) {
  const currentColorOption = document.querySelectorAll('.color')[i];

  currentColorOption.addEventListener('click', function (event) {
    const colorOfClickedOption = window.getComputedStyle(event.target, null).getPropertyValue("background-color");

    onClickColor = colorOfClickedOption;
    selectedColor.classList.remove(selectedClass);
    selectedColor = currentColorOption;
    addSelectedClass();
  })
}

