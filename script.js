let selectedColor = 'black';

window.onload = function() {
  createColorPalette(['black', 'blue', 'green', 'yellow']);
}

//Create the palette color itens, inside the palette-container
function createColorPalette(colors) {
    let colorPaletteContainer = document.getElementById('color-palette');
    for (let index in colors) {
        let colorItensDiv = createPaletteItens(colors[index]);
        colorPaletteContainer.appendChild(colorItensDiv);
    }
}

function createPaletteItens(color) {
    let colorItensDiv = document.createElement('div');
    colorItensDiv.style.backgroundColor = color;
    colorItensDiv.className = 'color';
    colorItensDiv.addEventListener('click', handlePaletteItenEvent);

    if (color === 'black') {
        colorItensDiv.classList.add('selected');
    }

    return colorItensDiv;
}

function handlePaletteItenEvent(event) {
    let previousSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target //div selected

    previousSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');

    selectedColor = currentSelectedDiv.style.backgroundColor
}

//Change the clicked pixel color inside the board after selecting a color in the palette
function handlePixelCLick() {

}

let pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', function(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
})
  
//Clear the content from the pixel board
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function() {
  let allPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
})