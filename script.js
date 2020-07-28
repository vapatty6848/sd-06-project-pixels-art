
function clickPixel(event) {
  event.target.classList.remove('selected', 'two', 'three', 'four');
  event.target.classList.add(sessionStorage.getItem('class'));
}
function selectColor(event) {
  switch (event.target.classList[1]) {
    case 'two':
      sessionStorage.setItem('class', 'two');
      break;
    case 'three':
      sessionStorage.setItem('class', 'three');
      break;
    case 'four':
      sessionStorage.setItem('class', 'four');
      break;
    default:
      sessionStorage.setItem('class', 'selected');
  }
}
function clearBoard() {
  for (const element of document.getElementsByClassName('pixel')) {
    element.classList.remove('selected', 'two', 'three', 'four');
  }
}
function setBlackColor() {
  sessionStorage.setItem('class', 'selected');
}
function setBoardSize() {
  let size = parseInt(document.getElementById('board-size').value);
  if (document.getElementById('board-size').value === '') {
    alert('Board inválido!')
  } else if (size < 5) {
    size = 5;
    for (let element of document.getElementsByClassName('pixel')) {
      element.style.height = size + 'px';
      element.style.width = size + 'px';
      element.classList.remove('selected', 'two', 'three', 'four');
    }
  } else if (size > 60) {
    size = 60;
    for (let element of document.getElementsByClassName('pixel')) {
      element.style.height = size + 'px';
      element.style.width = size + 'px';
      element.classList.remove('selected', 'two', 'three', 'four');
    }
  } else {
    for (let element of document.getElementsByClassName('pixel')) {
      element.style.height = size + 'px';
      element.style.width = size + 'px';
      element.classList.remove('selected', 'two', 'three', 'four');
    }
  }
  setBlackColor();
}
setBlackColor();
window.onload = function () {
  document.getElementById('pixel-board').addEventListener('click', clickPixel);
  document.getElementById('color-palette').addEventListener('click', selectColor);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
  document.getElementById('generate-board').addEventListener('click', setBoardSize);
}
