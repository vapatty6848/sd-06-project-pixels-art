let selectedColor = "black"
window.onload = function () {
  //add cor
document.getElementsByClassName('color')[0].style.backgroundColor="black";
document.getElementsByClassName('color')[1].style.backgroundColor="red";
document.getElementsByClassName('color')[2].style.backgroundColor="blue";
document.getElementsByClassName('color')[3].style.backgroundColor="green";

//clicando
let listen = document.querySelector('#color-palette');
listen.addEventListener("click", handlePalletItemEvent);

// função para disparar o evento e trocar a classe selected para a que for clicada
function handlePalletItemEvent() {
let oldSelectedDiv = document.querySelector(".selected");
let currentSelectedDiv = event.target

oldSelectedDiv.classList.remove("selected");
currentSelectedDiv.classList.add("selected")

selectedColor = currentSelectedDiv.style.backgroundColor;
}

// colorindo os pixels
function handlePixel(event) {
    let selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
}

// individualizando os pixels para colorir
let pixelBoardDiv= document.getElementById("pixel-board");
pixelBoardDiv.addEventListener("click", handlePixel)   


// Button reset color
let buttonReset = document.querySelector('#clear-board');
buttonReset.addEventListener('click', function() {
  let colorPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < colorPixels.length; index += 1) {
    colorPixels[index].style.backgroundColor = 'white';
  }
})
}