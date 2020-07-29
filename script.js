window.onload = function() {
  let colors = ['black', 'green', 'blue', 'orange', 'yellow', 'gray'];
  let colorPalletItem = document.getElementsByClassName('color-palette')[0];
  let pixelBoard = document.getElementsByClassName('pixel-board');

  // build color pallet based in quantity colors specified in array colors;
  function buildPallet(colors) {

    for (let index = 0; index < colors.length; index += 1) {
      let buildDiv = document.createElement('div');
      buildDiv.className = 'color';
      buildDiv.style.backgroundColor = colors[index];
      colorPalletItem.appendChild(buildDiv);
    }
  }
  buildPallet(colors);

}