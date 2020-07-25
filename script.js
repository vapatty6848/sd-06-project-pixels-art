window.onload = function () {
  currentColor = "black";
  let itemSel = document.querySelector('#black');
  itemSel.className += ' selected'
}

let colorPalette = document.querySelector('#color-palette');

colorPalette.addEventListener('click', function(event) {
  let selectedColor = event.target.id;
  let selectedDiv = document.getElementById(selectedColor);
  let previousDiv = document.getElementById(currentColor);
  selectedDiv.className = 'color selected'
  previousDiv.className = 'color'
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