let colorPalette = document.querySelector("#color-palette");
// create palette colors
createPaletteColors("black", "red", "blue", "green", "purple");


function createPaletteColors (color1, color2, color3, color4, color5){
    let colorArray = [color1, color2, color3, color4, color5];

    for (index = 0; index < colorArray.length; index += 1){
        let newDiv = document.createElement("div");
        colorPalette.appendChild(newDiv).className = "color";
        colorPalette.lastChild.style.backgroundColor = colorArray[index];

    }
}