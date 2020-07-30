// Variaveis

const paletColor = document.querySelector('#color-palette');
const arrayCollor = ['black', 'red', 'blue', 'yellow'];

for (let i = 0; i < arrayCollor.length; i += 1){
  const createBoxCollor = document.createElement('li');
  createBoxCollor.className = 'color-palette-item';
  createBoxCollor.style.backgroundColor = arrayCollor[i];
  paletColor.appendChild(createBoxCollor);
}
