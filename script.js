
const pixelBoard = document.querySelector('#pixel-board');
const colorPalet = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const btnShow = document.querySelector('#generate-board');
const inputNum = document.querySelector('#board-size');
let classSel = 'black';
let sizeBox = 5;
let cores = ['black','blue', 'yellow','green' ];

function randomColors() {
  
  const cores2 = ['purple','gray','pink','orange']
    let randomNum = Math.floor((Math.random() * 4));
    cores.push(cores2[randomNum]);
}

function createPalletItem(color) {
  let palletItemDiv = document.createElement('div');
  palletItemDiv.classList.add(color)
  palletItemDiv.classList.add('color')
  if (palletItemDiv.classList.contains('black')) {
    palletItemDiv.classList.add('selected')
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

colorPalet.addEventListener('click', function (event) {
  classSel = event.target.classList[0];
  document.querySelectorAll('.color').forEach((element) => {
    if (element.classList.contains('selected')) {
      element.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
});

pixelBoard.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.className = '';
    event.target.classList.add('pixel');
    event.target.classList.add(classSel);
    event.target.classList.remove('bgbranco');
  }
});

btnClear.addEventListener('click', function () {
  document.querySelectorAll('.pixel').forEach((element) => {
    if (element.classList.contains('pixel')) {
      element.className = 'pixel bgbranco';
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
