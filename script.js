window.onload = function () {
  const sectionPaleta = document.querySelector('#pixel-board');
  const palletColor = document.querySelector('#color-palette');
  const paletaCores = ['black', 'red', 'blue', 'green'];
  const elementoUl = document.createElement('ul');
  sectionPaleta.appendChild(elementoUl);
  let colorBackPixel = paletaCores[0];
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
      palletDiv.addEventListener('click', function () { // adiciona evento a respectiva div.
        changeSelected();
        colorBackPixel = palletDiv.style.backgroundColor;
      });
    }
  }
  createDivAndColor(paletaCores);
  // cria as tag LI e adicona na lista UL, cria as DIV Pixel e add dentro das LI;
  function createLiAndDivPixels() {
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
  // remove a class selected da Div da paleta e adiciona na clicada atual;
  function changeSelected() {
    const divSelectedBefore = document.querySelector('.selected');
    const divSelectedNow = event.target;
    divSelectedBefore.classList.remove('selected');
    divSelectedNow.classList.add('selected');
  }
  // recebe o background color do elemento da paleta e insere na div pixel clicada;
  function changePixelColor() {
    const divPixelColor = event.target;
    divPixelColor.style.backgroundColor = colorBackPixel;
  }
}
