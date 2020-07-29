const colorBlack = document.querySelector('.black');
const colorRed = document.querySelector('.red');
const colorBlue = document.querySelector('.blue');
const colorPurple = document.querySelector('.purple');
const btnClear = document.getElementById('clear-board');
const btnGenerate = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

function createPixelLine(number) {
  for (let i = 0; i < number; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.id = 'pixel-line';
    pixelLine.className = 'line';
    document.getElementById('pixel-board').appendChild(pixelLine);
  }
};

function createPixel(i) {
  const newPixel = document.createElement('div');
  newPixel.className = 'pixel';
  document.querySelectorAll('#pixel-line')[i].appendChild(newPixel);
};

function createBoard(number) {
  if (number >= 5 && number <= 50) {
    createPixelLine(number);
    for (let i = 0; i < document.querySelectorAll('#pixel-line').length; i += 1) {
      for(let i = 0; i < number; i += 1){
        createPixel(i)
      }
    }
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
      document.querySelectorAll('.pixel')[i].addEventListener('click', function () {
        document.querySelectorAll('.pixel')[i].style.backgroundColor = document.querySelector('.selected').style.color;
      });
    }
  }
};

createBoard(5);

document.querySelector('.black').className += ' selected';
document.querySelector('.selected').style.color = 'black';

colorBlack.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorBlack.className += ' selected';
  document.querySelector('.selected').style.color = 'black';
});

colorRed.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorRed.className += ' selected';
  document.querySelector('.selected').style.color = 'red';
});

colorBlue.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorBlue.className += ' selected';
  document.querySelector('.selected').style.color = 'blue';
});

colorPurple.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorPurple.className += ' selected';
  document.querySelector('.selected').style.color = 'purple';
});

btnClear.addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
});

btnGenerate.addEventListener('click', function () {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (parseInt(boardSize.value) < 5) {
    document.body.removeChild(document.getElementById('pixel-board'));
    const board = document.createElement('div');
    board.id = 'pixel-board';
    document.body.appendChild(board);
    createBoard(5);
  } else if (parseInt(boardSize.value) > 50) {
    document.body.removeChild(document.getElementById('pixel-board'));
    const board = document.createElement('div');
    board.id = 'pixel-board';
    document.body.appendChild(board);
    createBoard(50);
  } else {
    document.body.removeChild(document.getElementById('pixel-board'));
    const board = document.createElement('div');
    board.id = 'pixel-board';
    document.body.appendChild(board);
    createBoard(parseInt(boardSize.value));
  }
});
