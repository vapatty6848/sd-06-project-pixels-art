const colorBlock1 = '#000';
const colorBlock2 = randomColor();
const colorBlock3 = randomColor();
const colorBlock4 = randomColor();

document.getElementById('colorOption1').style.backgroundColor = colorBlock1;
document.getElementById('colorOption2').style.backgroundColor = colorBlock2;
document.getElementById('colorOption3').style.backgroundColor = colorBlock3;
document.getElementById('colorOption4').style.backgroundColor = colorBlock4;

let table = document.getElementById("pixel-board");
let height = parseInt(5);
let width = parseInt(5);

document.getElementById('clearPixelBoard').addEventListener('click', function() {
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

createPixelBoard();
