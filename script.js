window.onload = function (){
  paletaDeCores(["black", "red", "green", "blue"]);     
}

//PALETA DE CORES - PIXELCOLOR*************
let colorPalette;
let palletItemDiv;
function paletaDeCores(colors){ 
  let colorPalette = document.getElementById("color-palette");
  for(let index in colors){
    let palletItemDiv = coresDaPaleta(colors[index]);
    colorPalette.appendChild(palletItemDiv);
  }
}
let pixelColor;
function coresDaPaleta(color){
  let pixelColor = document.createElement("div");
  pixelColor.style.backgroundColor = color;
  pixelColor.classList = "color";
  pixelColor.addEventListener("click", selecionarCores);
  if (color === "black"){
    pixelColor.classList.add("selected")
  }
  return pixelColor;
}
let div;
let backgroudColor;
let pixelColorSelected;
let pixelColorNew;
function selecionarCores(event){ 
  let div = event.target
  let backgroudColor = div.style.backgroundColor;
  let pixelColorSelected = document.querySelector(".selected");
  let pixelColorNew = event.target;
  pixelColorSelected.classList.remove("selected");
  pixelColorNew.classList.add("selected");
}
let corMarcada = pixelColorNew;
//PALETA DE CORES - PIXELCOLOR*************

//PALETA LIMPA - PIXELPIXEL*-*************
function marcarPixelPixel(event){
  let pixelColorNew = event.target;
  pixelColorNew.style.backgroundColor = corMarcada;
}
let pixelBoardDiv = document.querySelector("#pixel-board");
pixelBoardDiv.addEventListener("click", marcarPixelPixel);

//BOTAO LIMPAR **********************
let clearBoard = document.getElementById("clear-board");
clearBoard.addEventListener("click", limparPaleta);
function limparPaleta(){
  let pixelPixel = document.getElementsByClassName("pixel");
  for (let c = 0; c < pixelPixel.length; c += 1){
    pixelPixel[c].style.backgroundColor = "white";
    }
}