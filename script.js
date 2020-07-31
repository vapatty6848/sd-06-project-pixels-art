//Variáveis
let corPreta = document.querySelector("#black");
let corVermelha = document.querySelector("#red");
let corAzul = document.querySelector("#blue");
let corVerde = document.querySelector("#green");

let botaoLimpa = document.querySelector("#clear-board");

let pixelInBoard = document.querySelectorAll(".pixel");

let arreiCores = ['black']


//Função de remover o Selected----------------------------INÍCIO
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
//-------------------------------------------Função de remover o Selected FIM
//Eventos de Clique Paleta-----------------------------------INÍCIO
corPreta.addEventListener("click", function(){
    removeClassSelected ();
    corPreta.classList.add("selected");
    arreiCores.push("black");
});

corVermelha.addEventListener("click", function(){
    removeClassSelected ();
    corVermelha.classList.add("selected");
    arreiCores.push("red");
});

corAzul.addEventListener("click", function(){
    removeClassSelected ();
    corAzul.classList.add("selected");
    arreiCores.push("blue");
});

corVerde.addEventListener("click", function(){
    removeClassSelected ();
    corVerde.classList.add("selected");
    arreiCores.push("green");
});
//-------------------------------------------------Eventos de clique Paleta FIM
//função para colorir pixel no clique-----------------------------------------
document.getElementById('quadro11').addEventListener('click',function(){
  document.getElementById('quadro11').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro12').addEventListener('click',function(){
  document.getElementById('quadro12').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro13').addEventListener('click',function(){
  document.getElementById('quadro13').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro14').addEventListener('click',function(){
  document.getElementById('quadro14').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro15').addEventListener('click',function(){
  document.getElementById('quadro15').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro21').addEventListener('click',function(){
  document.getElementById('quadro21').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro22').addEventListener('click',function(){
  document.getElementById('quadro22').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro23').addEventListener('click',function(){
  document.getElementById('quadro23').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro24').addEventListener('click',function(){
  document.getElementById('quadro24').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro25').addEventListener('click',function(){
  document.getElementById('quadro25').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro31').addEventListener('click',function(){
  document.getElementById('quadro31').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro32').addEventListener('click',function(){
  document.getElementById('quadro32').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro33').addEventListener('click',function(){
  document.getElementById('quadro33').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro34').addEventListener('click',function(){
  document.getElementById('quadro34').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro35').addEventListener('click',function(){
  document.getElementById('quadro35').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro41').addEventListener('click',function(){
  document.getElementById('quadro41').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro42').addEventListener('click',function(){
  document.getElementById('quadro42').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro43').addEventListener('click',function(){
  document.getElementById('quadro43').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro44').addEventListener('click',function(){
  document.getElementById('quadro44').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro45').addEventListener('click',function(){
  document.getElementById('quadro45').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro51').addEventListener('click',function(){
  document.getElementById('quadro51').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro52').addEventListener('click',function(){
  document.getElementById('quadro52').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro53').addEventListener('click',function(){
  document.getElementById('quadro53').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro54').addEventListener('click',function(){
  document.getElementById('quadro54').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
document.getElementById('quadro55').addEventListener('click',function(){
  document.getElementById('quadro55').style.backgroundColor = arreiCores[(arreiCores.length)-1]
});
//---------------------------------------------fim da função para colorir pixel

///----------------------------Função colore Pixel
botaoLimpa.addEventListener('click',function(){
    document.getElementById('quadro11').style.backgroundColor = 'white'
    document.getElementById('quadro12').style.backgroundColor = 'white'
    document.getElementById('quadro13').style.backgroundColor = 'white'
    document.getElementById('quadro14').style.backgroundColor = 'white'
    document.getElementById('quadro15').style.backgroundColor = 'white'
    document.getElementById('quadro21').style.backgroundColor = 'white'
    document.getElementById('quadro22').style.backgroundColor = 'white'
    document.getElementById('quadro23').style.backgroundColor = 'white'
    document.getElementById('quadro24').style.backgroundColor = 'white'
    document.getElementById('quadro25').style.backgroundColor = 'white'
    document.getElementById('quadro31').style.backgroundColor = 'white'
    document.getElementById('quadro32').style.backgroundColor = 'white'
    document.getElementById('quadro33').style.backgroundColor = 'white'
    document.getElementById('quadro34').style.backgroundColor = 'white'
    document.getElementById('quadro35').style.backgroundColor = 'white'
    document.getElementById('quadro41').style.backgroundColor = 'white'
    document.getElementById('quadro42').style.backgroundColor = 'white'
    document.getElementById('quadro43').style.backgroundColor = 'white'
    document.getElementById('quadro44').style.backgroundColor = 'white'
    document.getElementById('quadro45').style.backgroundColor = 'white'
    document.getElementById('quadro51').style.backgroundColor = 'white'
    document.getElementById('quadro52').style.backgroundColor = 'white'
    document.getElementById('quadro53').style.backgroundColor = 'white'
    document.getElementById('quadro54').style.backgroundColor = 'white'
    document.getElementById('quadro55').style.backgroundColor = 'white'
});
