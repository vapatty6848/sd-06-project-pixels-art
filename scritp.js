function modifyStyle(element, property, attribute) {
  element.style[`${property}`] = `${attribute}`;
}

const BLACKPALETE = document.getElementById('black');
modifyStyle(BLACKPALETE, 'backgroundColor', 'black');
const ORANGEPALETE = document.getElementById('orange');
modifyStyle(ORANGEPALETE, 'backgroundColor', 'orange');
const BLUEPALETE = document.getElementById('blue');
modifyStyle(BLUEPALETE, 'backgroundColor', 'blue');
const BURLYWOODPALETE = document.getElementById('burlywood');
modifyStyle(BURLYWOODPALETE, 'backgroundColor', 'red');
