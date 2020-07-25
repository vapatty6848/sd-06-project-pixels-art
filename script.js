window.onload = function () {
  currentColor = "black";
  let itemSel = document.querySelector('#black');
  itemSel.className += ' selected'
}
// Manipula a paleta de cores
let colorPalette = document.querySelector('#color-palette');

colorPalette.addEventListener('click', function(event) {
  let selectedColor = event.target.id;
  let selectedDiv = document.getElementById(selectedColor);
  let previousDiv = document.getElementById(currentColor);
  previousDiv.className = 'color'
  selectedDiv.className = 'color selected'
  currentColor = selectedColor;
  //console.log(previousDiv);
  //console.log(selectedDiv);
  //console.log(selectedColor);
});

let pixelBoard = document.querySelector('#pixel-board');

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