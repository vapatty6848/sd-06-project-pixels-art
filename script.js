const pixels = document.querySelector('.pixel');


const sectionPaleta = document.querySelector('#pixel-board');
const palletColor = document.querySelector('#color-palette');
const paletaCores = ['black', 'red', 'blue', 'green'];
const elementoUl = document.createElement('ul');
sectionPaleta.appendChild(elementoUl);

function createDivAndColor(color) {
  for (let i = 0; i < color.length; i += 1) {
    const palletDiv = document.createElement('div');
    palletDiv.style.backgroundColor = color[i];
    palletDiv.className = 'color';
    palletColor.appendChild(palletDiv);
    if (i === 0) {
      palletDiv.className = 'color selected';
    }
    palletDiv.addEventListener('click', changeSelected, PixelColor(palletDiv.backgroundColor));
  }
}
createDivAndColor(paletaCores);

function createLiAndDivPixels() {
  for (let j = 0; j < 5; j += 1) {
    const elementoLi = document.createElement('li');
    elementoUl.appendChild(elementoLi);
    for (let i = 0; i < 5; i += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      elementoLi.appendChild(pixelDiv);
      pixelDiv.addEventListener('click', changePixelColor);
    }
  }
}
createLiAndDivPixels();

function changeSelected() {
  const divSelectedBefore = document.querySelector('.selected');
  const divSelectedNow = event.target;
  divSelectedBefore.classList.remove('selected');
  divSelectedNow.classList.add('selected');
}

function PixelColor(color) {
  const colorNow = color;
  console.log(colorNow);
}

function changePixelColor() {
  const divPixelColor = event.target;
  divPixelColor.style.backgroundColor = 'blue';
}
