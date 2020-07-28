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
  console.log(bgProperty);
  event.target.style.backgroundColor = bgProperty;
});
