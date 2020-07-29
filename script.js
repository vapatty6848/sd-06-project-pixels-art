window.onclick = function() {
    let selection = document.querySelector(".selected");
    if(event.target.className === "color") {
        event.target.classList.add("selected");
        selection.classList.remove("selected");
        selection = document.querySelector(".selected");
    }
    if(event.target.className === "pixel") { 
        event.target.style.backgroundColor = selection.id;
    }
}
const all = document.querySelectorAll(".pixel");
function limpar(){
    for (let i = 0; i < all.length; i += 1) {
        all[i].style.backgroundColor = "white";
    }
}
const botaoLimpar =  document.querySelector("#clear-board");
botaoLimpar.addEventListener("click", limpar);
const botaoBorda = document.querySelector("#generate-board");
botaoBorda.addEventListener("click", function() {
    const caixaTamanho = document.querySelector("#board-size");
    if(caixaTamanho.value === ""){
        alert("Board inválido!");
    }
    for (let i = 0; i < all.length; i += 1) {
        all[i].style.width = caixaTamanho.value + "px";
        all[i].style.height = caixaTamanho.value + "px";
    }
    limpar();
})


