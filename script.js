const DQSEL = function (params) { return document.querySelector(params); };
const divBoard = DQSEL('.board');
const divPalette = DQSEL('#color-palette');
const btnReset = DQSEL('.btn-reset');
let divWithSelection = DQSEL('#black');

const COLORS = ['deeppink', 'magenta', 'deepskyblue', 'aqua',
  'turquoise', 'azure', 'goldenrod', 'lime', 'gold', 'darkorange', 'crimson'];

window.onload = () => {
  changeColorToRandom();
};

function getCurrentColor() {
  return divWithSelection.style.backgroundColor;
}

divPalette.addEventListener('click', (e) => {
  divWithSelection.classList.remove('selected');
  e.target.classList.add('selected');
  divWithSelection = e.target;
});

divBoard.addEventListener('click', (e) => {
  e.target.style.backgroundColor = getCurrentColor();
});

btnReset.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');

  pixel.forEach((p) => {
    p.style.backgroundColor = 'white';
  });
});

function getRandomNumber() {
  return Math.round(Math.random() * 10);
}

function getRandomColor() {
  return COLORS[getRandomNumber()];
}

function changeColorToRandom() {
  const divColor = document.querySelectorAll('.random');

  divColor.forEach((c) => {
    c.style.backgroundColor = getRandomColor();
  });
}
