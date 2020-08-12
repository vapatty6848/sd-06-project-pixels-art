const PALETTESIZE = document.querySelector('.palette-size');
const CANVASSIZE = document.querySelector('.palette-size');
let canvas = document.querySelectorAll('.pixel');
let palette = document.querySelectorAll('.color').length;
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

function createCanvasRow() {
  /* const ROW = document.createElement('div');
  ROW.classList.add('row');
  document.querySelector('.pixel-board').appendChild(ROW); */
  insertElement('div', 'row', '.pixel-board');
}

function createCanvasPixel() {
  /* insertElement('div', 'pixel', '.row'); */
  const ELEMENT = document.createElement('div');
  ELEMENT.classList.add('pixel');
  const ALLPARENTS = document.querySelectorAll('.row');
  ALLPARENTS[ALLPARENTS.length - 1].appendChild(ELEMENT);
}

function insertPalette() {
  insertElement('div', 'color', '.color-palette');
  const NEWPALETTE = document.querySelector('.color-palette').lastChild;
  const COLOR = rgbRandomGenerator();
  modifyStyle(NEWPALETTE, `background-color`, COLOR);
}

function insertElement(htmlTag, tagClass, parentClass) {
  const ELEMENT = document.createElement(`${htmlTag}`);
  ELEMENT.classList.add(`${tagClass}`);
  document.querySelector(`${parentClass}`).appendChild(ELEMENT);
}

function pixelChange(pixel) {
  modifyStyle(pixel, 'backgroundColor', `${brush}`);
}

function resetPalleteClass() {
  document.querySelectorAll('.selected').className = 'color';
}

function colorPicker(color) {
  brush = `${color.id}`;
  resetPalleteClass();
  color.className = 'color selected';
}

function clearCanvas() {
  canvas.forEach((x) => {
    modifyStyle(x, 'backgroundColor', 'white');
  });
}

function clearPalette() {
  //document.querySelectorAll('.color')
  while (document.querySelector('.color')) {
    document.querySelector('.color-palette').removeChild(document.querySelector('.color'));
  }
}

PALETTESIZE.addEventListener('click', () => {
  clearPalette();
  if (PALETTESIZE.value < 5) {
    PALETTESIZE.value = 5;
  } else if (PALETTESIZE.value > 25) {
    PALETTESIZE.value = 25;
  }
  for (let index = 0; index < PALETTESIZE.value - palette; index += 1) {
    insertPalette();
  }
});

if (palette === 0) {
  for (let index = 0; index < 4; index += 1) {
    insertPalette();
  }
}

if (canvas.length === 0) {
  for (let index = 0; index < 5; index += 1) {
    createCanvasRow();
    for (let index = 0; index < 5; index += 1) {
      createCanvasPixel();      
    }
  }
  updateCanvas();
}

colors.forEach((choice) => {
  choice.addEventListener('click',() =>
  colorPicker(choice))
});


canvas.forEach((x) => {
  x.addEventListener('click', () => {
    pixelChange(x);
  })
});

/* canvas.forEach((pixel), function() {
  this.onclick = function() {
    pixelChange();
  }
});
 */
/* modifyStyle(BLACKPALETTE, 'backgroundColor', 'black');
modifyStyle(ORANGEPALETTE, 'backgroundColor', 'green');
modifyStyle(BLUEPALETTE, 'backgroundColor', 'blue');
modifyStyle(REDPALETTE, 'backgroundColor', 'red'); */
