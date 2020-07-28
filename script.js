const METHODS = {
  0: 'querySelector',
  1: 'querySelectorAll',
  3: 'createElement',
};

const lazyCoder = function (method, tagName) {
  return document[`${METHODS[method]}`](tagName);
};
const divBoard = lazyCoder(0, '.board');
const divPalette = lazyCoder(0, '#color-palette');
const btnReset = lazyCoder(0, '.btn-reset');
const elements = lazyCoder(0, '#generate-board');
const generateBoard = lazyCoder(0, '.input-text');
const divColumns = [];
const pixel = lazyCoder(1, '.pixel');
let divWithSelection = lazyCoder(0, '#black');

function generateElements(elements) {
  if (elements < 5) {
    elements = 5;
  } else if (elements > 50) {
    elements = 50;
  }

  for (let i = 0; i < elements; i += 1) {
    divColumns.push(document.createElement('div'));
    divColumns[i].className = 'line';
    for (let j = 0; j < elements; j += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      divColumns[i].appendChild(pixels);
    }
    divBoard.appendChild(divColumns[i]);
  }

  pixel = lazyCoder(1, '.pixel');
  divColumns.forEach((g) => {
    g.style.gridTemplateColumns = `repeat(${elements}, 40px)`;
  });
}

elements.onclick = () => {
  if (generateBoard.value === '') {
    window.alert('Board inválido!');
  }
  lazyCoder(1, '.pixel').forEach((e) => e.remove());
  lazyCoder(1, '.line').forEach((e) => e.remove());
  generateElements(lazyCoder(0, '.input-text').value);
};

const COLORS = ['deeppink', 'magenta', 'deepskyblue', 'aqua', 'turquoise',
  'azure', 'goldenrod', 'lime', 'gold', 'darkorange', 'crimson'];

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
  }
  if (repeated[1] === repeated[2]) {
    repeated[2] = getRandomColor();
  }

  divColor.forEach((item, index) => {
    item.style.backgroundColor = repeated[index];
  });
}

window.onload = () => {
  changeColorToRandom();
  generateElements();
};
