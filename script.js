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
    let tamanho = parseInt(caixaTamanho.value);
    if(caixaTamanho.value === ""){
        alert("Board inválido!");
    } else {
        document.querySelector("#pixel-board").remove();
        let caixaPixelPai = document.createElement("div");
        caixaPixelPai.id = "pixel-board";
        document.querySelector("#container").appendChild(caixaPixelPai);
        for (let i = 0; i < tamanho; i++) {
            for (let i = 0; i < tamanho; i++) {
                let caixaPixel = document.createElement("div");
                caixaPixel.className = "pixel";
                document.querySelector("#pixel-board").appendChild(caixaPixel);
            }
            let pularLinha = document.createElement("br");
            document.querySelector("#pixel-board").appendChild(pularLinha);
        }
    }
})


