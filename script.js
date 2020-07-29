let changeColor = document.querySelector('.selected');

function colorCatcher() {
  changeColor = window.getComputedStyle(changeColor, null).getPropertyValue('background-color');
  return changeColor;
}

function getRandomColor() {
  const color = Math.floor(Math.random() * 16777216).toString(16);
  return '#000000'.slice(0, -color.length) + color;
}

colorCatcher();

function paletteGenerator() {
  const witchColorSet = document.querySelector('#color-palette').firstElementChild;

  for (let color = witchColorSet.nextElementSibling; color; color = color.nextElementSibling) {
    const colorToSet = getRandomColor();
    color.style.backgroundColor = `${colorToSet}`;
  }
}

window.onload = paletteGenerator();

function pixelLineCreator(param) {
  const whereCreate = document.querySelector('#pixel-board');
  while (whereCreate.firstChild) {
    whereCreate.removeChild(whereCreate.firstChild);
  }

  for (let x = 1; x <= param; x += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'pixel-line';

    for (let y = 1; y <= param; y += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newLine.appendChild(newPixel);
    }
    whereCreate.appendChild(newLine);
  }
}

function generateBoard() {
  const boardSize = document.querySelector('#board-size').value;

  if (boardSize === '') {
    alert('Board inválido!');
  } else if (boardSize > 50) {
    pixelLineCreator(50);
  } else if (boardSize < 5) {
    pixelLineCreator(5);
  } else {
    pixelLineCreator(boardSize);
  }
}

const generateButton = document.querySelector('#generate-board');

generateButton.addEventListener('click', generateBoard);

document.addEventListener('click', function (pointedPixel) {
  pointedPixel = event.target;

  if (pointedPixel.classList.contains('color') === true) {
    document.querySelector('.selected').classList.remove('selected');
    pointedPixel.classList.add('selected');
    changeColor = document.querySelector('.selected');
    changeColor = window.getComputedStyle(changeColor, null).getPropertyValue('background-color');
  } else if (pointedPixel.classList.contains('pixel') === true) {
    pointedPixel.style.backgroundColor = changeColor;
  }
});

const clearBoard = document.querySelector('#clear-board');

clearBoard.addEventListener('click', function () {
  for (let anLine = document.getElementById('pixel-board').firstElementChild; anLine; anLine = anLine.nextElementSibling) {
    for (let anChild = anLine.firstElementChild; anChild; anChild = anChild.nextElementSibling) {
      anChild.style.backgroundColor = 'white';
    }
  }
});
