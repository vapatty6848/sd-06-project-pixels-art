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

let greenButton = document.getElemen("green");
greenButton.addEventListener("click", function(){
    selectColor("rgb(117, 241, 128)");
})


//Paste colors

function pasteColor(localStorage.getItem("background-color")){
    document.getElementById(this.id).style.backgroundColor=color;
}

let pixelSelecionado = document.getElementById(this.id);
pixelSelecionado.addEventListener("click", function{
    pasteColor(localStorage.getItem("selected-color"));
})

//clear-button

function clearColor(color){
    document.getElementsByClassName("pixel").style.backgroundColor=color;

}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", function{
    clearColor("white");
})