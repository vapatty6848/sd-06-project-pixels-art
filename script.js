let changeColor = document.querySelector('.selected').id;

function pixelLineCreator (param) {
const whereCreate = document.querySelector('#pixel-board');
  boardSize = param;
  while (whereCreate.firstChild) {
    whereCreate.removeChild(whereCreate.firstChild);
  }

  for (let x = 1; x <= boardSize; x += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'pixel-line';

    for (let y = 1; y <= boardSize; y += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newLine.appendChild(newPixel);
    }
    whereCreate.appendChild(newLine);
  }
}

function generateBoard () {
  let boardSize = document.querySelector('#board-size').value;

  if (boardSize === "") {
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
    changeColor = document.querySelector('.selected').id;
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
