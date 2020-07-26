const DQSEL = function (params) { return document.querySelector(params); };
const divBoard = DQSEL('.board');
const divPalette = DQSEL('#color-palette');
const btnReset = DQSEL('.btn-reset');
let divWithSelection = DQSEL('#black');

const COLORS = ['deeppink', 'magenta', 'deepskyblue', 'aqua',
  'turquoise', 'azure', 'goldenrod', 'lime', 'gold', 'darkorange', 'crimson'];

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
  const repeated = [getRandomColor(), getRandomColor(), getRandomColor()];

  if (repeated[0] === repeated[1]) {
    repeated[1] = getRandomColor();
  } else if (repeated[1] === repeated[2]) {
    repeated[2] = getRandomColor();
  }

  divColor.forEach((item, index) => {
    item.style.backgroundColor = repeated[index];
  });
}

window.onload = () => {
  changeColorToRandom();
};
