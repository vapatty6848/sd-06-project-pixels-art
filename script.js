let selectedColor = 'rgb(0 , 0 , 0)';

function clearBoard() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    const pixel = allPixels[i];
    pixel.style.backgroundColor = 'white';
  }
}

function enableColor(newColor) {
  const previousColor = document.querySelector('.selected');
  previousColor.classList.remove('selected');
  newColor.classList.add('selected');
  selectedColor = window.getComputedStyle(newColor, null).getPropertyValue('background-color');
}

document.addEventListener('click', function (event) {
  // Click on color palette
  if (event.target.classList.contains('color')) {
    const newColor = event.target
    enableColor(newColor);
  }

  // Click on board cell
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor;
  }

  // Click on Clear button;
  if (event.srcElement.id === 'clear-board') {
    clearBoard();
  }
});
