let selected = '';

function alternativeClickPixel(event) {
  event.target.style.backgroundColor = selected;
}

function alternativeSelectColor(event) {
  for (let item = 0; item < document.getElementsByClassName('color').length; item += 1) {
    document.getElementsByClassName('color')[item].classList.remove('selected');
  }
  event.target.classList.add('selected');
  selected = window.getComputedStyle(document.getElementsByClassName('selected')[0], null).getPropertyValue('background-color');
}

function clearBoard() {
  for (let element = 0; element < document.getElementsByClassName('pixel').length; element += 1) {
    document.getElementsByClassName('pixel')[element].style.backgroundColor = 'white';
  }
}

function destroyBoard() {
  const arrayBoard = document.getElementById('pixel-board').children;
  while (document.getElementById('pixel-board').children.length > 0) {
    let i = 0;
    document.getElementById('pixel-board').removeChild(arrayBoard[i]);
    i += 1;
  }
}

function createPixelBoard(param1) {
  for (let line = 0; line < parseInt(param1, 10); line += 1) {
    const linha = document.createElement('div');
    linha.classList.add('tr');
    document.getElementById('pixel-board').appendChild(linha);
    for (let column = 0; column < param1; column += 1) {
      const coluna = document.createElement('div');
      coluna.classList.add('td', 'pixel');
      document.getElementsByClassName('tr')[line].appendChild(coluna);
    }
  }
}

function setBoardSize() {
  let size = parseInt(document.getElementById('board-size').value, 10);
  if (document.getElementById('board-size').value === '') {
    alert('Board inválido!');
  } else if (size < 5 && size >= 0) {
    destroyBoard();
    size = 5;
    createPixelBoard(size);
  } else if (size > 50) {
    destroyBoard();
    size = 50;
    createPixelBoard(size);
  } else {
    destroyBoard();
    createPixelBoard(size);
  }
}

function generateRandomColor() {
  for (let item = 0; item < document.getElementsByClassName('color').length; item += 1) {
    if (!document.getElementsByClassName('color')[item].classList.contains('one')) {
      document.getElementsByClassName('color')[item].classList.remove('two', 'three', 'four');
      const string = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
      document.getElementsByClassName('color')[item].style.backgroundColor = string;
    }
  }
}

window.onload = function () {
  createPixelBoard(5);
  generateRandomColor();
  document.getElementById('pixel-board').addEventListener('click', alternativeClickPixel);
  document.getElementById('color-palette').addEventListener('click', alternativeSelectColor);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
  document.getElementById('generate-board').addEventListener('click', setBoardSize);
  selected = window.getComputedStyle(document.getElementsByClassName('color')[0], null).getPropertyValue('background-color');
};
