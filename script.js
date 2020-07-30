const sectionPaleta = document.querySelector('#pixel-board');
const palletColor = document.querySelector('#color-palette');
const paletaCores = ['black', 'red', 'blue', 'green'];
let colorBackPixel = 'black';
const buttonClear = document.querySelector('#clear-board');
const inputBoard = document.querySelector('#board-size');
const buttonGenerate = document.querySelector('#generate-board');
const buttonSize = document.querySelector('#generate-size');
const inputSize = document.querySelector('#enter-size');


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

function randomOrder(array) {
  let p, n, tmp;
  for (p = array.length; p;) {
    n = Math.random() * p-- | 0;
    tmp = array[n];
    array[n] = array[p];
    array[p] = tmp;
  }
}
randomOrder(paletaCores);

// Cria as 4 divs da paleta de cores com seu background e evento.
function createDivAndColor(color) {
  n = 5;
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
function createLiAndDivPixels(n) {
  const elementoUl = document.createElement('ul');
  sectionPaleta.appendChild(elementoUl);
  for (let j = 0; j < n; j += 1) {
    const elementoLi = document.createElement('li');
    elementoUl.appendChild(elementoLi);
    for (let i = 0; i < n; i += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      elementoLi.appendChild(pixelDiv);
      pixelDiv.addEventListener('click', changePixelColor);// cria o respectivo evento das Divs Pixel;
    }
  }
}
createLiAndDivPixels(n);

// Limpa Pixels
buttonClear.addEventListener('click', function () {
  const divPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < divPixels.length; i += 1) {
    divPixels[i].style.backgroundColor = 'white';
  }
});

// armazena valor para alterar quantidade das divs pixels
inputBoard.addEventListener('keyup', function () {
  if (parseInt(inputBoard.value, 10) <= 0) {
    inputBoard.value = '';
    alert('valor invalido');
  }
});

// altera quantidades de divs pixel nas linhas e colunas
buttonGenerate.addEventListener('click', function () {
  if (inputBoard.value === '') {
    alert('Board inválido!');
  } else if (inputBoard.value >= 1 && inputBoard.value < 5) {
    alert('valor padrão minimo é 5');
    inputBoard.value = 5;
    sectionPaleta.lastChild.remove();
    n = inputBoard.value;
    createLiAndDivPixels(n);
    alert('alterando tamanho');
  } else if (inputBoard.value > 50) {
    alert('valor padrão máximo é 50 clique novamente');
    inputBoard.value = 50;
    sectionPaleta.lastChild.remove();
    n = inputBoard.value;
    createLiAndDivPixels(n);
    alert('alterando tamanho');
  } else {
    sectionPaleta.lastChild.remove();
    n = inputBoard.value;
    createLiAndDivPixels(n);
    alert('alterando tamanho');
  }
});

//armazena valor do input para alteração de tamanho dos pixels
inputSize.addEventListener('keyup', function () {
  if (parseInt(inputSize.value, 10) <= 0) {
    inputSize.value = '';
    alert('valor invalido');
  }
});

// aciona evento no botao VQV e insere o valos as medidas Height e width das Divs Pixel.
buttonSize.addEventListener('click', function () {
  const divsPixels = document.querySelectorAll('.pixel');
  if (inputSize.value === '') {
    alert('valor inválido!');
  } else if (inputSize.value >= 1 && inputSize.value < 10) {
    alert('valor padrão minimo é 10');
    inputSize.value = 10;
  } else if (inputSize.value > 80) {
    alert('valor padrão máximo é 80');
    inputSize.value = 80;
  }
  for (let i = 0; i < divsPixels.length; i += 1) {
    divsPixels[i].style.height = `${inputSize.value}px`;
    divsPixels[i].style.width = `${inputSize.value}px`;
    alert('alterando meidadas Heigth e width');
  }
});
