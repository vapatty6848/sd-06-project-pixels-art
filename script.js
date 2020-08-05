const sectionPaleta = document.querySelector('#pixel-board');
const palletColor = document.querySelector('#color-palette');
const paletaCores = ['black', 'red', 'blue', 'green', 'yellow', 'pink', 'Brown', 'orange'];
let colorFirstPixel = paletaCores[0];
const buttonClear = document.querySelector('#clear-board');
const inputBoard = document.querySelector('#board-size');
const buttonGenerate = document.querySelector('#generate-board');
const buttonSize = document.querySelector('#generate-size');
const inputSize = document.querySelector('#enter-size');
let n = 5;

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
    colorFirstPixel = palletDivs.style.backgroundColor;
  });
}

function randomOrder(list) {
  let number;
  let numberTemporary;
  for (let i = list.length - 1; i > 0; i -= 1) {
    if (i === 0) {
      list[i] = list[i];
      break;
    }
    number = Math.floor((Math.random() * i) + 1);    
    numberTemporary = list[number];
    list[number] = list[i];
    list[i] = numberTemporary;
  }
}
randomOrder(paletaCores);

// Cria as 4 divs da paleta de cores com seu background e evento.
function createDivAndColor(color) {
  for (let i = 0; i < 4; i += 1) {
    const palletDiv = document.createElement('div');
    palletDiv.style.backgroundColor = color[i];
    palletDiv.className = 'color';
    palletColor.appendChild(palletDiv);
    if (i === 0) {
      palletDiv.className = 'color selected';
    }
    palletEvents(palletDiv); // add evento
  }
}
createDivAndColor(paletaCores);


// recebe o background color do elemento da paleta e insere na div pixel clicada;
function changePixelColor() {
  const divPixelColor = event.target;
  divPixelColor.style.backgroundColor = colorFirstPixel;
}

// cria as tag UL e LI, add LI na lista UL, cria as DIV Pixel e add dentro das LI;
function createLiAndDivPixels(list) {
  const elementoDivPai = document.createElement('div');
  sectionPaleta.appendChild(elementoDivPai);
  for (let j = 0; j < list; j += 1) {
    const elementoDivfilho = document.createElement('div');
    elementoDivPai.appendChild(elementoDivfilho);
    for (let i = 0; i < list; i += 1) {
      const pixelDivFilhoFilho = document.createElement('div');
      pixelDivFilhoFilho.className = 'pixel';
      elementoDivfilho.appendChild(pixelDivFilhoFilho);
      pixelDivFilhoFilho.addEventListener('click', changePixelColor);// cria o respectivo evento das Divs Pixel;
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

// armazena valor do input para alteração de tamanho dos pixels
inputSize.addEventListener('keyup', function () {
  if (parseInt(inputSize.value, 10) <= 0) {
    inputSize.value = '';
    alert('valor invalido');
  }
});

// aciona evento no botao VQV e insere o valos as medidas Height e width das Divs Pixel.
buttonSize.addEventListener('click', function () {
  let validation = false;
  const divsPixels = document.querySelectorAll('.pixel');
  if (inputSize.value === '') {
    alert('valor inválido!');
  } else if (inputSize.value >= 1 && inputSize.value < 10) {
    alert('alterando valor padrão minimo é 10');
    inputSize.value = 10;
    validation = true;
  } else if (inputSize.value > 80) {
    alert('alterando valor padrão máximo é 80');
    inputSize.value = 80;
    validation = true;
  } else {
    validation = true;
  }
  if (validation === true) {
    for (let i = 0; i < divsPixels.length; i += 1) {
      divsPixels[i].style.height = `${inputSize.value}px`;
      divsPixels[i].style.width = `${inputSize.value}px`;
    }
    alert('alterando meidadas Heigth e width');
  }
});
