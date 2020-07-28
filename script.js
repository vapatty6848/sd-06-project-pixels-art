window.onload = function() {

  createColorPallet(['black', 'blue', 'blueviolet', 'pink']);

}

//Pega a paleta de cores e add os itens a paleta
function createColorPallet(colors) {
  let colorPalletContainer = document.getElementById("color-palette");
  for (let i in colors) {
    let palletColorDiv = createPalletItem(colors[i]);
    colorPalletContainer.appendChild(palletColorDiv);
  }
}

//Criação dos itens da paleta (divs)
function createPalletItem(color) {
  let palletColorDiv = document.createElement('div');
  palletColorDiv.style.backgroundColor = color;
  palletColorDiv.className = "color";
  palletColorDiv.addEventListener("click", handlePalletColorEvent);
    if (color === "black") {
      palletColorDiv.classList.add("selected");
    }
  return palletColorDiv;
}

//Quando clica, add o selected e retira da cor antiga
function handlePalletColorEvent (event) {
  let oldSelectedDiv = document.querySelector(".selected");
  let currentSelectedDiv = event.target;

  oldSelectedDiv.classList.remove("selected");
  currentSelectedDiv.classList.add("selected");
}

// Botão reset
function resetPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#white';
  }
}