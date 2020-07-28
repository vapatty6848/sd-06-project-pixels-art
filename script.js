let pixelBoard = document.querySelector("#pixel-board");
let colorPalette = document.querySelector("#color-palette");


createPaletteColors("black", "red", "blue", "green");
createPixelBoard();
colorPalette.firstElementChild.classList.add("selected");



function createPaletteColors (color1, color2, color3, color4){
    let colorArray = [color1, color2, color3, color4];

    for (index = 0; index < colorArray.length; index += 1){
        let newDiv = document.createElement("div");
        colorPalette.appendChild(newDiv).className = "color";
        colorPalette.lastChild.style.backgroundColor = colorArray[index];

    }
}

function createPixelBoard(){
    for (index = 1; index <= 5; index += 1){
        let newLine = document.createElement("div");
        pixelBoard.appendChild(newLine).className = "board-line";
        for (internIndex = 1; internIndex <= 5; internIndex += 1){
            let newPixel = document.createElement("div");
            pixelBoard.lastChild.appendChild(newPixel).className = "pixel";
        }

    }
}