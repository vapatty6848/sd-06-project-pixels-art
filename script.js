let selectedColor = 'black'

window.onload = function() {
  addColorPallet(['black', 'red', 'blue', 'green']);
  createBoardRows();
  addButtonEvent();
  pixelBoardSelection();
}

// COLOR PALLET
// Função para adicionar os itens ao pallet
function addColorPallet(colors) {
  const colorPalletWrap = document.querySelector('#color-palette');

  for (let index in colors) {
    const palletItemElement = createPalletItem(colors[index]);
    colorPalletWrap.appendChild(palletItemElement);
  }
}

// Função p/ criar, estilizar e adicionar escutador no elemento HTML (div).
function createPalletItem(color) {
  const palletItemElement = document.createElement('div');
  palletItemElement.style.backgroundColor = color;
  palletItemElement.classList.add('color');
  palletItemElement.addEventListener('click', handlePalletItemEvent);

  if (color === 'black') {
    palletItemElement.classList.add('selected');
  }
  return palletItemElement;
}

// função para tratar do evento
function handlePalletItemEvent(event) {
  const lastSelectedDiv = document.querySelector('.selected');
  const nowSelectedDiv = event.target;
  lastSelectedDiv.classList.remove('selected');
  nowSelectedDiv.classList.add('selected');
  selectedColor = nowSelectedDiv.style.backgroundColor
}

// PIXEL BOARD
// Função adicionar rows
function createBoardRows() {
  const PixelBoardContainer = document.querySelector('#pixel-board');
  let rowDiv;

  for (let index = 1; index <= 5; index += 1) {
    rowDiv = document.createElement('section');
    rowDiv.classList.add('board-row' + index);
    PixelBoardContainer.appendChild(rowDiv);
    const boardRowContainer = document.querySelector('.board-row' + [index]);

    for (let j = 1; j <= 5; j += 1) {
      const pixelDiv = createPixel();
      boardRowContainer.appendChild(pixelDiv);
    }
  }
}
// Função para criar pixel
function createPixel() {
  const pixelDiv = document.createElement('div');
  pixelDiv.classList.add('pixel');
  return pixelDiv;
}
 // Função para selecionar board e criar um evento
function pixelBoardSelection() {
  const pixelsBoard = document.querySelector('#pixel-board');
  pixelsBoard.addEventListener('click', handlePixelsEvent);
}

function handlePixelsEvent(event) {
  const pixelSelect = event.target;
  pixelSelect.style.backgroundColor = selectedColor;
}

// BUTTON

function addButtonEvent() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', handleButtonEvent);
}

function handleButtonEvent() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
