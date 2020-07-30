
const colors = ['black', 'green', 'blue', 'orange'];
const colorPallet = document.getElementsByClassName('color-palette')[0];
const pixelBoard = document.querySelector('.pixel-board');
let selectedColor;

window.onload = function() {
  // build color pallet based in quantity colors specified in array colors;
  function buildPallet(color) {
    let buildedDiv;
    for (let index = 0; index < color.length; index += 1) {
      buildedDiv = document.createElement('div');
      buildedDiv.className = 'color';
      buildedDiv.style.backgroundColor = color[index];
      colorPallet.appendChild(buildedDiv);

      if(color[index] === 'black') {
        buildedDiv.classList.add('selected');
      }
    }
  }
  buildPallet(colors);




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
}

window.onclick = function() {
  let selectedColor = document.querySelector('.selected');
  if(event.target.className === 'color') {
    newSelectedColor = event.target.classList.add('selected');
    selectedColor.classList.remove('selected')
  }

  if(event.target.className === 'pixel') {
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}