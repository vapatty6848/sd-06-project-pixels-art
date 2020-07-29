let selectedColor = "black";
window.onload = function () {

let colorArray = ["black", "purple", "green", "yellow"];

createColorPallet(colorArray);

// let colorList = document.querySelector(".colors-list");

// for (let index in colorArray) {
//      elementLi = document.createElement('li');
//     elementLi.innerHTML = arrayNumbers[num];
//     elementUl.appendChild(elementLi);

function createColorPallet(colors) {
    let colorPaletContainer = document.getElementById("color-palette");
    
    for (let index in colors) {
        let palletItemDiv = createPalletItem(colors[index]);
        colorPaletContainer.appendChild(palletItemDiv);
    }
}

function createPalletItem(color) {
    let palletItemDiv = document.createElement("div");
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = "color";
    palletItemDiv.className = "pallet-item";
    palletItemDiv.addEventListener("click", handlePalletItemEvent);

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

    // console.log(currentSelectedDiv);
    // let div = event.target;
    // let backgroundColor = div.style.backgroundColor;
    // console.log(backgroundColor);

// function addPixelsDivEvents() {
//     let div = pixelDivs[index];
//     div.addEventListener("click", function(event){
//         console.log(event.target.class);
//     });
}







        
    
  