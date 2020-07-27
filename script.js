window.onload = function () {

let corBlack = document.getElementById("black")
corBlack.classList.add("selected")
const cores = document.querySelectorAll(".color")
const pixel = document.querySelectorAll(".pixel")
let botaoApagar = document.querySelector("#clear-board")

botaoApagar.addEventListener("click", function () {
  pixel.style.backgroundColor = "white";
})
}
