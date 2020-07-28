window.onload = function () {
  const pixelRows = document.getElementsByClassName('pixel-row');

  function fillBoardColumn(divPixelBoard) {
    for (let column = 0; column < pixelRows.length; column += 1) {
      const pixelColumn = document.createElement('div');
      pixelColumn.className = 'pixel';
      pixelColumn.style.backgroundColor = 'rgb(255, 255, 255)';
      pixelRows[column].appendChild(pixelColumn);
    }
  }

  function fillBoardRows(pixelRows) {
    for (let row = 0; row < pixelRows.length; row += 1) {
      fillBoardColumn();
    }
  }

  let coolors = ['black', 'red', 'blue', 'green'];

  function createPalleteDiv(coolors) {
    let divPallete = document.getElementById('color-palette');

    for (let index in coolors) {
      let divColor = createPalleteColor(coolors[index]);
      divPallete.appendChild(divColor);
    }
  }

  function createPalleteColor(color) {
    let divColor = document.createElement('div');
    divColor.style.backgroundColor = color;
    divColor.className = 'color';
    return divColor;
  }

  createPalleteDiv(coolors);
  fillBoardRows(pixelRows);
};
