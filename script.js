let pixelAmount = 25;
const colors = ['black','red','blue','green'];
const pixelBoard = document.getElementsByClassName("pixel");

//Chamadas
createPaletteColorsMenu(colors);
createPixelBoard(pixelAmount);
coloringPixelBoard(pixelBoard);

//Aqui eu crio a paleta de cores
function createPaletteColorsMenu(colors){
  let colorDivContainer = document.getElementById("color-palette");
  
  for(index in colors){
    let palletDivItem = createPaletteItem(colors[index]);
    colorDivContainer.appendChild(palletDivItem);
  }
}

//Cria o item da paleta de cores
function createPaletteItem(colors){
  let palletDivItem = document.createElement("div");
  palletDivItem.style.backgroundColor = colors;
  palletDivItem.className = "color";
  palletDivItem.addEventListener("click", getColorFromPalette);
  
  if(colors == "black"){
    palletDivItem.classList.add("selected");
  }

  return palletDivItem;
}

//Função que seleciona a cor da paleta de cores e retorna a cor selecionada
function getColorFromPalette(){
  let oldSelectedDiv = document.querySelector('.selected');
  let newSeletectedDiv = event.target;

  oldSelectedDiv.classList.remove('selected');
  newSeletectedDiv.classList.add('selected');
  return newSeletectedDiv
}

//Aqui eu crio o quadro de pixels e preencho com a cor selecionada
function createPixelBoard(pixelAmount){
  let getPixelBoardDiv = document.getElementById("pixel-board");

  for(let i = 0; i < pixelAmount; i++){
    let createPixel = document.createElement("div");
    createPixel.classList.add("pixel");
    getPixelBoardDiv.appendChild(createPixel);
  }
}

//Itera pelo pixel board e colore com a cor desejada
function coloringPixelBoard(pixelBoard){

  for(let i = 0; i < pixelBoard.length; i++){
    pixelBoard[i].addEventListener("click", function(){
      let colorSelected = document.getElementsByClassName("selected")[0];
      pixelBoard[i].style.backgroundColor = colorSelected.style.backgroundColor;
    });
  }
}