//Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.///


// window.onload = function() {
//     const pixels = document.getElementsByClassName('pixel');
//     const colorBlack = document.querySelector('#black');
//     const colorRed = document.querySelector('#red');
//     const colorBlue = document.querySelector('#blue');
//     const colorGreen = document.querySelector('#green');


// }

window.onload = function() {

    createColorPallet(['black', 'red', 'blue', 'yellow']);

    createPixelsBoard(5, 5);




}



function createColorPallet(colors) {

    let colorPallet = document.getElementById("color-palette");

    for (let index in colors) {

        let palleteItemDiv = createPalleteItem(colors[index]);
        colorPallet.appendChild(palleteItemDiv);


    }

    function createPalleteItem(color) {

        let palleteItemDiv = document.createElement("div");

        palleteItemDiv.style.backgroundColor = color;


        palleteItemDiv.className = "color";

        palleteItemDiv.addEventListener("click", palleteItemEvent);

        if (color === "black") {

            palleteItemDiv.classList.add("selected");
        }

        return palleteItemDiv;
    }

}

function palleteItemEvent() {

    let OldSelectedDiv = document.querySelector(".selected");
    let divCurrentSelectedDiv = event.target;

    OldSelectedDiv.classList.remove("selected");

    divCurrentSelectedDiv.classList.add("selected");

    let backgroundColor = divCurrentSelectedDiv.style.backgroundColor;
}

function createPixelsBoard(lines, columns) {

    let DivPixelsBoard = document.querySelector("#pixel-board");

    for (let index = 0; index < lines; index++) {

        var divLine = document.createElement("div");
        divLine.classList.add('divLine')

        for (let index = 0; index < columns; index++) {
            let divPixels = document.createElement("div");
            divPixels.className = "pixel";
            divLine.appendChild(divPixels);
        }
        DivPixelsBoard.appendChild(divLine);
    }



}