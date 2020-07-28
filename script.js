// black de largada onload

createColorPallet(["black", "purple", "green", "yellow", "red"]);

function createColorPallet(colors) {
    let colorPaletContainer = document.getElementById("color-palette");
    
    for (let index in colors) {
        let palletItemDiv = createPalletItem(colors[index]);
        colorPaletContainer.appendChild(palletItemDiv);
    }
}

function createPalletItem(color) {
    let palletItemDiv = document.createElement("div");
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = "pallet-item";
    palletItemDiv.addEventListener("click", handlePalletItemEvent);

    if(color === "black") {
        palletItemDiv.classList.add("selected");
    }
    return palletItemDiv;
}

function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target;

    console.log(currentSelectedDiv);
    let div = event.target;
    let backgroundColor = div.style.backgroundColor;
    console.log(backgroundColor);
}


// colorSection.addEventListener("click", function(event) {
// let selectedColorSpan = document.querySelector(".selected-color");
  
// let className = event.target.className;
      
// if (className) {
//    selectedColorSpan.innerText = className;
//    selectedColorSpan.style.color = className;
// } else {
//     selectedColorSpan.innerText = "Você não selecionou um quadrado da paleta!";        
// }      
// });

// let lineOne = document.getElementById(".line-1");

// lineOne.addEventListener("click",function(event) {
// let pixel = document.querySelector(".pixel");

// // pixel.style.background-color = event.target.className;


// });







        
    
  