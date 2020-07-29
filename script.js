let selectColor = 'black';

window.onload = function() {

  let colors = ['black', 'red', 'blue', 'green'];
  createColorPallet(colors);

  let pixelBoardDiv = document.querySelector('#pixel-board');
  pixelBoardDiv.addEventListener('click', handlePixelClick);

  //Limpar o pixelBoard
  let btn = document.querySelector('#clear-board');
  let pixel = document.querySelectorAll('.pixel');
  btn.addEventListener('click', function() {
    for (let i = 0; i < pixel.length; i+= 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  })

}

//Quando clica, add o select e retira da cor antiga
function handlePalletItemEvent(event) {
  let oldSelectedDiv = document.querySelector('.selected');
  let currentSelectedDiv = event.target;

  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');

  selectColor = currentSelectedDiv.style.backgroundColor;
  console.log(selectColor);
}

//Criação dos itens da paleta (divs)
function createPalletItem(color) {
  let palletItemDiv = document.createElement('div');
  palletItemDiv.style.background = color;
  palletItemDiv.className = 'color';
  palletItemDiv.addEventListener('click', handlePalletItemEvent);

  if (color === 'black') {
    palletItemDiv.classList.add('selected');
  }
  return palletItemDiv;
}

//Pega a paleta de cores e add os itens a paleta
function createColorPallet(colors) {
  let colorPalletContainer = document.getElementById('color-palette');

  for (let index in colors) {
    let palletItemDiv = createPalletItem(colors[index]);
    colorPalletContainer.appendChild(palletItemDiv);
  }
}

//Setar a cor na div selecionada
function handlePixelClick(event) {
  let selectPixelDiv = event.target;
  selectPixelDiv.style.backgroundColor = selectColor;
}
