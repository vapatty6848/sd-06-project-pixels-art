function getColor(event,  elementToCopy) {
  let elemento = event.target;
  let storage = elemento.style.backgroundColor;
  return  storage
}

function setColor(event,  elementToChange) {
  let elementoAtual = event.currentTarget;
  elementoAtual.style.backgroundColor = colorStoraged;
  return colorStoraged
}

function CreateRows(NumberOfRows) {
  for(let i = 0; i < NumberOfRows;i += 1){
    let board = document.querySelector('#pixel-board');
    let linha = document.createElement("div");
    linha.className = 'row';
    board.appendChild(linha);
    CreateElements(NumberOfRows,linha)
  }
}

function CreateElements(NumberOfElements,Row) {
  for(let x = 0;x < NumberOfElements;x +=1) {
    let element = document.createElement("div");
    element.className = 'pixel';
    Row.appendChild(element);
  }
}

function RemoveCurrentBoard() {
  let Currentboard =  document.querySelector('.brush-body');
  while (Currentboard.firstChild) {
    Currentboard.removeChild(Currentboard.firstChild);

  }
}

function CreateBoard() {
  let inputValue = document.querySelector('#board-size').value;
  if(inputValue < 5){inputValue = 5;}
    else if(inputValue > 50){inputValue = 50;}
  CreateRows(inputValue)
  let classPixels = document.querySelectorAll('.pixel');
  let clearButton = document.querySelector('.clear');
  initPixelColor(classPixels);
  BoardEvents(classPixels);
  ButtonsEvents(clearButton,classPixels,ClearBoard);
  }


function ClearBoard(colors){
  for(let i = 0;i < colors.length;i += 1) {
    let color = colors[i];
    if(color.style.backgroundColor !== undefined) {
      color.style.backgroundColor = 'white';
    }
  }
}

function setClass(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.currentTarget.classList = `${event.currentTarget.className} selected`;
}
//init events
function PaletteEvents(colors) {
  for(let i in colors) {
    let color = colors[i];
    if(color.className !== undefined){
      add(color,'click',getColor,color);
      addClassEvent(color,'click',setClass);


    }
  }
}

function BoardEvents(pixels) {
  for(let i in pixels) {
    pixel = pixels[i]
    if(pixel.className !== undefined)
      add(pixel,'click',setColor,pixel);
  }
}

function ButtonsEvents(clearButton,board) {
  addButtonEvent(clearButton,'click',ClearBoard,board);
}
function VqvEvents(vqvButton) {
  vqvButton.addEventListener('click',function(){
    RemoveCurrentBoard();
    CreateBoard();
  })
}
//initiate palette and pixels

function initPixelColor(pixelsColors) {
  colors = pixelsColors;
  ClearBoard(colors);
}


function initPalleteColor(paletteColors) {
  paletteColors[0].style.backgroundColor = 'black';
  colorStoraged = 'black';
  for(let i = 1 ; i < paletteColors.length; i += 1) {
    let paletteColor = paletteColors[i];
    if(paletteColor.style.backgroundColor !== undefined){
      paletteColor.style.backgroundColor = generateRandomColor();
    }
  }
}



// for(let i in classPixel)

// add($('.pixel'),'click',setColor,colorStoraged,$('.pixel'));


