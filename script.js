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

  createPixelBoard();
}

let table = document.getElementById("pixel-board");

document.querySelector('#generate-board').addEventListener('click', createPixelBoard);

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
  let boardSize = document.querySelector('#board-size').value;
  
  if (boardSize.length == 0) {
    alert('Board inválido!');
    return false;
  }
  
  deletePixel();

  for (let countLines = 0; countLines < boardSize; countLines += 1) {
    const row = table.insertRow(countLines);
    for (let countCell = 0; countCell < boardSize; countCell += 1) {
        const cell = row.insertCell(countCell);
        cell.className = 'pixel';
        cell.addEventListener("click", fillPixel);
    }
  }
}

function fillPixel() {
  let colorSelectedItem = document.querySelector('.selected').style.backgroundColor;
  this.setAttribute("style", 'background-color: ' + colorSelectedItem);
}

function changeSelected() {
  let oldSelected = document.querySelector('.selected');
  let newSelected = event.target;

  oldSelected.classList.remove('selected');
  newSelected.classList.add('selected');
}

function deletePixel(){
  while (table.firstChild){
    table.removeChild(table.firstChild);
  }
}

