
const colors = ['black', 'green', 'blue', 'orange'];
const colorPallet = document.getElementsByClassName('color-palette')[0];
const pixelBoard = document.querySelector('.pixel-board');

// build color pallet based in quantity colors specified in array colors;
function buildPallet(color) {
  let buildedDiv;
  for (let index = 0; index < color.length; index += 1) {
    buildedDiv = document.createElement('div');
    buildedDiv.className = 'color';
    buildedDiv.style.backgroundColor = color[index];
    colorPallet.appendChild(buildedDiv);

    if (color[index] === 'black') {
      buildedDiv.classList.add('selected');
    }
  }
};
buildPallet(colors);

// build pixel board
const n = 5;
function buildPixelBoard(n) {
  for (let index1 = 1; index1 <= n; index1 += 1) {
    let buildPix;
    for (let index2 = 1; index2 <= n; index2 += 1) {
      buildPix = document.createElement('div');
      buildPix.className = 'pixel';
      buildPix.style.backgroundColor = 'white';
      pixelBoard.appendChild(buildPix);
    }
  }
};
buildPixelBoard(n);

// builded clicks behavior in pixel boxes or in color boxes
window.onclick = function() {
  const selectedColor = document.querySelector('.selected');
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    selectedColor.classList.remove('selected');
  };

  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  };
};

// build a button to clear pixel board
const toClearBoard = document.querySelector('.clear-board');
const pixelsInBoard = document.querySelectorAll('.pixel');

toClearBoard.addEventListener('click', clearAllBoard);

function clearAllBoard() {
  for (let indexClear = 0; indexClear < pixelsInBoard.length; indexClear += 1) {
    pixelsInBoard[indexClear].style.backgroundColor = 'white';
  }
};
