const colors = document.querySelectorAll('.color');
const pixelTable = document.querySelector('#pixel-board');
const clearBtn = document.querySelector('#clear-board');
const boardSize = document.querySelector('#board-size');
const generateBtn = document.querySelector('#generate-board');
const pixel = document.querySelectorAll('.pixel');

function createPixelBoard() {
  if (boardSize.value < 5) {
    boardSize.value = 5;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  for (let i = 0; i < boardSize.value; i += 1) {
    const tableRow = document.createElement('div');
    tableRow.className = 'tr';
    pixelTable.appendChild(tableRow);
    for (let j = 0; j < boardSize.value; j += 1) {
      const tableCollum = document.createElement('div');
      tableCollum.className = 'td pixel';
      tableRow.appendChild(tableCollum);
    }
  }
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    for (let j = 0; j < colors.length; j += 1) {
      if (colors[j].classList.contains('selected') === true) {
        colors[j].classList.remove('selected');
      }
    }
    colors[i].classList.add('selected');
  });
}

pixelTable.addEventListener('click', function (event) {
  let color;
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected') === true) {
      color = colors[i].style.backgroundColor;
    }
  }
  event.target.style.backgroundColor = color;
});

clearBtn.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

generateBtn.addEventListener('click', function () {
  if (boardSize.value === '') {
    alert('Board inválido!');
  }
  if (pixel[0] !== null) {
    pixelTable.innerHTML = '';
  }
  createPixelBoard();
});
