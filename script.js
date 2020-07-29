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
// const generateBoardInput = document.getElementById('board-size');
// const generateBoardButton = document.getElementById('generate-board');

function generateRandomRGBColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const rgb = 'rgb(';
  const comma = ',';
  const closeBrackets = ')';
  const randomColor = rgb + r + comma + g + comma + b + closeBrackets;
  return randomColor;
}

window.onload = function () {
  secondColor.style.backgroundColor = generateRandomRGBColor();
  thirdColor.style.backgroundColor = generateRandomRGBColor();
  fourthColor.style.backgroundColor = generateRandomRGBColor();
};

function clearSelected() {
  const colorArray = document.getElementsByClassName('color');
  for (let i = 0; i < colorArray.length; i += 1) {
    const nameOfClass = colorArray[i].className.split(' ');
    const spaceBetweenClasses = ' ';
    colorArray[i].className = nameOfClass[0] + spaceBetweenClasses + nameOfClass[1];
  }
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

// generateBoardButton.addEventListener('click', function () {
//   const n = generateBoardInput.value;
//   if (n === '') {
//     alert('Board inválido!');
//   } else {
//     // pixelBoard.remove(document.getElementsByClassName('pixel'));
//     // pixelBoard.remove(document.getElementsByClassName('line'));
//     for (let iLine = 0; iLine < n; iLine += 1) {
//       const line = document.createElement('div');
//       line.className = 'line';
//       pixelBoard.appendChild(line);
//       for (let iPixel = 0; iPixel < n; iPixel += 1) {
//         const pixel = document.createElement('div');
//         pixel.style.backgroundColor = 'white';
//         pixel.className = 'pixel';
//         line.appendChild(pixel);
//       }
//     }
//   }
// });
