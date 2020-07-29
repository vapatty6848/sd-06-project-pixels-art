window.onload = function() {
    createPaletteColor(['black', 'brown', 'blue', 'cyan']);
    selectedColor = 'black';
  };
  
  // Criação dos itens da paleta (divs)
  function createPalletItem(color) {
    let colorPaletteDiv = document.createElement('div');
    colorPaletteDiv.style.backgroundColor = color;
    colorPaletteDiv.className = 'color';
    colorPaletteDiv.addEventListener('click', handlePaletteColorEvent);
      if (color === 'black') {
        colorPaletteDiv.classList.add('selected');
      }
    return colorPaletteDiv;
  }
  
  // Pega a paleta de cores e add os itens a paleta
  function createPaletteColor(colors) {
    let containerPaletteColor = document.getElementById('color-palette');
    for (let i in colors) {
      let colorPaletteDiv = createPalletItem(colors[i]);
      containerPaletteColor.appendChild(colorPaletteDiv);
    }
  }
  
  // Quando clica, add o selected e retira da cor antiga
  function handlePaletteColorEvent(event) {
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;
  
    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
    selectedColor = currentSelectedDiv.style.backgroundColor;
  }
  
  // Criando pixel board pelo usuario
  let creatingBtn = document.getElementById('generate-board');
  creatingBtn.addEventListener('click', createPixelBoard);
  function createPixelBoard() {
    let boardSize = document.getElementById('board-size').value;
    if (boardSize === 0) {
      alert('Board inválido!');
    } else if (boardSize < 5) {
      boardSize = 5;
    }
  }

  // Pintando o quadro
  let pixelBoardDiv = document.querySelector('.pixel-board-container');
  pixelBoardDiv.addEventListener('click', handlePixelClick);
  
  function handlePixelClick(event) {
    let selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
  }
  
  // Botão reset
  let resetButton = document.getElementById('clear-board');
  resetButton.addEventListener('click', resetBoard());
  function resetBoard() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }

}


  
  

