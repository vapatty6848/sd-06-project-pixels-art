window.onload = function () {
  let selectedColor = 'black';

  //Passando array de cores como parâmetro
  createColorPallet(['black', 'red', 'blue', 'green']);

  function createColorPallet(colors){
    let colorPalletContainer = document.getElementById("color-palette");

    for (let index in colors) {
      let palletItemDiv = createPalletItem(colors[index]);
      colorPalletContainer.appendChild(palletItemDiv);
    }
  }
  //Criando divs da paleta de cores
  function createPalletItem(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = "color";
    palletItemDiv.addEventListener("click", handlePalletItemEvent);

    if (color === "black") {
      palletItemDiv.classList.add("selected");
    }
    return palletItemDiv;
  }

    //Mudando o selected da paleta de cores
    function handlePalletItemEvent(event) {
      let oldSelectedDiv = document.querySelector(".selected");
      let currentSelectedDiv = event.target;
      oldSelectedDiv.classList.remove("selected");
      currentSelectedDiv.classList.add("selected");
  
      selectedColor = currentSelectedDiv.style.backgroundColor;
    }
  
    //Limpar tela
    let btn = document.querySelector('#clear-board');
    let pixel = document.getElementsByClassName('pixel');
    btn.addEventListener('click', function (params) {
      for (let index = 0; index < pixel.length; index++) {
        pixel[index].style.backgroundColor = 'white';
      }
    })
}