window.onload = function () {

  createColorPallet(['black', 'red', 'blue', 'green'])

//Pega a paleta de cores e add os itens a paleta
  function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById("color-palette");

    for (let index in colors) {
    let palletItemDiv = createPalletItem(colors[index]);
    colorPalletContainer.appendChild(palletItemDiv);
    }
  }


//Criação dos itens da paleta (divs)
  function createPalletItem(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    paletteItemDiv.classList.add("palette-item");
    paletteItemDiv.classList.add("color");
    palletItemDiv.addEventListener("click", handlePalletItemEvent);

    if (color === "black") {
      palletItemDiv.classList.add("selected");
    }
    return palletItemDiv;
  }

//Quando clica, add o selected e retira da cor antiga
  function handlePalletItemEvent (event) {
    let oldSelectedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target;

    oldSelectedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected")
  }
  
  }
