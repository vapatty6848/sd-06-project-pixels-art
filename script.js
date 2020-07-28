let corSelecionada = 'black';
function limpaBorda() {
  const elementoLimparBorda = document.querySelector('#clear-board');
  elementoLimparBorda.addEventListener('click', function () {
    const cPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < cPixel.length; index += 1) {
      cPixel[index].style.backgroundColor = 'white';
    }
  });
}

function geraCorAleatoriaNumero() {
  return Math.ceil(Math.random() * 255);
}

function geraCorAleatoria() {
  const R = geraCorAleatoriaNumero();
  const G = geraCorAleatoriaNumero();
  const B = geraCorAleatoriaNumero();
  const RGB = `rgb(${R}, ${G}, ${B} )`;
  return RGB;
}

function manipulaPalete(event) {
  const oldDiv = document.querySelector('.selected');
  const atualDiv = event.target;

  oldDiv.classList.remove('selected');
  atualDiv.classList.add('selected');

  atualColor = window
    .getComputedStyle(currentSelectedDiv, null)
    .getPropertyValue('background-color');
}

function criaPaletaItem(cor) {
  const criaDiv = document.createElement('div');
  criaDiv.style.backgroundColor = color;
  criaDiv.className = 'color';
  criaDiv.addEventListener('click', manipulaPalete);

  if (cor === 'black') {
    criaDiv.classList.add('selected');
  }
  return criaDiv;
}

function criaCorPalette(colors) {
  const corPaletteContainer = document.getElementById('color-palette');

  for (let index = 0; index < colors.length; index += 1) {
    const criaDiv = criaPaletaItem(colors[index]);
    corPaletteContainer.appendChild(criaDiv);
  }
}

function manipulaPixelEvent(event) {
  const divColorida = event.target;
  divColorida.style.backgroundColor = corSelecionada;
}

function criaPixelsDiv(divClassName) {
  const pixelDiv = document.createElement('div');
  pixelDiv.className = divClassName;
  pixelDiv.addEventListener('click', manipulaPixelEvent);
  return pixelDiv;
}

function createPixelsBoard() {
  const elementoCriaBoard = document.querySelector('#pixel-board');
  let inputCreateBoard = document.getElementById('board-size').value;
  if (
    inputCreateBoard < 5 ||
    inputCreateBoard === undefined ||
    inputCreateBoard === null
  ) {
    inputCreateBoard = 5;
    alert('Board inválido!');
  } else if (inputCreateBoard > 50) {
    inputCreateBoard = 50;
    alert('Board inválido!');
  }
  const gridPixel = inputCreateBoard * inputCreateBoard;
  elementoCriaBoard.querySelectorAll('*').forEach((n) => n.remove());
  for (let index = 0; index < gridPixel; index += 1) {
    elementoCriaBoard.appendChild(createPixelsDiv('pixel'));
  }
}

function criaBoard() {
  const teste = document.querySelector('#generate-board');
  teste.addEventListener('click', createPixelsBoard);
}

window.onload = function () {
  criaCorPalette([
    'black',
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ]);
  createPixelsBoard();
  limpaBorda();
  criaBoard();
};