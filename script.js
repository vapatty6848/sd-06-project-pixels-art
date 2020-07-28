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
function PalleteEvents(colors) {
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


