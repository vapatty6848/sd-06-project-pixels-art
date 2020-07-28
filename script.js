window.onload = function() {
    let selectedColor = "black";
    
    let colorBlack = document.querySelector(".preto");
    colorBlack.addEventListener("click", function(){
        selectedColor = "black";
    })

    let colorBlue = document.querySelector(".azul");
    colorBlue.addEventListener("click", function(){
        selectedColor = "blue";
    })

    let colorYellow = document.querySelector(".amarelo");
    colorYellow.addEventListener("click", function(){
        selectedColor = "yellow";
    })

    let colorGreen = document.querySelector(".verde");
    colorGreen.addEventListener("click", function(){
        selectedColor = "green";
    })

    let clickPixel = document.querySelectorAll(".pixel");
    
    for (let i = 0; i < clickPixel.length; i += 1){
        clickPixel[i].addEventListener("click", function(){
            clickPixel[i].style.backgroundColor = selectedColor;
        })
    }
    
    
}
