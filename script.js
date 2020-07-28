//Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.///



window.onload

let pintar = "black";

function(event) {


    let black = document.getElementById("black");

    black.classList.add("selected")

    black.addEventListener("click", colorBlack)
}

function addText(event) {
    var conteudo = event.target.value;
    var getDiv = document.getElementById("meme-text");
    getDiv.innerHTML = conteudo;


}



function createColorPallet(colors) {

    let colorPallet = document.getElementById("color-pallete");

    for (let index in colors) {

        let pixelsColor = createPalleteItem(colors[index]);


    }

    function createPalleteItem(color) {

        let palleteItemDiv = Document.createElement("div");

        palleteItemDiv.style.backgroundColor = color;

        palleteItemDiv.classList.add("palleteItem");

        palleteItemDiv.addEventListener("click", palleteItemEvent);



    }
}

function palleteItemEvent() {



}