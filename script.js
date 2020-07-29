window.onload = function () {

creatColorPallet(["black", "red", "blue", "green"]);

function creatColorPallet(colors) {
    let colorPaletteContainer = document.querySelector("#color-palette");

    for (let index in colors) {
        let palletItemDiv = creatPalletItem(colors[index]);
        colorPaletteContainer.appendChild(palletItemDiv);
    }
}

function creatPalletItem(color) {
    let palletItemDiv = document.createElement("div");
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = "pallet-item";
    palletItemDiv.addEventListener("click", handlePaletItemEvent);

    if (color === "black") {
        palletItemDiv.classList.add("selected");
    }

    return palletItemDiv;
}

function handlePaletItemEvent() {
    let oldSelectedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target;

    oldSelectedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected");
}







}