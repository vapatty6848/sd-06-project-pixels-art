// Variaveis //
const colorPalette = document.getElementById('color-palette');
const colors = ['black', 'green', 'red', 'blue'];
const pixelBoard = document.getElementById('pixel-board');
// Funções e Eventos

for (const i in colors) {
  const createBoxColors = document.createElement('li');
  createBoxColors.className = 'color';
  createBoxColors.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColors);
}

  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('div');
    linha.className = 'line';
    pixelBoard.appendChild(linha);
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'colun';
      pixel.id = 'pixel';
      pixelBoard.appendChild(pixel);
    }
  }
