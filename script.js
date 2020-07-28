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
    
    
}
