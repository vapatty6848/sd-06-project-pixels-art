const METHODS = {
  0: 'querySelector',
  1: 'querySelectorAll',
  2: 'createElement',
};

const DIVS = {
  0: '.board',
  1: '#color-palette',
  2: '.btn-reset',
  3: '#generate-board',
  4: '.input-text',
  5: '#black',
  6: '.pixel',
  7: '.line',
  8: '.random',
  9: 'div',
};

function lazyCoder(keyMethod, keyDiv) {
  return document[`${METHODS[keyMethod]}`](DIVS[keyDiv]);
}

const divBoard = lazyCoder(0, 0);
let pixel = lazyCoder(1, 6);
let divWithSelection = lazyCoder(0, 5);

function generateElements(elements) {
  if (elements < 5) {
    elements = 5;
  } else if (elements > 50) {
    elements = 50;
  }

  const divColumns = new Array(elements).fill(0);
  divColumns.forEach((e, index, array) => {
    e = lazyCoder(2, 9);
    e.className = 'line';
    array.forEach((i) => {
      i = lazyCoder(2, 9);
      i.className = 'pixel';
      i.id = 'pixel';
      e.appendChild(i);
    });
    e.style.gridTemplateColumns = `repeat(${elements}, 40px)`;
    divBoard.appendChild(e);
  });
  console.log(`${divColumns.length}`);
  pixel = lazyCoder(1, 6);
}

function clearBoard() {
  lazyCoder(1, 7).forEach((e) => e.remove());
}

function getCurrentColor() {
  return divWithSelection.style.backgroundColor;
}

lazyCoder(0, 3).onclick = () => {
  if (lazyCoder(0, 4).value === '') {
    window.alert('Board inválido!');
  } else {
    clearBoard();
    generateElements(Number(lazyCoder(0, 4).value));
  }
};

lazyCoder(0, 1).addEventListener('click', (e) => {
  divWithSelection.classList.remove('selected');
  e.target.classList.add('selected');
  divWithSelection = e.target;
});

lazyCoder(0, 0).addEventListener('click', (e) => {
  e.target.style.backgroundColor = getCurrentColor();
});

lazyCoder(0, 2).addEventListener('click', () => {
  pixel.forEach((p) => {
    p.style.backgroundColor = 'white';
  });
});

function getRandomColor() {
  const colors = [];

  for (let i = 0; i < 3; i += 1) {
    colors.push(Math.floor(Math.random() * 255));
  }

  return `rgb(${colors[0]}, ${colors[1]}, ${colors[0]})`;
}

function changeColorToRandom() {
  lazyCoder(1, 8).forEach((item) => {
    item.style.backgroundColor = getRandomColor();
  });
}

window.onload = () => {
  changeColorToRandom();
  generateElements(5);
};
