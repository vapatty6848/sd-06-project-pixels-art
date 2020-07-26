let DQSEL = (params) => { return document.querySelector(params); };

window.onload = () => {
  divWithSelection = DQSEL('#black');
  divWithSelection.classList.add('selected');
};

const divBoard = DQSEL('.board');
const divPalette = DQSEL('#color-palette');
const btnReset = DQSEL('.btn-reset');
let divWithSelection = {};

function getCurrentColor() {
  return divWithSelection.style.backgroundColor;
}

divPalette.addEventListener('click', (e) => {
  divName = e.target;
  divWithSelection.classList.remove('selected');
  divName.classList.add('selected');
  divWithSelection = divName;
});

divBoard.addEventListener('click', (e) => {
  let clicked = e.target;
  clicked.style.backgroundColor = getCurrentColor();
});

btnReset.addEventListener('click', () => {
  let pixel = document.querySelectorAll('.pixel');

  for (p in pixel) {
    pixel[p].style.backgroundColor = 'white';
  }
});
