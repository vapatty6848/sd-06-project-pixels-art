// black de largada onload

let colorOne = document.getElementsByClassName('color')[0];
colorOne.style.backgroundColor = "#000000";

let colorTwo = document.getElementsByClassName('color')[1];
colorTwo.style.backgroundColor = "#FFFA00";

let colorThree = document.getElementsByClassName('color')[2];
colorThree.style.backgroundColor = "#FF0F0F";

let colorFour = document.getElementsByClassName('color')[3];
colorFour.style.backgroundColor = "#31FF4E";

let colorSection = document.querySelector("#color-palette");

let selectedColorsList = document.querySelector(".subtitle-colors-span");

// selectedColorsList.innerText = `${colorOne.style.backgroundColorName}`;
// document.getElementById("line-1").appendChild.style.display = "inline-block"

colorSection.addEventListener("click", function(event) {
let selectedColorSpan = document.querySelector(".selected-color");
  
let className = event.target.className;
      
if (className) {
   selectedColorSpan.innerText = className;
   selectedColorSpan.style.color = className;
} else {
    selectedColorSpan.innerText = "Você não selecionou um quadrado da paleta!";        
}      
});

let lineOne = document.getElementById(".line-1");

lineOne.addEventListener("click",function(event) {
let pixel = document.querySelector(".pixel");

// pixel.style.background-color = event.target.className;


});







        
    
  