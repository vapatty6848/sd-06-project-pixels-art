window.onload = function () {
  currentColor = "black";
  let itemSel = document.querySelector('#black');
  itemSel.className += ' selected'
  generatePixelBoard(5);
}
let pixelBoard = document.querySelector('#pixel-board');

let colorPalette = document.querySelector('#color-palette');

const genetateButton = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');

function generatePixelBoard (size) {
  const totalSize = size * size;
  const borderWidth = (size * 40) + 40;
  pixelBoard.style.width = `${borderWidth}px`
  for (let i = 0 ; i < totalSize ; i += 1){
    const divPixel = document.createElement('div');
    divPixel.classList.add('pixel');
    pixelBoard.appendChild(divPixel);
  }
}
genetateButton.addEventListener('click', function(){
  
  while (pixelBoard.firstChild){
    pixelBoard.removeChild(pixelBoard.lastChild);
  }

  let numBoard = boardSize.value;
  if (numBoard < 5){
    numBoard = 5;
  }else if (numBoard > 50){
    numBoard = 50;
  }

  generatePixelBoard(numBoard);
});

colorPalette.addEventListener('click', function(event) {
  let selectedColor = event.target.id;
  let selectedDiv = document.getElementById(selectedColor);
  let previousDiv = document.getElementById(currentColor);
  previousDiv.className = 'color'
  selectedDiv.className = 'color selected'
  currentColor = selectedColor;
});


pixelBoard.addEventListener('click', function(event){
  let selectedPixel = event.target;
  selectedPixel.style.backgroundColor = currentColor;
  //console.log(selectedPixel);

});

let clearBoard = document.querySelector('#clear-board');

clearBoard.addEventListener('click', function(event){
  let pixelArray = document.querySelectorAll('.pixel');
  for (let i = 0 ; i < pixelArray.length ; i += 1){
    pixelArray[i].style.backgroundColor = "white";
  }

});