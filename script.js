
let palette = document.querySelector("#color-palette");

palette.addEventListener("click", selectPaletteColor);



let oldSelectedColor = document.querySelector(".selected");
let currentSelectedColor = "";    

function selectPaletteColor (event){
    if(event.target.className !== "color-palette"){
        oldSelectedColor = document.querySelector(".selected");
        currentSelectedColor = event.target;

        currentSelectedColor.classList.add("selected");
        oldSelectedColor.classList.remove("selected");
    }
}