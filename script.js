window.onload = function () {
    // passamos as cores do array
    createColorPalette(["black", "rgb(240, 49, 122)", "yellow", "purple"])

// função que cria um array de cores, para adicionar ao container color-palette
// criando uma div com as cores que passaram no for
function createColorPalette(colors){
    let  colorPaletteContainer = document.getElementById("color-palette")
    for(let index in colors) {
    let paletteItemDiv = createPaletteItem(colors[index]);
   colorPaletteContainer.appendChild(paletteItemDiv)
}
}
// criar o item de cada cor
function createPaletteItem(color) {
let paletteItemDiv = document.createElement("div");
paletteItemDiv.style.backgroundColor = color;
paletteItemDiv.classList.add("palette-item")
paletteItemDiv.classList.add("color")
paletteItemDiv.addEventListener("click", handlePalletItemEvent);

if (color === "black") {
    paletteItemDiv.classList.add("selected")
}
return paletteItemDiv
}
// função para disparar o evento e trocar a classe selected para a que for clicada
function handlePalletItemEvent() {
let oldSelectedDiv = document.querySelector(".selected");
let currentSelectedDiv = event.target

oldSelectedDiv.classList.remove("selected");
currentSelectedDiv.classList.add("selected")
}

// individualizando os pixels para colorir
let quadradinhos = document.querySelectorAll(".pixel");
    for (let index in quadradinhos){
    quadradinhos[index].addEventListener("click", function(){
    this.style.backgroundColor = document.querySelector(".selected").style.backgroundColor
    })
    }

// usando o botão para limpar todos os pixels
let botao = document.getElementById("clear-board");
function clearBoard() {
    let limpar = document.getElementsByClassName("pixel")
    for (let index = 0; index < limpar.length; index += 1) {
        limpar[index].style.backgroundColor = "white";
      }
}
 botao.addEventListener("click", clearBoard)
}
