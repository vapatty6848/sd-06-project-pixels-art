let corPreta = document.querySelector("#black");
let corVermelha = document.querySelector("#red");
let corAzul = document.querySelector("#blue");
let corVerde = document.querySelector("#green");

function removeClassSelected () {
  let marcadoComSelected = document.getElementsByClassName('selected');
  if (marcadoComSelected.item(0) === document.querySelector("#black")) {
    corPreta.classList.remove("selected")
  }
  if (marcadoComSelected.item(0) === document.querySelector("#red")) {
    corVermelha.classList.remove("selected")
  }
  if (marcadoComSelected.item(0) === document.querySelector("#blue")) {
    corAzul.classList.remove("selected")
  }
  if (marcadoComSelected.item(0) === document.querySelector("#green")) {
    corVerde.classList.remove("selected")
  }
}
//Eventos de Clique Paleta-----------------------------------INÍCIO
corPreta.addEventListener("click", function(){
    removeClassSelected ();
    corPreta.classList.add("selected");
});

corVermelha.addEventListener("click", function(){
    removeClassSelected ();
    corVermelha.classList.add("selected");
});

corAzul.addEventListener("click", function(){
    removeClassSelected ();
    corAzul.classList.add("selected");
});

corVerde.addEventListener("click", function(){
    removeClassSelected ();
    corVerde.classList.add("selected");
});
//-------------------------------------------------Eventos de clique Paleta FIM