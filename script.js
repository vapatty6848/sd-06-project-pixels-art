
window.onload = function () {
  // Elements
  let colorPalette = document.querySelector('#color-palette');
  let pixelsBoardTable = document.querySelector('#pixels-board');
  let availableColors = ['black', 'blue', 'red' , 'green'];
  let clearButton = document.querySelector('button');
  let numberOfColumns = 5;
  let numberOfRows = 5;

  // Functionalities
  let functionalities = {
    putColor: function () { 
      let activeColorOfPalette = document.querySelector('.selected'); // Selected color
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
        event.target.className = event.target.className.concat(' selected'); 
      } else {
        event.target.className = event.target.className;
      }
    },
    clearPixels: function () {
      allPixels = document.querySelectorAll('td');
      for (let i = 0; i < allPixels.length; i += 1) {
        allPixels[i].style.background = 'white';
      }
    },
  }

  // Building colors palette
  for (let i = 0; i < 4; i += 1) {
    let colorItem = document.createElement('li');
    colorItem.className = (i === 0) ? 'color selected' : 'color'; // Default color 
    colorItem.style.background = availableColors[i];
    colorPalette.appendChild(colorItem);
    colorItem.addEventListener('click', functionalities.changeClass); // Event to change class
  }

  // Building pixels board
  for (let row = 0; row < numberOfRows; row += 1) {
    let tableRow = document.createElement('tr');
    tableRow.className = 'table-row';
    pixelsBoardTable.appendChild(tableRow);
    for (let column  = 0; column < numberOfColumns; column += 1) {
    let tablePixel = document.createElement('td');
    tablePixel.className = 'pixel';
    tableRow.appendChild(tablePixel);
    tablePixel.addEventListener('click', functionalities.putColor); // Event to put color on pixel
    }
  }

  // Clear all pixels
  clearButton.addEventListener('click', functionalities.clearPixels);
}
