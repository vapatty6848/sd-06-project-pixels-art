let selectedColor = "black";

window.onload = function () {

  createColorPallet(['black', 'blue', 'red', 'green'])

  function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById("color-palette");

    for (let i in colors) {
      let palletItemDiv = createPalletItem(colors[i]);
      colorPalletContainer.appendChild(palletItemDiv);
    }
  }

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

  function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target;

    oldSelectedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected");

    selectedColor = currentSelectedDiv.style.backgroundColor;
  }


  function handlePixelClick(event) {
    let selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
  }

  let pixelBoardDiv = document.querySelector("#pixel-board");
  pixelBoardDiv.addEventListener("click", handlePixelClick)


  let button = document.querySelector('#clear-board');
  let pixelSize = document.getElementsByClassName('pixel');
  button.addEventListener("click", function () {
    for (let i = 0; i < pixelSize.length; i += 1) {
      pixelSize[i].style.backgroundColor = "white";
    }
  })

}    