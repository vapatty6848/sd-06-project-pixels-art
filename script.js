window.onload = function () {

let corBlack = document.getElementById("black")
corBlack.classList.add("selected")
const cores = document.querySelectorAll(".color")

function addSelectedClass(cor, div) {
  corBlack = cor;
  const selecionado = document.getElementsByClassName('selected')[0];
  selecionado.classList.remove('selected');
  div.classList.add('selected');

}
return addSelectedClass;
}
