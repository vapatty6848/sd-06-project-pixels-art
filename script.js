
window.onload = function () {
  // Elements
  let colorPalette = document.querySelector('#color-palette');
  let pixelsBoardTable = document.querySelector('#pixel-board');
  let clearButton = document.querySelector('#clear-board');
  let buildBoardButton = document.querySelector('#generate-board');
  let numberOfColumns = 5;
  let numberOfRows = 5;
  let numberOfColors = 4;

  // Functionalities
  let functionalities = {
    putColor: function () { 
      let activeColorOfPalette = document.querySelector('.color.selected'); // Selected color
      event.target.style.background = activeColorOfPalette.style.backgroundColor;
    },
    changeClass: function () {
      let colorsOnPalette = document.querySelectorAll('li');
      for (let i = 0; i < colorsOnPalette.length; i += 1) {
        colorsOnPalette[i].className = 'color';  // Set default class to all colors icon - not selected
      }
      // Set selected class just to clicked color icon
      // IF to avoid wrong class concatenation in case of click the same color 2 or more times in a row
      if (event.target.className.includes('selected')) { 
        event.target.className = event.target.className;
      } else {
        event.target.className = event.target.className.concat(' selected');
      }
    },
    clearPixels: function () {
      allPixels = document.querySelectorAll('td');
      for (let i = 0; i < allPixels.length; i += 1) {
        allPixels[i].style.background = 'white';
      }
    },
    generateColorPalette: function () {
      let redChannel = Math.random() * 255;
      let greenChannel = Math.random() * 255;  
      let blueChannel = Math.random() * 255;
      let color = 'rgb(' + [redChannel , greenChannel , blueChannel].toString() + ')';
      return color;
    },
    buildBoard: function () {
      for (let row = 0; row < numberOfRows; row += 1) { // Walkind on rows
        let tableRow = document.createElement('tr');
        tableRow.className = 'table-row';
        pixelsBoardTable.appendChild(tableRow);
        for (let column  = 0; column < numberOfColumns; column += 1) { // Walking on columns
          let tablePixel = document.createElement('td');
          tablePixel.className = 'pixel';
          tableRow.appendChild(tablePixel);
          tablePixel.addEventListener('click', functionalities.putColor); // Event to put color on pixel
        }
      }
    },
    buildColorsPalette: function () {
      for (let i = 0; i < numberOfColors; i += 1) {
        let colorItem = document.createElement('li');
        if (i === 0) {
            colorItem.className = 'color selected'; // Default color black
            colorItem.style.background = 'black';
        } else {
            colorItem.className = 'color';
            colorItem.style.background = functionalities.generateColorPalette(); // Random color
        }
        colorPalette.appendChild(colorItem);
        colorItem.addEventListener('click', functionalities.changeClass); // Event to change class
      }
    },
    rebuildBoard: function () {
      let userInputDimension = document.querySelector('#board-size').value;
      numberOfRows = (userInputDimension >= 5 && userInputDimension <= 50) ? userInputDimension : 5;
      numberOfColumns = numberOfRows;
      let previousTableRows = document.querySelectorAll('tr');
      for (let i = 0; i < previousTableRows.length; i += 1) {
        pixelsBoardTable.removeChild(previousTableRows[i]);
      }
      functionalities.buildBoard();
    },
  }

  // Building pixels board
  functionalities.buildBoard();

  // Building colors palette
  functionalities.buildColorsPalette();

  // Clear all pixels
  clearButton.addEventListener('click', functionalities.clearPixels);

  // Rebuild the board as user set
  buildBoardButton.addEventListener('click', functionalities.rebuildBoard);
}
