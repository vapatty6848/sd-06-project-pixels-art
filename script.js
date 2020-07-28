const BLACKPALETE = document.getElementById('black');
const ORANGEPALETE = document.getElementById('green');
const BLUEPALETE = document.getElementById('blue');
const REDPALETE = document.getElementById('red');
const CANVAS = document.querySelectorAll('.pixel');
let brush = 'black';

function modifyStyle(element, property, attribute) {
  element.style[`${property}`] = `${attribute}`;
}

function pixelChange(pixel) {
  modifyStyle(pixel, 'backgroundColor', `${brush}`);
}

function resetPalleteClass() {
  document.querySelectorAll('.color').forEach((x) => {
    x.className = 'color';
  });
}

function colorPicker(color) {
  brush = `${color.id}`;
  resetPalleteClass();
  color.className = `color selected`;
}

function clearCanvas() {
  CANVAS.forEach((x) => {
    modifyStyle(x, 'backgroundColor', 'white');
  }
  );
}

modifyStyle(BLACKPALETE, 'backgroundColor', 'black');
modifyStyle(ORANGEPALETE, 'backgroundColor', 'green');
modifyStyle(BLUEPALETE, 'backgroundColor', 'blue');
modifyStyle(REDPALETE, 'backgroundColor', 'red');
