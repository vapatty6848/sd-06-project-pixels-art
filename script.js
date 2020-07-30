// otimizar os color setings para não pintar os elementos pais

let pixelBoard = document.querySelector("#pixel-board");
let colorPalette = document.querySelector("#color-palette");
let clearBoard = document.querySelector("#clear-board");
let customBoardButton = document.querySelector("#generate-board");


createPaletteColors("black", generateRandomColor(), generateRandomColor(), generateRandomColor());
createPixelBoard();

colorPalette.addEventListener("click", chooseColor);
pixelBoard.addEventListener("click", setPixelColor);
clearBoard.addEventListener("click", clearPixelBoard);
customBoardButton.addEventListener("click", createCustomPixelBoard);


colorPalette.firstElementChild.classList.add("selected");
let currentSelectedColor = document.querySelector(".selected");



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

function chooseColor(event){
    document.querySelector(".selected").classList.remove("selected");
    event.target.classList.add("selected");
    currentSelectedColor = document.querySelector(".selected");
}

function setPixelColor(event){
    event.target.style.backgroundColor = currentSelectedColor.style.backgroundColor;
}

function clearPixelBoard(){
    let pixelArray = document.querySelectorAll(".pixel");
    for (index = 0; index < pixelArray.length; index += 1){
        pixelArray[index].style.backgroundColor = "rgb(255,255,255)";
    }
}

function createCustomPixelBoard(){
    let boardSizeInput = document.querySelector("#board-size").value;
    if (boardSizeInput > 50){
        boardSizeInput = 50
    } else if (boardSizeInput < 5){
        boardSizeInput = 5;
    }
    if (boardSizeInput == ""){
        alert("Board inválido!")
    } else{
        let boardLines = document.querySelectorAll(".board-line");
        for (index = 0; index < boardLines.length; index += 1){
            pixelBoard.removeChild(boardLines[index]);
        }

        for (index = 1; index <= boardSizeInput; index += 1){
            let newLine = document.createElement("div");
            pixelBoard.appendChild(newLine).className = "board-line";
            for (internIndex = 1; internIndex <= boardSizeInput; internIndex += 1){
                let newPixel = document.createElement("div");
                pixelBoard.lastChild.appendChild(newPixel).className = "pixel"
            }
        }
    }
}

function generateRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

var randomColor = generateRandomColor();
console.log (randomColor);