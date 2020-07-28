// Variaveis //
const colorPalette = document.getElementById('color-palette');
const colors = ['blue', 'green', 'red', 'yellow'];

// Funções e Eventos

for (const i in colors) {
  let createBoxColors = document.createElement('li');
  createBoxColors.className = 'color';
  createBoxColors.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColors);
}
