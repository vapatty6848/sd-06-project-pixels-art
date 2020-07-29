


window.onload = function() {

// Chamar a função que vai adicionar os itens ao pallet, passando as cores.
  createColorPallet(['black', 'red', 'blue', 'green']);

// let selectedColor = 'black'
// selectedColor.classList.add('selected')
}

// Função para adicionar os itens ao pallet
function createColorPallet(colors) {
  let colorPalletContainer = document.querySelector('#color-palette');
  
  for (let index in colors) {
    let palletItemDiv = createPalletItem(colors[index]);
    colorPalletContainer.appendChild(palletItemDiv);
  }
}

// Função p/ criar, estilizar e adicionar escutador no elemento HTML (div).
function createPalletItem(color){
  let palletItemDiv = document.createElement('div');
  palletItemDiv.style.backgroundColor= color;
  palletItemDiv.classList.add('color');
  palletItemDiv.addEventListener('click', handlePalletItemEvent);
  //colorPalletContainer.addEventListener('click', handlePalletItemEvent);

  if (color === 'black') {
    palletItemDiv.classList.add('selected');
  }
  return palletItemDiv;
}

// função para tratar do evento
function handlePalletItemEvent(event) {
  let div = event.target;
  let backGroundColor = div.style.backgroundColor;
  console.log(backGroundColor)
}