
window.onload = function() {
  initPalette();
  CreateBoard();


  let vqvButton = document.querySelector('#generate-board');
  console.log(vqvButton.value)
  VqvEvents(vqvButton);


}

