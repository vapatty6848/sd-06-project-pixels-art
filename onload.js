window.onload = function() {
  colorStoraged = 'black';
  initPalette();
  CreateBoard();
  const vqvButton = document.querySelector('#generate-board');
  VqvEvents(vqvButton);
}
