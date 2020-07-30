// Variaveis

const paletColor = document.querySelector('#color-palette');
const arrayCollor = ['black', 'red', 'blue', 'yellow'];

for (let index = 0; index < arrayCollor.length; index += 1){
  const createBoxCollor = document.createElement('li');
  createBoxCollor.className = 'color';
  createBoxCollor.style.backgroundColor = arrayCollor[index];
  createBoxCollor.setAttribute('id', arrayCollor[index])
  paletColor.appendChild(createBoxCollor);
}

const tableCollor = document.querySelector('#pixel-board');

for(let i = 0; i < 5; i += 1) {
  const createBoxLine = document.createElement('tr');
  createBoxLine.className = 'pixel-line';
  tableCollor.appendChild(createBoxLine);
  for(let c = 0; c < 5; c+= 1) {
    const createBoxCl = document.createElement('td');
    createBoxCl.className = 'pixel';
    createBoxLine.appendChild(createBoxCl);
  }
}

window.onload = function () {
  const initialColor = document.getElementById('black');
  initialColor.className += ' selected';
}

function colorSelect() {
  const colorselected

}
