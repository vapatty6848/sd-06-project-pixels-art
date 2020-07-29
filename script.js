const pixelBoard = document.querySelector('#pixel-board');
const colorPalet = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const btnShow = document.querySelector('#generate-board');
const inputNum = document.querySelector('#board-size');
let classSel = 'black';
let sizeBox = 5;
const cores = [];

// function randomColors() {

//   const cores2 = ['purple', 'gray', 'pink', 'orange']

//   while (cores.length < 8) {
//     let randomNum = Math.floor(Math.random() * 4);
//     let cor = cores2[randomNum];
//     if (!cores.includes(cor)) {
//       cores.push(cor)
//     }
//   }
//   createColorPalet(cores)
// }


function createColorPalet(colors) {
  for (const index in colors) {
    const palletItemDiv = createPalletItem(colors[index]);
    colorPalet.appendChild(palletItemDiv);
  }
}

function createPalletItem(color) {
  const palletItemDiv = document.createElement('div');
  palletItemDiv.style.backgroundColor = color;
  palletItemDiv.classList.add('color');
  palletItemDiv.addEventListener('click', handle)
  if (palletItemDiv.style.backgroundColor === classSel) {
    palletItemDiv.classList.add('selected');
  }
  return palletItemDiv;
}

function createPixelBoard() {
  const createFather = document.createElement('section');
  pixelBoard.appendChild(createFather);
  createFather.setAttribute('class', 'father');
  for (let j = 0; j < sizeBox; j += 1) {
    const createSection = document.createElement('section');
    createSection.setAttribute('class', 'sectionPB');
    createFather.appendChild(createSection);
  }

  const sect = document.getElementsByClassName('sectionPB');
  for (let l = 0; l < sizeBox; l += 1) {
    for (let i = 0; i < sizeBox; i += 1) {
      const createDiv = document.createElement('div');
      createDiv.setAttribute('class', 'pixel bgbranco');
      sect[l].appendChild(createDiv);
    }
  }
}

function handle(event) {
  classSel = event.target.style.backgroundColor;
  console.log(event.target.style.backgroundColor);
  document.querySelectorAll('.color').forEach((element) => {
    if (element.classList.contains('selected')) {
      element.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
};

pixelBoard.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.className = '';
    event.target.classList.add('pixel');
    event.target.style.backgroundColor = classSel;
    event.target.classList.remove('bgbranco');
  }
});

btnClear.addEventListener('click', function () {
  document.querySelectorAll('.pixel').forEach((element) => {
    if (element.classList.contains('pixel')) {
      element.style.backgroundColor = 'white';
    }
  });
});

btnShow.addEventListener('click', function () {
  const inputVal = inputNum.value;
  if (inputVal === '') {
    alert('Board inválido!');
  } else if (inputVal < 5) {
    sizeBox = 5;
  } else if (inputVal > 50) {
    sizeBox = 50;
  } else {
    sizeBox = inputVal;
  }
  const no = document.querySelector('.father');
  if (no.parentNode) {
    no.parentNode.removeChild(no);
    createPixelBoard();
  }
});

if (inputNum === 'oi') {
  cores[0] = 'oi';
  createColorPalet(colors);
}
