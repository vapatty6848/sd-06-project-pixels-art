const pixelBoard = document.querySelector('#pixel-board');
const colorPalet = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const btnShow = document.querySelector('#generate-board');
const inputNum = document.querySelector('#board-size');
const sectionTable = document.querySelector('.sectionPB')
let classSel = 'preto';
let highBox = 5;
let sizeBox = 5;



function createPixelBoard() {
  if (highBox < 5) {
    highBox = 5;
    sizeBox = 5;
  }

  if (highBox > 50) {
    highBox = 50;
  }

  let createFather = document.createElement('section')
  pixelBoard.appendChild(createFather);
  createFather.setAttribute('class', 'father')
  for (let j = 0; j < highBox; j += 1) {
    let createSection = document.createElement('section');
    createSection.setAttribute('class', 'sectionPB');
    createFather.appendChild(createSection);
  }

  const sect = document.getElementsByClassName('sectionPB');
  for (let l = 0; l < highBox; l++) {
    for (let i = 0; i < sizeBox; i += 1) {
      let createDiv = document.createElement('div')
      createDiv.setAttribute('class', 'pixel bgbranco')
      sect[l].appendChild(createDiv);
    }
  }
}

colorPalet.addEventListener('click', function (event) {
  classSel = event.target.classList[1]
  for (const j of document.querySelectorAll('.color')) {
    if (j.classList.contains('selected')) {
      j.classList.remove('selected')
    }
  }
  event.target.classList.add('selected')
})

pixelBoard.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.className = '';
    event.target.classList.add('pixel')
    event.target.classList.add(classSel)
    event.target.classList.remove('bgbranco')
  }
})

btnClear.addEventListener('click', function () {
  for (const j of document.querySelectorAll('.pixel')) {
    if (j.classList.contains('pixel')) {
      j.className = 'pixel bgbranco'
    }
  }
})

btnShow.addEventListener('click', function () {
  if (inputNum.value === '') {
    alert('Board inválido!')
  } else {
    sizeBox = inputNum.value;
    highBox = inputNum.value;
    const no = document.querySelector('.father')
    if (no.parentNode) {
      no.parentNode.removeChild(no)
      createPixelBoard();
    }
  }
})