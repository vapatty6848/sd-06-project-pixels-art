// window.onload = createPixelBoard();

// function createPixelBoard () {
//   for (let y = 0; y <= 5; y += 1) {
//     const pixelBoard = document.getElementById('pixel-board');
//     for (let x = 0; x < 5; x += 1) {
//       const pixelSquare = document.createElement('div');
//       pixelSquare.style.border = '1px solid black';
//       pixelSquare.style.height = '40px';
//       pixelSquare.style.width = '40px';
//       pixelSquare.style.display = 'inline-block';
//       pixelSquare.className = 'pixel';
//       if (x !== 5) {
//         pixelBoard.appendChild(pixelSquare);
//       }
//     }
//   }
// }

const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const generateBoardInput = document.getElementById('board-size');
const generateBoardButton = document.getElementById('generate-board');

function clearSelected() {
  firstColor.className = 'color color1';
  secondColor.className = 'color color2';
  thirdColor.className = 'color color3';
  fourthColor.className = 'color color4';
}

firstColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

secondColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

thirdColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

fourthColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

pixelBoard.addEventListener('click', function (event) {
  const selectedColor = document.querySelector('.selected');
  const bgProperty = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = bgProperty;
  }
});

clearButton.addEventListener('click', function () {
  const pixelsArray = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsArray.length; i += 1) {
    pixelsArray[i].style.backgroundColor = 'white';
  }
});

generateBoardButton.addEventListener('click', function () {
  if (generateBoardInput.value === '' || generateBoardInput.value < 5 || generateBoardInput.value > 50) {
    alert('Board inválido!');
  }
});
