window.onload = function () {

let corBlack = document.getElementById("black")
corBlack.classList.add("selected")
const cores = document.querySelectorAll(".color")
const pixel = document.querySelectorAll(".pixel")
const pixelQuadro = document.querySelector("#pixel-board")
let botaoApagar = document.querySelector("#clear-board")

botaoApagar.addEventListener("click", function () {
  pixelQuadro.style.backgroundColor = "white";
})
}
