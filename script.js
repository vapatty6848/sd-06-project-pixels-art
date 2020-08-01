//inciando

window.onload=function(){

    localStorage.clear();
    localStorage.setItem("selected-color", "black");

}

//add class selected ao elemento que recebeu clique e remover dos outros elementos

//se o botao com id x receber onclick, adiciona selected nele e remove selected dos outros elementos.

//select color-buttons

function selectColor(color){

    localStorage.setItem("selected-color", color);

    if(localStorage.getItem("selected-color")=="rgb(113, 222, 226)"){
        document.getElementById("blue").classList.add("selected")
        document.getElementById("black").classList.remove("selected")
        document.getElementById("yellow").classList.remove("selected")
        document.getElementById("red").classList.remove("selected")
    }

    else if (localStorage.getItem("selected-color")=="rgb(245, 131, 116)"){
        document.getElementById("red").classList.add("selected")
        document.getElementById("black").classList.remove("selected")
        document.getElementById("yellow").classList.remove("selected")
        document.getElementById("blue").classList.remove("selected")
    }

    else if (localStorage.getItem("selected-color")=="rgb(245, 210, 116)"){
        document.getElementById("yellow").classList.add("selected")
        document.getElementById("black").classList.remove("selected")
        document.getElementById("blue").classList.remove("selected")
        document.getElementById("red").classList.remove("selected")
    }

    else if (localStorage.getItem("selected-color")=="black"){
        document.getElementById("black").classList.add("selected")
        document.getElementById("blue").classList.remove("selected")
        document.getElementById("yellow").classList.remove("selected")
        document.getElementById("red").classList.remove("selected")
    }
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



//numberofpixels-button

let number = document.getElementById("board-size");

let n = number.value;

function boardSize(n){

    
        
        if ( n > 5 ){

          let addedPixels =  n - 5;

            for (let i=0; i < addedPixels.length; i++) {

                let novoPixel = document.createElement("div");
                document.getElementsByClassName("coluna").appendChild(novoPixel);

            }
        }

        else if ( n < 5 ){

            let addedPixels =  5 - n;

            for (let i=0; i < addedPixels.length; i++) {

                let pixelAremover = document.getElementsByClassName("coluna");
                pixelAremover.removeChild(pixelAremover.lastElementChild);

            }



        }
        else if (n == 5){
        
        }
        else {
            console.log("Board inválido!");
        }

        

    
}

let vqvButton = document.getElementById("generate-board");
vqvButton.addEventListener("click", function() {
    boardSize(n);
})

