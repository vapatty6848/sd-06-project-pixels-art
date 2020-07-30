let color = ['black'];
for(let i = 1; i <= 3; i += 1){
let randonTest = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
color.push(randonTest);
}

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

function removeClass(){
  document.querySelectorAll('.color')[0].className = "color";
  document.querySelectorAll('.color')[1].className = "color";
  document.querySelectorAll('.color')[2].className = "color";
  document.querySelectorAll('.color')[3].className = "color";
}

let selectedColor = document.querySelector('.color').style.backgroundColor;
document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', event => {
    removeClass();
    item.classList.add("selected");
    selectedColor = item.style.backgroundColor;
  })
})

function addClickChangeColor(){
  document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', event => {
    item.style.backgroundColor = selectedColor;
  })
})
}
onload = addClickChangeColor();

document.getElementById('clear-board').addEventListener('click', function(){
  document.querySelectorAll('.pixel').forEach(item => {
    item.style.backgroundColor = 'white';
  })
})

function resetBoard(){
  document.querySelectorAll('.tr').forEach(item => {
    item.remove();
  })
}
document.getElementById('generate-board').addEventListener('click', function(){
  let inputValue = document.getElementById('board-size').value
  if(inputValue == ""){
    alert('Board inválido!');
  } else if(inputValue < 5){
    N = 5;
    resetBoard();
    createPixelBoard(N);
    addClickChangeColor();
  } else if(inputValue > 50){
    N = 50;
    resetBoard();
    createPixelBoard(N);
    addClickChangeColor();
  } else {
    N = inputValue;
    resetBoard();
    createPixelBoard(N);
    addClickChangeColor();
  }
})

