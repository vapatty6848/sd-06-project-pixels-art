const DQSEL = function (params) { return document.querySelector(params); };
const divBoard = DQSEL('.board');
const divPalette = DQSEL('#color-palette');
const btnReset = DQSEL('.btn-reset');
let divWithSelection = {};

window.onload = () => {
  divWithSelection = DQSEL('#black');
  divWithSelection.classList.add('selected');
};

function getCurrentColor() {
  return divWithSelection.style.backgroundColor;
}

divPalette.addEventListener('click', (e) => {
  let divName = e.target;
  divWithSelection.classList.remove('selected');
  divName.classList.add('selected');
  divWithSelection = divName;
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
