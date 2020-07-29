// 'greenyellow', 'orange', 'violet', 'cyan', 'blueviolet', 'chartreuse', 'chocolate', 'coral', 'gold', 'goldenrod', 'grey', 'black'
// variaveis
const colorPalette = document.querySelector('#color-palette');
const tableColor = document.getElementById('pixel-board');
const colorSelected = document.getElementsByClassName('color');
// const currentColor = document.querySelector('.selected').style.backgroundColor;

const colors = ['black', 'blue', 'yellow', 'red'];

// functions and events
for (let i = 0; i < colors.length; i += 1) {
  const createBoxColor = document.createElement('li');
  createBoxColor.className = 'color';
  createBoxColor.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColor);
}
window.onload = function () {
  colorSelected[0].className += ' selected';
};

for (let i = 0; i < 5; i += 1) {
  const createTr = document.createElement('tr');
  createTr.className = 'tabela';
  tableColor.appendChild(createTr);
  for (let index = 0; index < 5; index += 1) {
    const createTd = document.createElement('td');
    createTd.className = 'pixel';
    createTd.backgroundColor = 'white';
    createTr.appendChild(createTd);
  }
}

function changeSelected(select) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  select.className += ' selected';
}

colorPalette.addEventListener('click', function (e) {
  changeSelected(e.target);
  console.log(e.target);
});

tableColor.addEventListener('click', function (e) {
  e.target.style.backgroundColor = document.querySelector(
    '.selected'
  ).style.backgroundColor;
  
});
