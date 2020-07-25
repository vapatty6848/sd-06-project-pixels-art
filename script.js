const DQSEL = (e) => {
  return document.querySelector(e);
};

let divBoard = DQSEL('.board');
let divWithSelection = {};
let divPalette = DQSEL('#color-palette');

function makeSelection() {
  divWithSelection = DQSEL('#black');
  divWithSelection.classList.add('selected');
}

function getCurrentColor() {
  return divWithSelection.style.backgroundColor;
}

function changeClassName(event) {  
  divName = event.target;
  divName.classList.add('selected');
  divWithSelection.classList.remove('selected');
  divWithSelection = divName;
}
divPalette.addEventListener('click', changeClassName);

function paintElement(event) {
  let color = getCurrentColor();
  let clicked = event.target;
  clicked.style.backgroundColor = color;
}
divBoard.addEventListener('click', paintElement);