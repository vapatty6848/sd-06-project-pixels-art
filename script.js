let selectedColor = 'rgb(0 , 0 , 0)';

function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function setRandomColors() {
  const firstElement = document.querySelector('.selected');
  let nextSibling = firstElement.nextElementSibling;
  while (nextSibling) {
    const color = generateRandomColor();
    nextSibling.style.backgroundColor = `#${color}`;
    nextSibling = nextSibling.nextElementSibling;
  }
}

function clearBoard() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    const pixel = allPixels[i];
    pixel.style.backgroundColor = 'white';
  }
}

function enableColor(newColor) {
  const previousColor = document.querySelector('.selected');
  previousColor.classList.remove('selected');
  newColor.classList.add('selected');
  selectedColor = window.getComputedStyle(newColor, null).getPropertyValue('background-color');
}

function deleteRows() {
  const board = document.getElementById('pixel-board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function getSizeInput() {
  const sizeInput = document.getElementById('board-size').value;
  return sizeInput;
}

function getBoardDimensions() {
  const sizeInput = parseInt(getSizeInput(), 10);
  if (!sizeInput) {
    alert('Board inválido!');
  }
  let size;
  // Validate user input
  if (sizeInput < 5) {
    size = 5;
  } else if (sizeInput > 50) {
    size = 50;
  } else {
    size = sizeInput;
  }
  // Board is always a square
  const boardDimensions = {
    numberOfPixels: size,
    numberOfLines: size,
  }
  return boardDimensions;
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  return pixel;
}

function mountLine(numberOfPixels) {
  const line = document.createElement('div');
  line.classList.add('board-row');
  for (let i = 1; i <= numberOfPixels; i += 1) {
    line.appendChild(createPixel());
  }
  return line;
}

function fillBoard(boardClass) {
  const boardDimensions = getBoardDimensions();
  const board = document.getElementById(boardClass);
  for (let i = 1; i <= boardDimensions.numberOfLines; i += 1) {
    board.appendChild(mountLine(boardDimensions.numberOfPixels));
  }
}

document.addEventListener('click', function (event) {
  // Click on color palette
  if (event.target.classList.contains('color')) {
    const newColor = event.target;
    enableColor(newColor);
  }

  // Click on board cell
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor;
  }

  // Click on Clear button;
  if (event.srcElement.id === 'clear-board') {
    clearBoard();
  }

  // Click on VQV Button
  if (event.srcElement.id === 'generate-board') {
    deleteRows();
    fillBoard('pixel-board');
  }
});

window.onload = setRandomColors;
