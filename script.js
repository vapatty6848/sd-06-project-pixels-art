var pixelBoard = document.querySelector("#pixel-board");
var paleta = document.querySelector("#color-palette");
var black = document.querySelector(".black");
var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var colors = document.querySelectorAll(".color")
var clear = document.querySelector("#clear-board")
var quadrados = document.querySelectorAll(".pixel")

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




pixelBoard.addEventListener("click", function(event){
    
    if(black.classList[2] == "selected"){
    event.target.style.backgroundColor = "black"
    }else if(red.classList[2] == "selected"){
    event.target.style.backgroundColor = "red";
    }else if(green.classList[2] == "selected"){
        event.target.style.backgroundColor = "green";
    }else if(blue.classList[2] == "selected"){
            event.target.style.backgroundColor = "blue";
    }

})

clear.addEventListener("click", function(){
    for(let i = 0; i < quadrados.length; i +=1){
        quadrados[i].style.backgroundColor = "white"
    }
})
