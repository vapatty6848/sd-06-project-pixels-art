// Constants
const colors = ['black', 'green', 'blue', 'orange'];

// build color pallet based in quantity colors specified in array colors;
function buildPallet(color) {
  let buildedDiv;
  let colorPallet = document.getElementsByClassName('color-palette')[0];

  for (let index = 0; index < color.length; index += 1) {
    buildedDiv = document.createElement('div');
    buildedDiv.className = 'color';
    buildedDiv.style.backgroundColor = color[index];
    colorPallet.appendChild(buildedDiv);

    if (color[index] === 'black') {
      buildedDiv.classList.add('selected');
    }
  }
}
buildPallet(colors);

// build pixel board
const linesAndColumns = 5;
function buildPixelBoard(n) {
  let pixelBoard = document.querySelector('.pixel-board');

  for (let index1 = 1; index1 <= n; index1 += 1) {
    let buildPix;
    for (let index2 = 1; index2 <= n; index2 += 1) {
      buildPix = document.createElement('div');
      buildPix.className = 'pixel';
      buildPix.style.backgroundColor = 'white';
      pixelBoard.appendChild(buildPix);
    }
  }
}
buildPixelBoard(linesAndColumns);

// builded clicks behavior in pixel boxes or in color boxes
window.onclick = function () {
  const selectedColor = document.querySelector('.selected');
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    selectedColor.classList.remove('selected');
  }

  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
};

// build a button to clear pixel board
const toClearBoard = document.querySelector('.clear-board');

function clearAllBoard() {
  let pixelsInBoard = document.querySelectorAll('.pixel');

  for (let indexClear = 0; indexClear < pixelsInBoard.length; indexClear += 1) {
    pixelsInBoard[indexClear].style.backgroundColor = 'white';
  }
}

// add click event to the ClearBoard button
toClearBoard.addEventListener('click', clearAllBoard);
