const colorPalette = document.querySelectorAll('.color');
const btnClear = document.getElementById('clear-board');
const btnGenerate = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');
const colors = ['red', 'green', 'blue', 'purple', 'brown', 'dimgray', 'cyan', 'orange'];
const selectedColors = []

for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
  if (i === 0) {
    document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
  } else {
    var newColor = Math.ceil(Math.random() * (colors.length - 1));
    document.querySelectorAll('.color')[i].style.backgroundColor = colors[newColor];
    colors.splice(newColor, 1);
  }
}

function createPixelLine(number) {
  for (let i = 0; i < number; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.id = 'pixel-line';
    pixelLine.className = 'line';
    document.getElementById('pixel-board').appendChild(pixelLine);
  }
}

function createPixel(i) {
  const newPixel = document.createElement('div');
  newPixel.className = 'pixel';
  document.querySelectorAll('#pixel-line')[i].appendChild(newPixel);
}

function pixelEvent() {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].addEventListener('click', function () {
      document.querySelectorAll('.pixel')[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}

function createBoard(number) {
  if (number >= 5 && number <= 50) {
    createPixelLine(number);
    for (let i = 0; i < document.querySelectorAll('#pixel-line').length; i += 1) {
      for (let j = 0; j < number; j += 1) {
        createPixel(i);
      }
    }
    pixelEvent();
  }
}

function normalColor() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].className = 'color';
  }
}

createBoard(5);

colorPalette[0].className += ' selected';
document.querySelector('.selected').style.color = 'black';

for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', function (event) {
    normalColor();
    if (event.target) {
      colorPalette[i].className = 'color selected';
    }
  })
};

btnClear.addEventListener('click', function () {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
});

btnGenerate.addEventListener('click', function () {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (parseInt(boardSize.value) < 5) {
    document.getElementById('header').removeChild(document.getElementById('pixel-board'));
    const board = document.createElement('div');
    board.id = 'pixel-board';
    document.getElementById('header').appendChild(board);
    createBoard(5);
  } else if (parseInt(boardSize.value) > 50) {
    document.getElementById('header').removeChild(document.getElementById('pixel-board'));
    const board = document.createElement('div');
    board.id = 'pixel-board';
    document.getElementById('header').appendChild(board);
    createBoard(50);
  } else {
    document.getElementById('header').removeChild(document.getElementById('pixel-board'));
    const board = document.createElement('div');
    board.id = 'pixel-board';
    document.getElementById('header').appendChild(board);
    createBoard(parseInt(boardSize.value));
  }
});
