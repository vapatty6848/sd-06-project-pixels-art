// 'greenyellow', 'orange', 'violet', 'cyan', 'blueviolet', 'chartreuse', 'chocolate', 'coral', 'gold', 'goldenrod', 'grey', 'black'
// variaveis
const colorPalette = document.querySelector('#color-palette');
const tableColor = document.getElementById('pixel-board');

const colors = ['black', 'blue', 'yellow', 'red'];

// functions and events
for (let i = 0; i < colors.length; i++) {
  const createBoxColor = document.createElement('li');
  createBoxColor.className = 'color';
  createBoxColor.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColor);
}

for (let i = 0; i < 5; i++) {
  const createTr = document.createElement('tr');
  createTr.className = 'tabela';
  tableColor.appendChild(createTr);
  for (let i = 0; i < 5; i++) {
    const createTd = document.createElement('td');
    createTd.className = 'pixel';
    createTr.appendChild(createTd);
  }
}
