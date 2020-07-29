var selected = '';

function alternativeClickPixel(event) {
  event.target.style.backgroundColor = selected;
}

function alternativeSelectColor(event) {
  for (item of document.getElementsByClassName('color')) {
    item.classList.remove('selected');
  }
  event.target.classList.add('selected');
  selected = window.getComputedStyle(document.getElementsByClassName('selected')[0], null).getPropertyValue('background-color');
}

function clearBoard() {
  for (let element of document.getElementsByClassName('pixel')) {
    element.style.backgroundColor = 'white';
  }
}

function setBoardSize() {
  let size = parseInt(document.getElementById('board-size').value);
  if (document.getElementById('board-size').value === '') {
    alert('Board inválido!')
  } else if (size < 5) {
    size = 5;
    for (let element of document.getElementsByClassName('pixel')) {
      element.style.height = `${size}px`;
      element.style.width = `${size}px`;
      clearBoard();
    }
  } else if (size > 50) {
    size = 50;
    for (let element of document.getElementsByClassName('pixel')) {
      element.style.height = `${size}px`;
      element.style.width = `${size}px`;
      clearBoard();
    }
  } else {
    for (let element of document.getElementsByClassName('pixel')) {
      element.style.height = `${size}px`;
      element.style.width = `${size}px`;
      clearBoard();
    }
  }
}

function createPixelBoard (param1) {
  for (let line = 0; line < parseInt(param1); line += 1) {
    let linha = document.createElement('div');
    linha.classList.add('tr');
    document.getElementById('pixel-board').appendChild(linha);
    for (let column = 0; column < param1; column += 1){
      let coluna = document.createElement('div');
      coluna.classList.add('td', 'pixel');
      document.getElementsByClassName('tr')[line].appendChild(coluna);
    }
  }
}

window.onload = function () {
  createPixelBoard(5);
  document.getElementById('pixel-board').addEventListener('click', alternativeClickPixel);
  document.getElementById('color-palette').addEventListener('click', alternativeSelectColor);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
  document.getElementById('generate-board').addEventListener('click', setBoardSize);
  selected = window.getComputedStyle(document.getElementsByClassName('color')[0], null).getPropertyValue('background-color');
}
