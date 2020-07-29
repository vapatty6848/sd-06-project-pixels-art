let selectedColor = 'black';
window.onload = function () {
 /* add cor */
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'green';

/* função que muda o selecte da class */
  function toChangeSelect() {
    const oldSelected = document.querySelector('.selected');
    const newSelected = event.target;

    oldSelected.classList.remove('selected');
    newSelected.classList.add('selected');

    selectedColor = newSelected.style.backgroundColor;
  }

/* clicando */
  const listen = document.querySelector('#color-palette');
  listen.addEventListener('click', toChangeSelect);

/* colorindo */
  function handlePixel(event) {
    const selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
  }

  const pixelBoardDiv = document.getElementById('pixel-board');
  pixelBoardDiv.addEventListener('click', handlePixel);

/* Button reset color */
  const buttonReset = document.querySelector('#clear-board');
  buttonReset.addEventListener('click', function () {
    const colorPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < colorPixels.length; index += 1) {
      colorPixels[index].style.backgroundColor = 'white';
    }
  });
};
