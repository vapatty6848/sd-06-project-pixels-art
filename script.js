window.onload = function () {

  populatePaletteItem(['black', 'blue', 'yellow', 'green']);
  populandoBoard(5, 5);

  //Lidando com a Paleta de Cores
  function populatePaletteItem(colors) {
    let paletteItemDiv = document.getElementById('color-palette');

    for (let index in colors) {
      let paletteItem = createPaletteItem(colors[index]);
      paletteItemDiv.appendChild(paletteItem);
    }
  }

  function createPaletteItem(color) {
    let paletteItemColor = document.createElement('div');
    paletteItemColor.className = "color";
    paletteItemColor.style.background = color;
    paletteItemColor.addEventListener('click', handleClick);

    if(color === 'black') {
      paletteItemColor.classList.add('selected');
    }
    return paletteItemColor;
  }

  function handleClick(event) {
    let oldClassSelected = document.querySelector('.selected');
    let currentSelected = event.target;

    oldClassSelected.classList.remove('selected');
    currentSelected.classList.add('selected');
  }

  //Lidando com o board
function populandoBoard (nLine, nColums){
  for (let index = 0; index < nColums; index += 1) {
    populandoUmLinha(nLine);
  }
}

  function populandoUmLinha (number) {
    let pixelLine = document.querySelector('#pixel-board');
    let br = document.createElement('br');
    for (let index = 0; index < number; index +=  1) {
      let pixelItem = createPixelItem();
      pixelLine.appendChild(pixelItem);
    }
    pixelLine.appendChild(br);
  }

  function createPixelItem() {
    let pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    return pixelDiv;
  }

}




// const black = document.getElementById('color-palette').firstElementChild;
// black.className = "color selected";
// // // const green = document.getElementById('color-palette').firstElementChild.nextElementSibling;
// // const yellow = document.getElementById('color-palette').lastElementChild;
// // const corClicada = document.getElementsByClassName('color');

// const colorPalette = document.querySelector('#color-palette');
// colorPalette.addEventListener('click', function (event) {
//   let selectedColor = document.querySelector('.color');
//   selectedColor.className = 'color selected'
// })


// // for (index = black; index = yellow; index = nextElementSibling) {
// //   black.index.addEventListener('click', function () {
// //     corClicada.index.className = "color selected";
// //   })
// // }
