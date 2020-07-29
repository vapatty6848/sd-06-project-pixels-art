window.onload = function () {
  let selectedColor = 'black';
// Adding color
  const black = document.getElementsByClassName('color')[0];
  black.style.backgroundColor = 'black';
  const red = document.getElementsByClassName('color')[1];
  red.style.backgroundColor = 'red';
  const blue = document.getElementsByClassName('color')[2];
  blue.style.backgroundColor = 'blue';
  const green = document.getElementsByClassName('color')[3];
  green.style.backgroundColor = 'green';
// Function to fire the event and change the selected class to the one that is clicked
  function pixelClicked() {
    const oldPixelSelected = document.querySelector('.selected');
    const currentPixelSelected = event.target;
    oldPixelSelected.classList.remove('selected');
    currentPixelSelected.classList.add('selected');
    selectedColor = currentPixelSelected.style.backgroundColor;
  }
// Clicking pixel
  const clickPixel = document.querySelector('#color-palette');
  clickPixel.addEventListener('click', pixelClicked);
// Coloring the pixels
  function colorPixel(event) {
    const pixelSelected = event.target;
    pixelSelected.style.backgroundColor = selectedColor;
  }
// Pixels coloring
  const pixelBoardDiv = document.getElementById('pixel-board');
  pixelBoardDiv.addEventListener('click', colorPixel);
// Button reset color
  const buttonReset = document.querySelector('#clear-board');
  buttonReset.addEventListener('click', function () {
    const colorPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < colorPixels.length; index += 1) {
      colorPixels[index].style.backgroundColor = 'white';
    }
  });
};
