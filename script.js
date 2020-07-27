window.onload = function () {
  const pixelLines = document.getElementsByClassName('pixel-line');

  function fillBoardColumn(lines, line) {
    for (let column = 0; column < lines.length; column += 1) {
      const pixelColumn = document.createElement('div');
      pixelColumn.className = 'pixel';
      pixelLines[line].appendChild(pixelColumn);
    }
  }

  function fillBoardLines(lines) {
    for (let line = 0; line < lines.length; line += 1) {
      fillBoardColumn(lines, line);
    }
  }

  fillBoardLines(pixelLines);
};
