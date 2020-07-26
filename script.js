// Starting Pixel Art
let btnColorBlack = document.querySelector(".black");
btnColorBlack.addEventListener("click", function () {
  addColorSelected("black");
});

let btnColorRed = document.querySelector(".red");
btnColorRed.addEventListener("click", function () {
  addColorSelected("red");
});

let btnColorGreen = document.querySelector(".green");
btnColorGreen.addEventListener("click", function () {
  addColorSelected("green");
});

let btnColorBlue = document.querySelector(".blue");
btnColorBlue.addEventListener("click", function () {
  addColorSelected("blue");
});

function addColorSelected(color) {
  removeColorSelected();
  let element = document.querySelector("." + color);
  element.className = "color " + color + " selected";
}

function removeColorSelected() {
  let element = document.querySelector(".selected");
  element.classList.remove("selected");
}
