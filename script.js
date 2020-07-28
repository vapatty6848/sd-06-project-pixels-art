function getColor(event) {
  const elemento = event.target;
  colorStoraged = elemento.style.backgroundColor;
  return  colorStoraged;
}

function setColor(event) {
  const elementoAtual = event.currentTarget;
  elementoAtual.style.backgroundColor = colorStoraged;
  return colorStoraged;
}

function CreateElements(NumberOfElements, Row) {
  for (let x = 0; x < NumberOfElements;x += 1) {
    const element = document.createElement('div');
    element.className = 'pixel';
    Row.appendChild(element);
  }
}

function CreateRows(NumberOfRows) {
  for (let i = 0 ; i < NumberOfRows ; i += 1) {
    const board = document.querySelector('#pixel-board');
    const linha = document.createElement('div');
    linha.className = 'row';
    board.appendChild(linha);
    CreateElements(NumberOfRows, linha);
  }
}



function RemoveCurrentBoard() {
  const Currentboard = document.querySelector('.brush-body');
  while (Currentboard.firstChild) {
    Currentboard.removeChild(Currentboard.firstChild);
  }
}

function ClearBoard(colors) {
  for (let i = 0; i < colors.length; i += 1) {
    if(colors[i].style.backgroundColor !== undefined) {
      colors[i].style.backgroundColor = 'white';
    }
  }
}

function initPixelColor(pixelsColors) {
  ClearBoard(pixelsColors);
}

function BoardEvents(pixels) {
  for (const i in pixels) {
    const pixel = pixels[i];
    if (pixel.className !== undefined) {
      add(pixel, 'click', setColor, colorStoraged);
    }
  }
}

function ButtonsEvents(clearButton, board) {
  addButtonEvent(clearButton, 'click', ClearBoard, board);
}

function CreateBoard() {
  let inputValue = document.querySelector('#board-size').value;
  if (inputValue < 5) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }
  CreateRows(inputValue);
  const classPixels = document.querySelectorAll('.pixel');
  const clearButton = document.querySelector('.clear');
  initPixelColor(classPixels);
  BoardEvents(classPixels);
  ButtonsEvents(clearButton, classPixels, ClearBoard);

}

function setClass(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.currentTarget.classList = `${event.currentTarget.className} selected`;
}

function PaletteEvents(paletteElements, colorStoraged) {
  for (const i in paletteElements) {
    const paletteElement = paletteElements[i];
    if (paletteElement.className !== undefined) {
      add(paletteElement, 'click', getColor, colorStoraged);
      addClassEvent(paletteElement, 'click', setClass);
    }
  }
}

function VqvEvents(vqvButton) {
  const valorInput = document.querySelector('#board-size');
  vqvButton.addEventListener('click', function () {
    if( valorInput.value !== '') {
      RemoveCurrentBoard();
      CreateBoard();
    }
    else {
      alert('Board inválido!');
    }
  });
}

function initPalette() {
  const paletteColors = document.querySelectorAll('.color');
  paletteColors[0].style.backgroundColor = 'black';
  for (let i = 1 ; i < paletteColors.length; i += 1) {
    const paletteColor = paletteColors[i];
    if (paletteColor.style.backgroundColor !== undefined) {
      paletteColor.style.backgroundColor = generateRandomColor();
    }
  } PaletteEvents(paletteColors, colorStoraged);
}
