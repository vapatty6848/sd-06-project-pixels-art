window.onload = function() {
  addColorPallet(['black', 'red', 'blue', 'green']);
  createBoardRows();
  //createPixelBoard();
}

// COLOR PALLET AREA
// Função para adicionar os itens ao pallet
function addColorPallet(colors) {
  let colorPalletWrap = document.querySelector('#color-palette');
  
  for (let index in colors) {
    let palletItemElement = createPalletItem(colors[index]);
    colorPalletWrap.appendChild(palletItemElement);
  }
}

// Função p/ criar, estilizar e adicionar escutador no elemento HTML (div).
function createPalletItem(color) {
  let palletItemElement = document.createElement('div');
  palletItemElement.style.backgroundColor= color;
  palletItemElement.classList.add('color');
  palletItemElement.addEventListener('click', handlePalletItemEvent);

  if (color === 'black') {
    palletItemElement.classList.add('selected');
  }
  return palletItemElement;
}

// função para tratar do evento
function handlePalletItemEvent(event) {
  let lastSelectedDiv = document.querySelector('.selected')
  let nowSelectedDiv = event.target;
  lastSelectedDiv.classList.remove('selected');
  nowSelectedDiv.classList.add('selected')
}

// PIXEL BOARD
// Função adicionar rows
function createBoardRows() {
  let PixelBoardContainer = document.querySelector('#pixel-board');
  let rowDiv;

    for (let index = 1; index <= 5; index += 1) {
      rowDiv = document.createElement('section');
      rowDiv.classList.add('board-row' + index);
      PixelBoardContainer.appendChild(rowDiv);
      boardRowContainer = document.querySelector('.board-row' + [index]);

      for (j = 1; j <= 5; j += 1) {
        let pixelDiv = createPixel();
        boardRowContainer.appendChild(pixelDiv);
      }
    }
}
// Função para criar pixel
function createPixel() {
  let pixelDiv = document.createElement('div');
  pixelDiv.classList.add('pixel');
  return pixelDiv
}

// Função para criar a rowDiv
//function createRowDiv() {
  //let rowDiv = document.createElement('div');
  //rowDiv.classList.add('board-row');
  //return rowDiv
//}

// Função adicionar pixels
//function createPixelBoard() {
  //let boardRowContainer = document.querySelectorAll('.board-row');

  //for (index = 1; index <= 5; index += 1) {
    //let pixelDiv[index] = createPixel();
    //boardRowContainer.appendChild(pixelDiv);
  //}
 
//}

