const sectionPaleta = document.querySelector('#pixel-board');
const palletColor = document.querySelector('#color-palette');
const paletaCores = ['black', 'red', 'blue', 'green'];
let colorBackPixel = paletaCores[0];
const buttonClear = document.querySelector('#clear-board');

// remove a class selected da Div da paleta e adiciona na clicada atual;
function changeSelected() {
  const divSelectedBefore = document.querySelector('.selected');
  const divSelectedNow = event.target;
  divSelectedBefore.classList.remove('selected');
  divSelectedNow.classList.add('selected');
}

// insere evento em cada div da paleta de cores
function palletEvents(palletDivs) {
  palletDivs.addEventListener('click', function () { // adiciona evento a respectiva div.
    changeSelected();
    colorBackPixel = palletDivs.style.backgroundColor;
  });
}

// Cria as 4 divs da paleta de cores com seu background e evento.
function createDivAndColor(color) {
  for (let i = 0; i < color.length; i += 1) {
    const palletDiv = document.createElement('div');
    palletDiv.style.backgroundColor = color[i];
    palletDiv.className = 'color';
    palletColor.appendChild(palletDiv);
    if (i === 0) {
      palletDiv.className = 'color selected';
    }
    palletEvents(palletDiv);
  }
}
createDivAndColor(paletaCores);


// recebe o background color do elemento da paleta e insere na div pixel clicada;
function changePixelColor() {
  const divPixelColor = event.target;
  divPixelColor.style.backgroundColor = colorBackPixel;
}

// cria as tag UL e LI, add LI na lista UL, cria as DIV Pixel e add dentro das LI;
function createLiAndDivPixels() {
  const elementoUl = document.createElement('ul');
  sectionPaleta.appendChild(elementoUl);
  for (let j = 0; j < 5; j += 1) {
    const elementoLi = document.createElement('li');
    elementoUl.appendChild(elementoLi);
    for (let i = 0; i < 5; i += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      elementoLi.appendChild(pixelDiv);
      pixelDiv.addEventListener('click', changePixelColor);// cria o respectivo evento das Divs Pixel;
    }
  }
}
createLiAndDivPixels();

// Limpa Pixels
buttonClear.addEventListener('click', function () {
  const divPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < divPixels.length; i += 1){
  divPixels[i].style.backgroundColor = 'white';
  }
});
