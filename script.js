window.onload = () => {
  enableBTN();
  randomizeColors();
  paintingEnabler();
  tableColoringEnabler();
}

// clearing board

function enableBTN() {
  const btnClear = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');

  btnClear.onclick = () => {
    pixels.forEach((pixel) => {
      pixel.style.backgroundColor = 'white';
    });
  }
}

// palette colors

function randomizeColors() {
  const randomColors = document.querySelectorAll('.random');

  randomColors.forEach((color) => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  })
}

// color selecting

let selectedColor = 'black';

function paintingEnabler() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  const selectedColorElement = document.querySelector('.selected-color');

  colors.forEach((color) => {
    color.addEventListener('click', (event) => {
      const previousSelectedColor = document.querySelector('.selected');
      previousSelectedColor.classList.remove('selected');
      event.target.classList.add('selected');
      selectedColor = event.target.style.backgroundColor;
      selectedColorElement.style.backgroundColor = selectedColor;
    });
  });
}

// color changing

function tableColoringEnabler() {
  const boardPixels = document.querySelectorAll('td');

  boardPixels.forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      pixel.style.backgroundColor = selectedColor;
    });
  });
}

// table by user-input

let creationForm = document.querySelector('form');

creationForm.onsubmit = (event) => {
  event.preventDefault();
  const userInput = document.getElementById('board-size').value;
  const tableElm = document.querySelector('.board');
  const boardContainer = document.getElementById('pixel-board');

  if (!userInput) {
    alert("Board inválido");
  } else {
    tableElm.remove();
    const newTable = document.createElement('table');
    newTable.classList.add('board');

    for (let i = 1; i <= userInput; i += 1) {
      const newTableRow = document.createElement('tr');
      for (let j = 1; j <= userInput; j += 1) {
        const newTableCell = document.createElement('td');
        newTableCell.classList.add('pixel');
        newTableRow.appendChild(newTableCell);
      }
      newTable.appendChild(newTableRow);
    }
    boardContainer.appendChild(newTable);
    tableColoringEnabler();
  }
}
