
window.onload = function() {
  initPalette();
  CreateBoard();
  let vqvButton = document.querySelector('#generate-board');
  VqvEvents(vqvButton);
}

