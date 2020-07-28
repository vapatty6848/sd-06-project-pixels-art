//inciando

window.onload=function(){

    localStorage.clear();
    localStorage.setItem("selected-color", "black");
}

//select color-buttons

function selectColor(color){
    localStorage.setItem("selected-color", color);
}

//

let blackButton = document.getElementById("black");
blackButton.addEventListener("click", function(){
    selectColor("black");
})

let yellowButton = document.getElementById("yellow");
yellowButton.addEventListener("click", function(){
    selectColor("rgb(245, 210, 116)");
})

let redButton = document.getElementById("red");
redButton.addEventListener("click", function(){
    selectColor("rgb(245, 131, 116)");
})


let blueButton = document.getElementById("blue");
blueButton.addEventListener("click", function(){
    selectColor("rgb(113, 222, 226)");
})




//Paste colors

function pasteColor(pixel, color){
    pixel.style.backgroundColor = color;
}

let pixels = document.getElementsByClassName("pixel");

for (let i=0; i < pixels.length; i++) {
    pixels[i].onclick = function() {
        pasteColor(pixels[i], localStorage.getItem("selected-color"));
    }
}

//clear-button

function clearColor(color){
    let pixels = document.getElementsByClassName("pixel");

    for (let i=0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor="white"
    }
}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", function() {
    clearColor("white");
})

