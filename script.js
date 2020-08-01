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



    let corClasse = document.querySelectorAll(".color")
    let selectedColor = document.querySelector(".selected")

    document.querySelectorAll(".color").forEach(item => {

        item.addEventListener("click", function() {
            item.add.classList(".selected")
            document.querySelectorAll(".selected")
        })

    })

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

            palleteItemDiv.classList.add(".selected");
        }

        return palleteItemDiv;
    }

}

function palleteItemEvent() {

    let OldSelectedDiv = document.querySelector(".selected");


    let divCurrentSelectedDiv = event.target;

    let backgroundColor = div.style.backgroundColor;



}