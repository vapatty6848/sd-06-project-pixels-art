const pixels = document.querySelector('.pixel');
const sectionPaleta = document.querySelector('#pixel-board');

window.onload = function() {
  const palletColor = document.querySelector('#color-palette');
  const paletaCores = ['black', 'red', 'blue', 'green'];
  createDivAndColor(paletaCores);
  function createDivAndColor(color) {
    for (let i = 0; i < color.length; i += 1) {
      let palletDiv = document.createElement('div');
      palletDiv.style.backgroundColor = color[i];
      palletDiv.className = 'color';
      palletColor.appendChild(palletDiv);
    }
  }
}
