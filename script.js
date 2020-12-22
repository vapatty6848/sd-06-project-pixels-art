let pixel = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('.button');
const colorPalette = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
const generateBoard = document.querySelector('#generate-board');

const boardSize = document.querySelector('#board-size');
let color = '#000000';

const colorArray = [color];

// Cria pixel boarder de a cordo com valor selecionado para tamanho do lado
function createPixelBorder(side) {
  if (isNaN(side) || side === 0) {
    alert('Board inválido!');
  } else {
    if (side < 5) {
      side = 5;
    }
    if (side > 50) {
      side = 50;
    }
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  }

  // Altera a cor do píxel clicado
  function setPixelColor(event) {
    event.target.style.backgroundColor = color;
  }

  for (let indexLn = 0; indexLn < side; indexLn += 1) {
    board.appendChild(document.createElement('div'));
    board.lastChild.classList.add('line');
    for (let indexCol = 0; indexCol < side; indexCol += 1) {
      board.lastElementChild.appendChild(document.createElement('div'));
      board.lastElementChild.lastChild.classList.add('pixel');
    }
  }
  pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', setPixelColor);
  }
}

function createColorPalete() {
  for (let index = 0; index < 4; index += 1) {
    if (index !== 0) {
      colorArray.push(color);
      color = `#${Math.random().toString(16).slice(-6)}`; // six-number format aka #abc123
    }
    colorPalette.appendChild(document.createElement('div'));
    colorPalette.lastChild.classList.add('color');
    colorPalette.lastChild.style.backgroundColor = color;
  }
  color = '#000000';
  colorPalette.firstChild.classList.add('selected');
}

window.onload = () => {
  createColorPalete(), createPixelBorder(5);
};

// Seleção de cor a ser utilizada
function selectColor(event) {
  let selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected'); // Remove cor selecionada previamente
  }
  selected = event.target;
  selected.classList.add('selected'); // Atualiza seleção da cor
  color = window.getComputedStyle(selected).backgroundColor; // Atualiza cor a ser mantida
}

// Limpa pixel boarder aplcando branco pra cor de fundo de cada pixel
function clearPixelbyPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = '#ffffff';
  }
}

colorPalette.addEventListener('click', selectColor);
generateBoard.addEventListener('click', () => createPixelBorder(Number(boardSize.value)));
clearBoard.addEventListener('click', clearPixelbyPixel);
