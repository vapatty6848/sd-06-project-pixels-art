window.onload = function() {
    createColorPallet(colors);
    pixelsOfBoard(number);
};

let selectedColor = "black";
let colors = ["black", "red", "blue", "green"];
let numbers = 5;
let pixelBoardDiv = document.querySelector("#pixel-board");
let btn = document.querySelector("#clear-board");
let pixel = document.getElementsByClassName("pixel");

function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById("color-palette");
    for (let index in colors) {
        let palletItemDiv = createPalletItem(colors[index]);
        colorPalletContainer.appendChild(palletItemDiv);
    }
}