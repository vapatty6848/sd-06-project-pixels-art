
window.onload = function() {
  let vqvButton = document.querySelector('#generate-board');
  CreateBoard();

  let classColors = document.querySelectorAll('.color');

  initPalleteColor(classColors);
  PaletteEvents(classColors);
  VqvEvents(vqvButton);
}

