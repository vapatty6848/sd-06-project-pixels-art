
let colors = ['black', 'green', 'blue', 'orange', 'yellow'];
let colorPalletItem = document.getElementsByClassName('color-palette')[0];
let pixelBoard = document.querySelector('.pixel-board');

window.onload = function() {

  // build color pallet based in quantity colors specified in array colors;
  function buildPallet(colors) {

    for (let index = 0; index < colors.length; index += 1) {
      let buildDiv = document.createElement('div');
      buildDiv.className = 'color';
      buildDiv.style.backgroundColor = colors[index];
      colorPalletItem.appendChild(buildDiv);
    }
  }
  buildPallet(colors);

}

// build pixel board
let n = 5

function buildPixelBoard(n) {
  for (let index1 = 1; index1 <= n; index1 += 1) {
    let buildPix;

    for (index2 = 1; index2 <= n; index2 += 1) {
      buildPix = document.createElement('div');
      buildPix.className = 'pixel';
      buildPix.style.backgroundColor = 'white';
      pixelBoard.appendChild(buildPix);
    }
  }
}

buildPixelBoard(n);