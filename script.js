window.onload = function () {
  let pixelLines = document.querySelectorAll('.pixel-line');
  console.log(pixelLines);
  fillBoardLines(pixelLines);

  function fillBoardLines (lines) {
    for (let line in lines) {
      fillBoardColumn(lines, line);
    }
  }

  function fillBoardColumn (lines, line) {
    for (let column = 0; column < lines.length; column += 1) {
      let pixelColumn = document.createElement('div');
      pixelColumn.className = 'pixel';
      pixelLines[line].appendChild(pixelColumn);
    }
  }
}