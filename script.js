const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'red', 'blue', 'green'];



function handleSelectedClass(event) {
  let oldSelectedColor = document.querySelector('.selected');
  const newSelectedColor = event.target;
  if (oldSelectedColor !== newSelectedColor) {
    oldSelectedColor.classList.remove('selected');
    newSelectedColor.classList.add('selected');
    oldSelectedColor = document.querySelector('.selected');
  }
}

function generatePaletteColors() {
  for (let i = 0; i < colors.length; i += 1) {
    const divCollor = document.createElement('div');
    divCollor.classList.add('color');
    divCollor.classList.add(colors[i]);
    divCollor.style.backgroundColor = colors[i];
    colorPalette.appendChild(divCollor);
    if (divCollor.classList.contains('black')) {
      divCollor.classList.add('selected');
    }
    divCollor.addEventListener('click', handleSelectedClass);
  }
}

function generatePixels() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

window.onload = () => {
  generatePaletteColors();
  generatePixels();
};
