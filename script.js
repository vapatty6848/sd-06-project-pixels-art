let selectColor = 'black';

window.onload = function() {
let selectColor = 'black';
let colors = ['black', 'red', 'blue', 'green'];
createColorPallet(colors);

  let colors = ['black', 'red', 'blue', 'green'];
  createColorPallet(colors);

  let pixelBoardDiv = document.querySelector('#pixel-board');
  pixelBoardDiv.addEventListener('click', handlePixelClick)

}

function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;
  let oldSelectedDiv = document.querySelector('.selected');
  let currentSelectedDiv = event.target;

    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');

    selectColor = currentSelectedDiv.style.backgroundColor;
    console.log(selectColor);
  selectColor = currentSelectedDiv.style.backgroundColor;
  console.log(selectColor);
}

function createPalletItem(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.background = color;
    palletItemDiv.className = 'color';
    palletItemDiv.addEventListener('click', handlePalletItemEvent);

    if (color === 'black') {
        palletItemDiv.classList.add('selected');
    }
    return palletItemDiv;
  let palletItemDiv = document.createElement('div');
  palletItemDiv.style.background = color;
  palletItemDiv.className = 'color';
  palletItemDiv.addEventListener('click', handlePalletItemEvent);

  if (color === 'black') {
    palletItemDiv.classList.add('selected');
  }
  return palletItemDiv;
}

function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById('color-palette');
  let colorPalletContainer = document.getElementById('color-palette');

    for (let index in colors) {
        let palletItemDiv = createPalletItem(colors[index]);
        colorPalletContainer.appendChild(palletItemDiv);
    }
  for (let index in colors) {
    let palletItemDiv = createPalletItem(colors[index]);
    colorPalletContainer.appendChild(palletItemDiv);
  }
}

function handlePixelClick(event) {
  let selectPixelDiv = event.target;
  selectPixelDiv.style.backgroundColor = selectColor;
}

} 

function clearBoard() {
  let btn = document.querySelector('#clear-board');
  let pixel = document.getElementsByClassName('pixel');
  btn.addEventListener('click', function() {
    for (let i = 0; i < pixel.length; i+= 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  })
}