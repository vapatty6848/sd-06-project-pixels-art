// 'greenyellow', 'orange', 'violet', 'cyan', 'blueviolet', 'chartreuse', 'chocolate', 'coral', 'gold', 'goldenrod', 'grey', 'black'
// variaveis
const colorPalette = document.querySelector('#color-palette');
const tableColor = document.getElementById('pixel-board');

const colors = ['black', 'blue', 'yellow', 'red'];

// functions and events
for (let i = 0; i < colors.length; i += 1) {
  const createBoxColor = document.createElement('li');
  createBoxColor.className = 'color';
  createBoxColor.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColor);
}
window.onload = function () {
  document.getElementsByClassName('color')[0].className += ' selected';
}

for (let i = 0; i < 5; i += 1) {
  const createTr = document.createElement('tr');
  createTr.className = 'tabela';
  tableColor.appendChild(createTr);
  for (let index = 0; index < 5; index += 1) {
    const createTd = document.createElement('td');
    createTd.className = 'pixel';
    createTr.appendChild(createTd);
  }
}
