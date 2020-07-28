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

let N = 5
let pixelBoard = document.getElementById('pixel-board');
function createPixelBoard(N){
  for(let i = 1; i <= N; i += 1){
    let createDivTr = document.createElement('div');
    createDivTr.className = "tr";
    pixelBoard.appendChild(createDivTr);
    for (let i = 1; i <= N; i += 1){
    let createDivPixel = document.createElement('div');
    createDivPixel.style.backgroundColor = "white";
    createDivPixel.className = "pixel";
    createDivTr.appendChild(createDivPixel);
    }
  }  
}
onload= createPixelBoard(N);

function blackSelectedOnload(){
  let blackFather = document.getElementById('color-palette');
  blackFather.firstChild.className += " selected";
}
onload = blackSelectedOnload();