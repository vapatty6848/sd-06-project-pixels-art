window.onload = function() {
  colorStoraged = 'black';
  initPalette();
  CreateBoard();
  let vqvButton = document.querySelector('#generate-board');
  VqvEvents(vqvButton);
}
