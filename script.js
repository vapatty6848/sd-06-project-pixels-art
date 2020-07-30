let selectedPalette = document.querySelectorAll(".selected")[0];
let currentColor = "black";

function colorSelect() {
    selectedPalette.classList.remove("selected");
    selectedPalette = event.target;
    selectedPalette.classList.add("selected");
    let colorId = selectedPalette.id;
    let colorDiv = document.getElementById(colorId);
    currentColor = colorDiv.style.backgroundColor;
    }

    function colorSet(){
        event.target.setAttribute("style", "background: " + currentColor);
    }

    function clearBoard(){
let allPixels = document.getElementsByClassName("pixel");
for (i = 0; i < allPixels.length; i+=1){
    allPixels[i].removeAttribute("style")
}    
}