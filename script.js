window.onload = function() {
  createColorPallet(['black', 'red', 'blue', 'green']);
}

function createColorPallet(colors) {
  let colorPaletContainer = document.getElementById('color-palette')
  for (let index in colors) {
    let palletItemDiv = createPalletItem(colors[index]);
    colorPaletContainer.appendChild(palletItemDiv)
  }
}

function createPalletItem(color) {
  let palletItemDiv = document.createElement('div');
  palletItemDiv.style.backgroundColor = color;
  palletItemDiv.classList.add("pallet-item");
  palletItemDiv.addEventListener('click', handlePalletItemEvent);

  if (color === 'black') {
    palletItemDiv.classList.add('selected');
  }

  return palletItemDiv;
}

function handlePalletItemEvent(event) {
  let oldSelectedDiv = document.querySelector('.selected');
  let currentSelectedDiv = event.target;

  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');
}