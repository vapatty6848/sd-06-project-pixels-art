let selectedColor = 'rgb(0 , 0 , 0)';

function clearBoard () {
  const allPixels = document.getElementsByClassName('pixel');
  for (i = 0; i < allPixels.length; i += 1) {
    const pixel = allPixels[i];
    pixel.style.backgroundColor = 'white';
  }
}

document.addEventListener('click', function (event) {
  // Click on color palette
  if (event.target.classList.contains('color')) {
    // Swap selected color
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');

    // Set selected color;
    selectedColor = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
  }
  // Click on board cell
  if(event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor;
  }

  // Click on Clear button;
  if(event.srcElement.id === 'clear-board') {
    clearBoard();
  }
});



