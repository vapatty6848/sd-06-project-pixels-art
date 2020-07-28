window.onload = function () {
  let selectedColor = 'black';

  // Passando array de cores como parâmetro
  createColorPallet(['black', 'red', 'blue', 'green']);

  function createColorPallet(colors) {
    const colorPalletContainer = document.getElementById('color-palette');

    for (let index in colors) {
      const palletItemDiv = createPalletItem(colors[index]);
      colorPalletContainer.appendChild(palletItemDiv);
    }
  }
  // Criando divs da paleta de cores
  function createPalletItem(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = 'color';
    palletItemDiv.addEventListener('click', handlePalletItemEvent);

    if (color === 'black'){
      palletItemDiv.classList.add('selected');
    }
    return palletItemDiv;
  }

    // Mudando o selected da paleta de cores
    function handlePalletItemEvent(event){
      const oldSelectedDiv = document.querySelector('.selected');
      const currentSelectedDiv = event.target;
      oldSelectedDiv.classList.remove('selected');
      currentSelectedDiv.classList.add('selected');  
      selectedColor = currentSelectedDiv.style.backgroundColor;
    }

    function handlePixelClick(event) {
      let selectedPixelDiv = event.target;
      selectedPixelDiv.style.backgroundColor = selectedColor;
    }
  
    const pixelBoardDiv = document.querySelector('#pixel-board');
    pixelBoardDiv.addEventListener('click', handlePixelClick)
  
    // Limpar tela
    let btn = document.querySelector('#clear-board');
    let pixel = document.getElementsByClassName('pixel');
    btn.addEventListener('click', function () {
      for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = 'white';
      }
    })
}