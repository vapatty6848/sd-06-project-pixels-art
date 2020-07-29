window.onload = function () {
  const Palette = document.querySelector("#color-palette");
  const Board = document.getElementById("pixel-board");
  const Button = document.getElementById("clear-board");

  function classChange(event) {
    document.querySelector(".selected").classList.remove("selected");
    event.target.classList.add("selected");
  }
  Palette.addEventListener("click", classChange);

  function Coloring(event) {
    const selectedColor = document.querySelector(".selected").style
      .backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  }
  Board.addEventListener("click", Coloring);

  function clear() {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = "";
    }
  }
  Button.addEventListener("click", clear);
};
