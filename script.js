window.onload = function () {
  let selectedColor = 'black';
  let currentColorAmount = 4;

// Adding color
  const black = document.getElementsByClassName('color')[0];
  black.style.backgroundColor = 'black';
  const red = document.getElementsByClassName('color')[1];
  red.style.backgroundColor = 'red';
  const blue = document.getElementsByClassName('color')[2];
  blue.style.backgroundColor = 'indigo';
  const green = document.getElementsByClassName('color')[3];
  green.style.backgroundColor = 'pink';

  function generateColorHexa() {
   const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const colorRand = `rgb(${red}, ${green}, ${blue})`;
    return colorRand;
}


// Function to fire the event and change the selected class to the one that is clicked
  function pixelClicked() {
    const oldPixelSelected = document.querySelector('.selected');
    const currentPixelSelected = event.target;
    oldPixelSelected.classList.remove('selected');
    currentPixelSelected.classList.add('selected');
    selectedColor = currentPixelSelected.style.backgroundColor;
  }

// Clicking pixel
  const clickPixel = document.querySelector('#color-palette');
  clickPixel.addEventListener('click', pixelClicked);

  // Coloring the selected pixels event
  function colorPixel(event) {
    const pixelSelected = event.target;
    pixelSelected.style.backgroundColor = selectedColor;
  }

  const pixelBoardDiv = document.getElementById('pixel-board');
  pixelBoardDiv.addEventListener('click', colorPixel);

// Button reset color
  const buttonReset = document.querySelector('#clear-board');
  buttonReset.addEventListener('click', function () {
    const colorPixels = document.querySelectorAll('.pixel');
    colorPixels.forEach((pixel) => {
      pixel.style.backgroundColor = 'white';
   })
  })

  const newColorRandom = document.getElementById('more-colors');
  newColorRandom.addEventListener('click', function () {
    const randomColor = document.createElement('div')
    randomColor.classList.add('color');
    randomColor.classList.add('random');

    const hexaColorNumber = generateColorHexa();

    randomColor.style.backgroundColor = hexaColorNumber;
    const colorPalette = document.getElementById('color-palette');

    if (currentColorAmount < 10) {
      colorPalette.appendChild(randomColor);
      currentColorAmount = currentColorAmount + 1
    } else alert ('Limite de cores alcançado')
   })

  function tableColoring() {
  const boardPixels = document.querySelectorAll('td');

  boardPixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = selectedColor;
    });
  });
  }

  const createForm = document.querySelector('form');

  // verify size  but limit alredy html
  function handleInputSize(userInput) {
  if (userInput.value > 50) {
    userInput.value = 50;
    return 50;
  } else if (userInput.value < 5 && userInput.value > 0) {
    userInput.value = 5;
    return 5;
  }

  const value = userInput.value;
  return value;
}

  // search size input
createForm.onsubmit = (event) => {
  event.preventDefault();
  const userInput = document.getElementById('board-size');

  const inputValue = handleInputSize(userInput);

  const tableElm = document.querySelector('.board');
  const boardContainer = document.getElementById('pixel-board');

  if (!inputValue) {
    alert('Board inválido!');
  } else {
    createTable(tableElm, boardContainer, inputValue);
  }
}

  // create tr e td new size
function createTable(tableElm, boardContainer, userInput) {
  tableElm.remove();
  const newTable = document.createElement('table');
  newTable.classList.add('board');

  for (let i = 1; i <= userInput; i += 1) {
    const newTableRow = document.createElement('tr');
    for (let j = 1; j <=5; j += 1) {
      const newTableCell = document.createElement('td');
      newTableCell.classList.add('pixel');
      newTableRow.appendChild(newTableCell);
    }
    newTable.appendChild(newTableRow);
  }
  boardContainer.appendChild(newTable);
  tableColoring();
}



};
