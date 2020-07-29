const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'red', 'blue', 'green'];


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
    divCollor.addEventListener('click', function () {
      let oldSelectedColor = document.querySelector('.selected');
      const newSelectedColor = event.target;
      if (oldSelectedColor !== newSelectedColor) {
        oldSelectedColor.classList.remove('selected');
        newSelectedColor.classList.add('selected');
        oldSelectedColor = document.querySelector('.selected');
      }
    });
  }
}

function generateInput() {
  const input = document.createElement('input');
  input.id = 'board-size';
  input.classList.add('board-size');
  input.type = 'number';
  input.min = 5;
  input.max = 50;
  document.querySelector('.btn').appendChild(input);
}

function generateCustomizedPixelBoard() {
  const size = document.querySelector('.board-size').valueAsNumber;
  let pixelBoard = document.querySelector('.pixel-board');
  pixelBoard.innerHTML = '';
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
    for (let j = 0; j < size; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
      pixel.addEventListener('click', () => {
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
    }
  }
}

function generateBoardSizeButton() {
  const boardSizeButton = document.createElement('button');
  boardSizeButton.id = 'generate-board';
  boardSizeButton.classList.add('generate-board');
  boardSizeButton.innerText = 'VQV'
  document.querySelector('.btn').appendChild(boardSizeButton);
  boardSizeButton.addEventListener('click', generateCustomizedPixelBoard);

}

function generateCleanButton() {
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.classList.add('clean');
  button.innerText = 'Limpar';
  document.querySelector('.btn').appendChild(button);
  button.addEventListener('click', () => {
    const allPixelsFromPixelBoard = document.querySelectorAll('.pixel');
    allPixelsFromPixelBoard.forEach((item) => {
      item.style.backgroundColor = 'white';
    });
  });
}

function generatePixels() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
      pixel.addEventListener('click', () => {
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
    }
  }
}

window.onload = function () {
  generatePaletteColors();
  generateInput();
  generateBoardSizeButton();
  generateCleanButton();
  generatePixels();
};
