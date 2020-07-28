window.onload = function() {
  createColorPallet(['black', 'blue', 'blueviolet', 'pink']);
  let selectedColor = 'black';
};

// Criação dos itens da paleta (divs)
function createPalletItem(color) {
  const palletColorDiv = document.createElement('div');
  palletColorDiv.style.backgroundColor = color;
  palletColorDiv.className = 'color';
  palletColorDiv.addEventListener('click', handlePalletColorEvent);
    if (color === 'black') {
      palletColorDiv.classList.add('selected');
    }
  return palletColorDiv;
}

// Pega a paleta de cores e add os itens a paleta
function createColorPallet(colors) {
  const colorPalletContainer = document.getElementById('color-palette');
  for (let i in colors) {
    const palletColorDiv = createPalletItem(colors[i]);
    colorPalletContainer.appendChild(palletColorDiv);
  }
}

// Quando clica, add o selected e retira da cor antiga
function handlePalletColorEvent(event) {
  let oldSelectedDiv = document.querySelector('.selected');
  let currentSelectedDiv = event.target;

  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');
  let selectedColor = currentSelectedDiv.style.backgroundColor;
}

// Pintando o quadro
let pixelBoardDiv = document.querySelector('.pixel-board-container');
pixelBoardDiv.addEventListener('click', handlePixelClick);

function handlePixelClick(event) {
  let selectedPixelDiv = event.target;
  selectedPixelDiv.style.backgroundColor = selectedColor;
}

// Botão reset
function resetPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

// Criando pixel board pelo usuario
function createPixelBoard() {
  let sizeBoard = document.getElementById('board-size').value;
  if (sizeBoard === 0) {
    alert('Board inválido!');
  } else if (sizeBoard < 5) {
    sizeBoard = 5;
  }
}
