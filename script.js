window.onload = function () {


let color = document.querySelectorAll(".color")
let pixel = document.querySelectorAll(".pixel")

colorBlack = document.getElementById("black")

colorBlack.addEventListener("click", function () {
  const divSelect = document.getElementsByClassName('selected');
  const div = document.getElementsByClassName('color');
  divSelect.classList.remove('selected');
  div.classList.add('selected');
})


}
