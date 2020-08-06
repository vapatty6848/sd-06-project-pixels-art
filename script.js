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
            divPixels.addEventListener("click", handleClick)
            divLine.appendChild(divPixels);
        }
        DivPixelsBoard.appendChild(divLine);
    }

    function handleClick() {
        let receivePalette = document.querySelector(".selected");
        let paletteColor = receivePalette.style.backgroundColor;
        event.target.style.backgroundColor = paletteColor;
    }
} 