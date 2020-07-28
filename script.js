window.onload = function () {
  createColorPallet(['black', 'red', 'blue', 'green'])
  pixelsBoard(5);
}
let pixelBoardDiv = document.querySelector("#pixel-board");
let btn = document.querySelector('#clear-board');
let pixel = document.getElementsByClassName('pixel');
function createColorPallet(colors) {
  let colorPalletContainer = document.getElementById("color-palette");
  for (let index in colors) {
    let palletItemDiv = createPalletItem(colors[index]);
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
pixelBoardDiv.addEventListener("click", handlePixelClick)
btn.addEventListener("click", function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = "white";
  }
})