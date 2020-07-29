const pixelRows = document.getElementsByClassName('pixel-row');
const divPallete = document.getElementById('color-palette');
const palleteColors = ['black', 'red', 'blue', 'green'];
let selectedColor = 'black';

function fillBoardColumn() {
  for (let column = 0; column < pixelRows.length; column += 1) {
    const pixelColumn = document.createElement('div');
    pixelColumn.className = 'pixel';
    pixelColumn.style.backgroundColor = 'rgb(255, 255, 255)';
    pixelRows[column].appendChild(pixelColumn);
  }
}

function fillBoardRows() {
  for (let row = 0; row < pixelRows.length; row += 1) {
    fillBoardColumn();
  }
}

function createPalleteColor(color) {
  const divColor = document.createElement('div');
  divColor.style.backgroundColor = color;
  divColor.className = 'color';
  if (color === 'black') {
    divColor.classList.add('selected');
  }
  return divColor;
}

function createPalleteDiv(colors) {
  for (let index = 0; index < colors.length; index += 1) {
    const divColor = createPalleteColor(colors[index]);
    divPallete.appendChild(divColor);
  }
}

function selectColorItem(event) {
  const oldSelectedColor = document.querySelector('.selected');
  oldSelectedColor.classList.remove('selected');
  selectedColor = event.target.style.backgroundColor;
  event.target.classList.add('selected');
}

divPallete.addEventListener('click', selectColorItem);

function paintingTheBoard(event) {
  event.target.style.backgroundColor = selectedColor;
}

function cleanBoardColumn(row) {
  for (let child = pixelRows[row].firstElementChild; child != null; child = child.nextElementSibling) {
    child.style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

document.getElementById('pixel-board').addEventListener('click', paintingTheBoard);

function cleanBoardRow() {
  for (let row = 0; row < pixelRows.length; row += 1) {
    cleanBoardColumn(row);
  }
}

createPalleteDiv(palleteColors);
fillBoardRows();
