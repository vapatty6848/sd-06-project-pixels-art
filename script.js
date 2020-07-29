window.onload = function () {
  const blackColor = document.getElementById("black");
}

const mainPalette = document.getElementById("color-palette");

// Opção para facilitar a adição de novas cores;

// function selectColor(numbersColor) {
//   for (let index = 0; index < (numbersColor - 1); index += 1) {
//     const palette = document.getElementById("color-palette");
//     const color = document.createElement("div");
//     palette.appendChild(color);
//     color.className = "color";
//   }
// }
// kindColor(4);

function boxGrid(numberElements) {
  for (let index = 0; index < (numberElements**2); index += 1) {
    const grid = document.getElementById("pixel-board");
    const pixel = document.createElement("div");
    grid.appendChild(pixel);
    pixel.className = "pixel";
  }
}
boxGrid(5);

function selectColor() {
  const selectedColor = document.querySelector(".selected");
  selectedColor.classList.remove("selected");
  event.target.classList.add("selected");
}

mainPalette.addEventListener("click", selectColor);

// const btnClear = document.querySelector("#clear-board");
// btnClear.addEventListener('click', function () {
//   alert("funcionando!");
// })
