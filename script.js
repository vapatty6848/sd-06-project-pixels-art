let color = ['black', 'blue', 'green', 'red'];
let paletContainer = document.getElementById('color-palette');
function createPalet(color){
  for (let i = 0; i < color.length; i += 1){
    let createDivPalet = document.createElement('div');
    createDivPalet.style.backgroundColor = color[i];
    createDivPalet.className = "color";
    paletContainer.appendChild(createDivPalet);
  }
}
onload = createPalet(color);

