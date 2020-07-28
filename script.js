// Select pallet color EVENT
let palette = document.querySelector("#color-palette");
palette.addEventListener("click", selectPaletteColor);

// select palet color FUNCTION
let oldSelectedColor = "";
let currentSelectedColor = document.querySelector(".selected");    

function selectPaletteColor (event){
    if(event.target.className !== "color-palette"){
        oldSelectedColor = document.querySelector(".selected");
        currentSelectedColor = event.target;

        currentSelectedColor.classList.add("selected");
        oldSelectedColor.classList.remove("selected");
    }
}

// set pixels color EVENT
let pixelBoard = document.querySelector("#pixel-board");
pixelBoard.addEventListener("click", setPixelColor);

// set pixels color FUNCTION
function setPixelColor(event){
    if(event.target.className == "pixel"){
        event.target.style.backgroundColor = currentSelectedColor.id;
    }    
}

// clear board EVENT
let clearButton = document.querySelector("#clear-board");
clearButton.addEventListener("click", clearBoard);

// clear board FUNCTION
let pixels = document.querySelectorAll(".pixel");
function clearBoard(){
    for (index in pixels){
        if (pixels[index].className == "pixel"){
            pixels[index].style.backgroundColor = "";
        }
    }
}


