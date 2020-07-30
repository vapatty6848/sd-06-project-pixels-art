let selectedColor = "black";
window.onload = function () {

let colorArray = ["black", "purple", "pink", "yellow"];

createColorPallet(colorArray);

function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById("color-palette");
    
    for (let index in colors) {
        let palletItemDiv = createPalletItem(colors[index]);
        colorPalletContainer.appendChild(palletItemDiv);
    }
}

function createPalletItem(color) {
    let palletItemDiv = document.createElement("div");
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = "pallet-item";
    palletItemDiv.classList.add("color");
    palletItemDiv.addEventListener("click", handlePalletItemEvent);
    console.log(palletItemDiv);

    if(color === "black") {
        palletItemDiv.classList.add("selected");
    }
    return palletItemDiv;
}

function handlePalletItemEvent() {
    let oldSelectedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target;

    oldSelectedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected");

    selectedColor = currentSelectedDiv.style.backgroundColor;
}
console.log(selectedColor);

function handlePixel(event) {
    let selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
}

let pixelBoardDiv= document.querySelector("#pixel-board");
pixelBoardDiv.addEventListener("click", handlePixel);



let allPixel = document.getElementsByClassName("pixel");
let clearBotton = document.querySelector("#clear-board");

function clearPixels() {      
    for (index in allPixel) {
        allPixel[index].style.backgroundColor = "white";
    }    
}

clearBotton.addEventListener("click", clearPixels);

}  