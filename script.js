window.onload = function() {
    let selectedColor = "black";
    
    let colorBlack = document.querySelector(".preto");
    colorBlack.addEventListener("click", function(){
        selectedColor = "black";
        colorBlack.classList.add("selected");
        colorBlue.classList.remove("selected");
        colorYellow.classList.remove("selected");
        colorGreen.classList.remove("selected");
    })

    let colorBlue = document.querySelector(".azul");
    colorBlue.addEventListener("click", function(){
        selectedColor = "blue";
        colorBlack.classList.remove("selected");
        colorBlue.classList.add("selected");
        colorYellow.classList.remove("selected");
        colorGreen.classList.remove("selected");
    })

    let colorYellow = document.querySelector(".amarelo");
    colorYellow.addEventListener("click", function(){
        selectedColor = "yellow";
        colorBlack.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorYellow.classList.add("selected");
        colorGreen.classList.remove("selected");
    })

    let colorGreen = document.querySelector(".verde");
    colorGreen.addEventListener("click", function(){
        selectedColor = "green";
        colorBlack.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorYellow.classList.remove("selected");
        colorGreen.classList.add("selected");
    })

    let clickPixel = document.querySelectorAll(".pixel");
    
    for (let i = 0; i < clickPixel.length; i += 1){
        clickPixel[i].addEventListener("click", function(){
            clickPixel[i].style.backgroundColor = selectedColor;
        })
    }

    let buttonClear = document.querySelector(".btn");
    buttonClear.addEventListener("click", function() {
        for (let i = 0; i < clickPixel.length; i += 1){
                clickPixel[i].style.backgroundColor = "white";
            }
        })
    
    let pixelBoard = document.querySelector("#pixel-board");
    
    let firstSize = document.querySelector(".size1");
    firstSize.addEventListener("change", function() {
        if (firstSize.value > 50) {
            firstSize.value = 50;
        } else if (firstSize.value < 5) {
            firstSize.value = 5;
        }
        let boardH = parseInt(firstSize.value);
        pixelBoard.style.height = boardH + "px";
    })

    let secondSize = document.querySelector(".size2");
    secondSize.addEventListener("change", function() {
        if (secondSize.value > 50) {
            secondSize.value = 50;
        } else if (secondSize.value < 5) {
            secondSize.value = 5;
        }
        let boardW = parseInt(secondSize.value);
        pixelBoard.style.width = boardW + "px";
    })

    
    pixelBoard.style.height = firstSize.value + "px";
    pixelBoard.style.width = secondSize.value + "px";
    
}
