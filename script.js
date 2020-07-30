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
       let newPixel = event.target;
      newPixel.classList.add("paint");
      let newColor = document.getElementsByClassName("paint")[0];
      newColor.setAttribute("style", "background: " + currentColor);
      newPixel.classList.remove("paint");
    }