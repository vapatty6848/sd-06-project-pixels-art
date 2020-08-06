// função p/ criar as divs c/ a classe pixel
function createPixelDivs(dim) {
  const pixelBoard = document.querySelector('#pixel-board');
  let dimensions = dim;

  if (dim < 5) {
    dimensions = 5;
  } else if (dim > 50) {
    dimensions = 50;
  }

  for (let row = 1; row <= dimensions; row += 1) {
    const boardRow = document.createElement('div');

    boardRow.classList.add('pixel-row');
    pixelBoard.appendChild(boardRow);

    for (let col = 1; col <= dimensions; col += 1) {
      const pixel = document.createElement('div');

      pixel.classList.add('pixel');
      boardRow.appendChild(pixel);
    }
  }
}

// cria o pixel board após clicar no botão VQV
function generateBoard() {
  const board = document.getElementById('pixel-board');
  const pixelRows = document.getElementsByClassName('pixel-row');
  const boardDimensions = document.getElementById('board-size').value;
  let pixels = document.getElementsByClassName('pixel');

  if (boardDimensions === '') {
    alert('Board inválido!');
    return;
  }

  while (pixels.length > 0) {
    board.removeChild(pixelRows[0]);
  }

  while (pixelRows.length > 0) {
    board.removeChild(pixels[0]);
  }

  createPixelDivs(boardDimensions);
  pixels = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    });
  }
}

// limpa as cores que estão no pixel board
function clearPixelBoard() {
  const pixelBoard = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].style.backgroundColor = 'white';
  }
}

// define a classe da cor clicada como selected
function changeColor(event) {
  const color = event.target;

  if (color.classList.contains('selected')) {
    return;
  }
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    color.classList.add('selected');
}

window.onload = function () {
  const palette = document.getElementsByClassName('color');
  const clear = document.querySelector('#clear-board');
  const generateButton = document.querySelector('#generate-board');

  // cria o board inicial 5x5, padrão do exercício
  generateBoard();

  // botão Limpar
  clear.addEventListener('click', clearPixelBoard);

  // gera o pixel board após clicar em VQV
  generateButton.addEventListener('click', generateBoard);

  // adiciona evento que captura a cor após o click na paleta
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener('click', changeColor);
  }
};
