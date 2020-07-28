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

let orangeButton = document.getElementById("orange");
orangeButton.addEventListener("click", function(){
    selectColor("rgb(245, 169, 82)");
})

let redButton = document.getElementById("red");
redButton.addEventListener("click", function(){
    selectColor("rgb(245, 131, 116)");
})

let purpleButton = document.getElementById("purple");
purpleButton.addEventListener("click", function(){
    selectColor("rgb(217, 128, 235)");
})

let blueButton = document.getElementById("blue");
blueButton.addEventListener("click", function(){
    selectColor("rgb(113, 222, 226)");
})


let greenButton = document.getElementById("green");
greenButton.addEventListener("click", function(){
    selectColor("rgb(117, 241, 128)");
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
    document.getElementById("linha1Coluna1").style.backgroundColor=color;
    document.getElementById("linha1Coluna2").style.backgroundColor=color;
    document.getElementById("linha1Coluna3").style.backgroundColor=color;
    document.getElementById("linha1Coluna4").style.backgroundColor=color;
    document.getElementById("linha1Coluna5").style.backgroundColor=color;

    document.getElementById("linha2Coluna1").style.backgroundColor=color;
    document.getElementById("linha2Coluna2").style.backgroundColor=color;
    document.getElementById("linha2Coluna3").style.backgroundColor=color;
    document.getElementById("linha2Coluna4").style.backgroundColor=color;
    document.getElementById("linha2Coluna5").style.backgroundColor=color;

    document.getElementById("linha3Coluna1").style.backgroundColor=color;
    document.getElementById("linha3Coluna2").style.backgroundColor=color;
    document.getElementById("linha3Coluna3").style.backgroundColor=color;
    document.getElementById("linha3Coluna4").style.backgroundColor=color;
    document.getElementById("linha3Coluna5").style.backgroundColor=color;

    document.getElementById("linha4Coluna1").style.backgroundColor=color;
    document.getElementById("linha4Coluna2").style.backgroundColor=color;
    document.getElementById("linha4Coluna3").style.backgroundColor=color;
    document.getElementById("linha4Coluna4").style.backgroundColor=color;
    document.getElementById("linha4Coluna5").style.backgroundColor=color;

    document.getElementById("linha5Coluna1").style.backgroundColor=color;
    document.getElementById("linha5Coluna2").style.backgroundColor=color;
    document.getElementById("linha5Coluna3").style.backgroundColor=color;
    document.getElementById("linha5Coluna4").style.backgroundColor=color;
    document.getElementById("linha5Coluna5").style.backgroundColor=color;

}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", function(){
    clearColor("white");
})