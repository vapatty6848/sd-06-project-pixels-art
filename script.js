const mainPalette = document.getElementById('color-palette');
const boardGrid = document.getElementById('pixel-board');
const btnClear = document.getElementById('clear-board');
let presentColor = 'black';
const numberBoardSize = document.querySelector('.board-size');
const btnGenerateBoard = document.querySelector('.generate-board');

// Adiciona novas opções de cores;
const generateColor = ['black', 'red', 'blue', 'green'];

// Habilita e Desabilita a Cor desejada ao clicar;
function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  const currentColor = event.target;
  selectedColor.classList.remove('selected');
  currentColor.classList.add('selected');
  presentColor = currentColor.style.backgroundColor;
}

// Cria novos pixels de cores para a paleta;
function createPixelPalette(color) {
  const palettePixel = document.createElement('div');
  palettePixel.style.backgroundColor = color;
  palettePixel.className = 'color';
  palettePixel.addEventListener('click', selectColor);

  if (color === 'black') {
    palettePixel.classList.add('selected');
  }
  return palettePixel;
}

// Adiciona as novas cores a paleta;
function generatePalette(colorOptions) {
  for (let index = 0; index < colorOptions.length; index += 1) {
    const paletteOptions = createPixelPalette(colorOptions[index]);
    mainPalette.appendChild(paletteOptions);
  }
}
generatePalette(generateColor);

// Verifica se a quantidade de elementos e limpa o board;
function verifyElementsNumbers(numberElements) {
  const pixels = document.querySelectorAll('.pixel');
  if (numberElements === '') {
    alert('Board inválido!');
    numberElements = 5;
    numberBoardSize.value = 5;
  }
  if (numberElements < 5) {
    numberElements = 5;
    numberBoardSize.value = 5;
  }
  if (numberElements > 50) {
    numberElements = 50;
    numberBoardSize.value = 50;
  }
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].remove();
  }
  return numberElements;
}

// Cria o grid de pixel
function createGrid(numberElements) {
  numberElements = verifyElementsNumbers(numberBoardSize.value);
  for (let index = 0; index < (numberElements ** 2); index += 1) {
    const pixel = document.createElement('div');
    boardGrid.appendChild(pixel);
    boardGrid.style.display = 'grid';
    boardGrid.style.gridTemplateColumns = `repeat(${numberElements}, 40px)`;
    pixel.className = 'pixel';
  }
}
btnGenerateBoard.addEventListener('click', createGrid);

// Pinta os pixels da cor selecionada;
function printPixel(event) {
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = presentColor;
}
boardGrid.addEventListener('click', printPixel);

// Deixa o grid em branco;
btnClear.addEventListener('click', function () {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = '';
  }
});
