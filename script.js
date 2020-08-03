window.onload = function () {
  let selectedColor = 'black';

  function createColorPallet(colors) {
    const colorPalletContainer = document.getElementById('color-palette');

    for (let i in colors) {
      const palletItemDiv = createPalletItem(colors[i]);
      colorPalletContainer.appendChild(palletItemDiv);
    }
  }

  createColorPallet(['black', 'red', 'blue', 'green']);

  function handlePalletItemEvent(event) {
    const oldSelectedDiv = document.querySelector('.selected');
    const currentSelectedDiv = event.target;

    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');

    selectedColor = currentSelectedDiv.style.backgroundColor;
  }

  function createPalletItem(color) {
    const palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = 'color';
    palletItemDiv.addEventListener('click', handlePalletItemEvent);

    if (color === 'black') {
      palletItemDiv.classList.add('selected');
    }
    return palletItemDiv;
  }

  function handlePixelClick(event) {
    const selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
  }

  const pixelBoardDiv = document.querySelector('#pixel-board');
  pixelBoardDiv.addEventListener('click', handlePixelClick);

  const btn = document.querySelector('#clear-board');
  const pixel = document.getElementsByClassName('pixel');
  btn.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
};
