const BLACKPALETE = document.getElementById('black');
modifyStyle(BLACKPALETE, 'backgroundColor', 'black');
const ORANGEPALETE = document.getElementById('green');
modifyStyle(ORANGEPALETE, 'backgroundColor', 'green');
const BLUEPALETE = document.getElementById('blue');
modifyStyle(BLUEPALETE, 'backgroundColor', 'blue');
const BURLYWOODPALETE = document.getElementById('red');
modifyStyle(BURLYWOODPALETE, 'backgroundColor', 'red');
let brush = 'black';

function modifyStyle(element, property, attribute) {
  element.style[`${property}`] = `${attribute}`;
}

function pixelChange(pixel) {
  modifyStyle(pixel, 'backgroundColor', `${brush}`);
}

function colorPicker(color) {
  brush = `${color}`;
}
