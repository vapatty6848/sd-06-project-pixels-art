window.onload = function () {  
  let paletteItem = document.querySelectorAll('.color');

  for (let index = 0; index < paletteItem.length; index += 1) {
    if (index == 0) {
      paletteItem[index].style.backgroundColor = '#000';
      paletteItem[index].classList.add('selected');
    } else {
      paletteItem[index].style.backgroundColor = randomColor();
    }
    paletteItem[index].addEventListener("click", changeSelected);
  }
}

let table = document.getElementById("pixel-board");
let height = parseInt(5);
let width = parseInt(5);

document.getElementById('clear-board').addEventListener('click', function() {
  let objPixels = document.querySelectorAll('.pixel'); // [0]
  for (var pixel in objPixels) {
    objPixels[pixel].style.backgroundColor = '#FFF';
  }
});

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createPixelBoard() {
  for (let countLines = 0; countLines < height; countLines += 1) {
    const row = table.insertRow(countLines);
    for (let countCell = 0; countCell < width; countCell += 1) {
        const cell = row.insertCell(countCell);
        cell.className = 'pixel';
        cell.addEventListener("click", fillPixel);
    }
  }
}

function fillPixel() {
  this.setAttribute("style", 'background-color: #000');
}

function changeSelected() {
  let oldSelected = document.querySelector('.selected');
  let newSelected = event.target;

  oldSelected.classList.remove('selected');
  newSelected.classList.add('selected');
}

createPixelBoard();
