const PALETTECHOSENSIZE = document.querySelector('.palette-size');
const PALETTESIZE = 4;
const MAXPALETTESIZE = 25;
const CANVASCHOSENSIZE = document.querySelector('.canvas-size');
const CANVASSIZE = 5;
const MAXCANVASSIZE = 50;
const PALETTE = document.querySelectorAll('.color').length;
let canvas = document.querySelectorAll('.pixel');
let colors = document.querySelectorAll('.color');
let brush = 'black';

function rgbRandomGenerator() {
  const RED = Math.floor(Math.random() * 255);
  const BLUE = Math.floor(Math.random() * 255);
  const GREEN = Math.floor(Math.random() * 255);
  return (`rgb(${RED},${BLUE},${GREEN})`);
}

function modifyStyle(element, property, attribute) {
  element.style[`${property}`] = `${attribute}`;
}

function updateCanvas() {
  canvas = document.querySelectorAll('.pixel');
}

function resetPalleteClass() {
  document.querySelectorAll('.selected').className = 'color';
}

function colorPicker(chosenColor) {
  brush = chosenColor.dataset.color;
  resetPalleteClass();
  chosenColor.classList.add('selected');
}

function listenPalette() {
  colors.forEach((choice) => {
    choice.addEventListener('click', () => colorPicker(choice));
  });
}

function updatePalette() {
  colors = document.querySelectorAll('.color');
  listenPalette();
}

function insertElement(htmlTag, tagClass, parentClass) {
  const ELEMENT = document.createElement(`${htmlTag}`);
  ELEMENT.classList.add(`${tagClass}`);
  document.querySelector(`${parentClass}`).appendChild(ELEMENT);
}

function createCanvasRow() {
  insertElement('div', 'row', '.pixel-board');
}

function createCanvasPixel() {
  const ELEMENT = document.createElement('div');
  ELEMENT.classList.add('pixel');
  const ALLPARENTS = document.querySelectorAll('.row');
  ALLPARENTS[ALLPARENTS.length - 1].appendChild(ELEMENT);
}

function insertPalette() {
  insertElement('div', 'color', '.color-palette');
  const NEWPALETTE = document.querySelector('.color-palette').lastChild;
  const COLOR = rgbRandomGenerator();
  NEWPALETTE.style.backgroundColor = COLOR;
  NEWPALETTE.dataset.color = COLOR;
}

function pixelChange(pixel) {
  modifyStyle(pixel, 'backgroundColor', `${brush}`);
}

function clearCanvas() {
  canvas.forEach((x) => {
    x.style.backgroundColor = 'white';
  });
}

function removeCanvas() {
  canvas.forEach((pixel) => { pixel.remove(); });
  document.querySelectorAll('.row').forEach((element) => {
    element.remove();
  });
}

function clearPalette() {
  while (document.querySelector('.color')) {
    document.querySelector('.color-palette').removeChild(document.querySelector('.color'));
  }
}

function listenCanvas() {
  canvas.forEach((x) => {
    x.addEventListener('click', () => { pixelChange(x); });
  });
}

function setNewPalette() {
  if (PALETTECHOSENSIZE.value < PALETTESIZE) {
    PALETTECHOSENSIZE.value = PALETTESIZE;
  } else if (PALETTECHOSENSIZE.value > MAXPALETTESIZE) {
    PALETTECHOSENSIZE.value = MAXPALETTESIZE;
  }
  for (let index = 0; index < PALETTECHOSENSIZE.value - PALETTE; index += 1) {
    insertPalette();
  }
  updatePalette();
}

function setNewCanvas() {
  if (CANVASCHOSENSIZE.value < CANVASSIZE) {
    CANVASCHOSENSIZE.value = CANVASSIZE;
  } else if (CANVASCHOSENSIZE.value > MAXCANVASSIZE) {
    CANVASCHOSENSIZE.value = MAXCANVASSIZE;
  }
  for (let row = 0; row < CANVASCHOSENSIZE.value; row += 1) {
    createCanvasRow();
    for (let pixel = 0; pixel < CANVASCHOSENSIZE.value; pixel += 1) {
      createCanvasPixel();
    }
  }
  updateCanvas();
  listenCanvas();
}

PALETTECHOSENSIZE.addEventListener('click', () => {
  clearPalette();
  setNewPalette();
});

CANVASCHOSENSIZE.addEventListener('click', () => {
  removeCanvas();
  setNewCanvas();
});

if (PALETTE === 0) {
  setNewPalette();
}

if (canvas.length === 0) {
  setNewCanvas();
}
