window.onload = function () {

let corBlack = document.getElementById("black")
corBlack.classList.add("selected")

//add classe selected ao elemento que recebeu um clique
//remover classe selected dos outros elementos

let corClasse = document.querySelectorAll('.color')
let estiloComputado = window.getComputedStyle(corClasse, null).getPropertyValue("background-color")
let selectedColor = document.querySelector(".selected")

document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click',function (){
    corClasse.add.classList("selected")
    document.querySelectorAll(".selected").remove.classList("selected")
  })
})


}
