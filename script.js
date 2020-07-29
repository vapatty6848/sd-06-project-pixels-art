var pixelBoard = document.querySelector("#pixel-board");
var paleta = document.querySelector("#color-palette");
var black = document.querySelector(".black");
var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var colors = document.querySelectorAll(".color")
var clear = document.querySelector("#clear-board")
var quadrados = document.querySelectorAll(".pixel")
var randonC1 = Math.floor(Math.random()*16777215).toString(16);
var randonC2 = Math.floor(Math.random()*16777215).toString(16);
var randonC3 = Math.floor(Math.random()*16777215).toString(16);

var tamanho = document.querySelector("#board-size");
var botao = document.querySelector("#generate-board");
var pixelBoard2 = document.querySelector("#pixel-board-2");

colors[1].style.backgroundColor = "#" +randonC1;
colors[2].style.backgroundColor = "#" +randonC2;
colors[3].style.backgroundColor = "#" +randonC3;
black.addEventListener("click", function(){
    for(i = 0; i < colors.length; i += 1){
        if(colors[i].classList[2] == "selected"){
       colors[i].className = "color " + colors[i].classList[1] 

       console.log(colors[i].classList[1]);
        }
    }
    black.className += " selected";

})
red.addEventListener("click", function(){
    for(i = 0; i < colors.length; i += 1){
        if(colors[i].classList[2] == "selected"){
       colors[i].className = "color " + colors[i].classList[1] 

       console.log(colors[i].classList[1]);
        }
    }
    red.className += " selected";
})

green.addEventListener("click", function(){
    for(i = 0; i < colors.length; i += 1){
        if(colors[i].classList[2] == "selected"){
       colors[i].className = "color " + colors[i].classList[1] 

       console.log(colors[i].classList[1]);
        }
    }
    green.className += " selected";
})

blue.addEventListener("click", function(){
    for(i = 0; i < colors.length; i += 1){
        if(colors[i].classList[2] == "selected"){
       colors[i].className = "color " + colors[i].classList[1] 

       console.log(colors[i].classList[1]);
        }
    }
    blue.className += " selected";
})


botao.addEventListener("click", function(){
    let corpo = document.getElementsByTagName("body")[0];
    corpo.removeChild(pixelBoard)
    let sizeNmb = parseInt(tamanho.value)
    console.log(sizeNmb)
    if(tamanho.value == ""){
        alert("Board inválido!");
    }
    else{
        if(tamanho.value < 5){
            sizeNmb = 5;
        }else if (tamanho.value > 50){
            sizeNmb = 50;
        }
       for(let i = 0; i < sizeNmb; i++){
        var line = document.createElement("div");
        line.className = "linha";
        pixelBoard2.appendChild(line)
        for(let i = 0; i < sizeNmb; i++){
        var block = document.createElement("div")
        block.className = "pixel";
        block.backgroundColor = "white";
        line.appendChild(block)
        }
    } 
    }
    
})

pixelBoard2.addEventListener("click", function(event){
    
    if(black.classList[2] == "selected"){
    event.target.style.backgroundColor = "black"
    }else if(red.classList[2] == "selected"){
    event.target.style.backgroundColor = "#" +randonC1;
    }else if(green.classList[2] == "selected"){
        event.target.style.backgroundColor = "#" +randonC2;
    }else if(blue.classList[2] == "selected"){
            event.target.style.backgroundColor = "#" +randonC3;
    }

})

pixelBoard.addEventListener("click", function(event){
    
    if(black.classList[2] == "selected"){
    event.target.style.backgroundColor = "black"
    }else if(red.classList[2] == "selected"){
    event.target.style.backgroundColor = "#" +randonC1;
    }else if(green.classList[2] == "selected"){
        event.target.style.backgroundColor = "#" +randonC2;
    }else if(blue.classList[2] == "selected"){
            event.target.style.backgroundColor = "#" +randonC3;
    }

})

clear.addEventListener("click", function(){
    for(let i = 0; i < quadrados.length; i +=1){
        quadrados[i].style.backgroundColor = "white"
    }
})


