
// Functionalities
const functionalities = {
  putColor: function putColor() {
    const activeColorOfPalette = document.querySelector('.color.selected'); // Selected color
    event.target.style.background = activeColorOfPalette.style.backgroundColor;
  },
  changeClass: function changeClass() {
    const colorsOnPalette = document.querySelectorAll('li');
    for (let i = 0; i < colorsOnPalette.length; i += 1) {
      colorsOnPalette[i].className = 'color';  // Set default class to all colors icon - not selected
    }
    // Set selected class just to clicked color icon
    // IF to avoid wrong class concatenation clicking the same color 2 or more times in a row
    if (event.target.className.includes('selected')) {
      event.target.className = event.target.className;
    } else {
      event.target.className = event.target.className.concat(' selected');
    }
  },
  clearPixels: function clearPixels() {
    const allPixels = document.querySelectorAll('td');
    for (let i = 0; i < allPixels.length; i += 1) {
      allPixels[i].style.background = 'white';
    }
  },
  generateColorPalette: function generateColorPalette() {
    const redChannel = Math.random() * 255;
    const greenChannel = Math.random() * 255;
    const blueChannel = Math.random() * 255;
    const color = ('rgb('.concat([redChannel, greenChannel, blueChannel].toString())).concat(')');
    return color;
  },
  buildBoard: function buildBoard(numberOfRows, numberOfColumns) {
    for (let row = 0; row < numberOfRows; row += 1) { // Walkind on rows
      const tableRow = document.createElement('tr');
      tableRow.className = 'table-row';
      const pixelsBoardTable = document.querySelector('#pixel-board');
      pixelsBoardTable.appendChild(tableRow);
      for (let column = 0; column < numberOfColumns; column += 1) { // Walking on columns
        const tablePixel = document.createElement('td');
        tablePixel.className = 'pixel';
        tableRow.appendChild(tablePixel);
        tablePixel.addEventListener('click', functionalities.putColor); // Event to put color on pixel
      }
    }
  },
  buildColorsPalette: function buildColorsPalette(numberOfColors) {
    for (let i = 0; i < numberOfColors; i += 1) {
      const colorItem = document.createElement('li');
      if (i === 0) {
        colorItem.className = 'color selected'; // Default color black
        colorItem.style.background = 'black';
      } else {
        colorItem.className = 'color';
        colorItem.style.background = functionalities.generateColorPalette(); // Random color
      }
      const colorPalette = document.querySelector('#color-palette');
      colorPalette.appendChild(colorItem);
      colorItem.addEventListener('click', functionalities.changeClass); // Event to change class
    }
  },
  rebuildBoard: function rebuildBoard() {
    const userInputDimension = document.querySelector('#board-size').value;
    if (userInputDimension === '') {
      alert('Board inválido!');
    } else {
      let numberOfRows = 5;
      let numberOfColumns = 5;
      if (userInputDimension > 50) {
        numberOfRows = 50;
        numberOfColumns = 50;
      } else if (userInputDimension >= 5 && userInputDimension <= 50) {
        numberOfRows = userInputDimension;
        numberOfColumns = userInputDimension;
      }
      functionalities.deleteBoard(); // Delete previous pixels board
      functionalities.buildBoard(numberOfRows, numberOfColumns); // Create new pixels board
    }
  },
  deleteBoard: function deleteBoard() {
    const previousTableRows = document.querySelectorAll('tr');
    for (let i = 0; i < previousTableRows.length; i += 1) {
      const pixelsBoardTable = document.querySelector('#pixel-board');
      pixelsBoardTable.removeChild(previousTableRows[i]);
    }
  },
};

window.onload = function () {
  // Elements
  const clearButton = document.querySelector('#clear-board');
  const buildBoardButton = document.querySelector('#generate-board');
  const numberOfColumns = 5;
  const numberOfRows = 5;
  const numberOfColors = 4;

  // Building pixels board
  functionalities.buildBoard(numberOfRows, numberOfColumns);

  // Building colors palette
  functionalities.buildColorsPalette(numberOfColors);

  // Clear all pixels
  clearButton.addEventListener('click', functionalities.clearPixels);

  // Rebuild the board as user set
  buildBoardButton.addEventListener('click', functionalities.rebuildBoard);
};
