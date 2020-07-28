// variaveis
const colorPalette = document.querySelector('#color-palette');
let colors = ['blue', 'green', 'greenyellow', 'yellow', 'red', 'orange', 'violet', 'cyan', 'blueviolet', 'chartreuse', 'chocolate', 'coral', 'gold', 'goldenrod', 'grey', 'black'];

// functions and events
for (const i in colors) {
  let createBoxColor = document.createElement('li');
  createBoxColor.className = 'color';
  createBoxColor.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColor);
}
