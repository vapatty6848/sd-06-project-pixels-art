window.onload = function(){
    //catchCorPaleta
    const catchCorPaletaColor1 = document.querySelector("#color-1");
    const catchCorPaletaColor2 = document.querySelector("#color-2");
    const catchCorPaletaColor3 = document.querySelector("#color-3");
    const catchCorPaletaColor4 = document.querySelector("#color-4");
    const catchButton = document.querySelector("#clear-board");
    const catchPixel = document.querySelector(".pixel");

    catchCorPaletaColor1.addEventListener('click', function(){
        catchPixel.style.backgroundColor = "black";
    });
    catchCorPaletaColor2.addEventListener('click', function(){
        catchPixel.style.backgroundColor = "blueviolet";
    });
    catchCorPaletaColor3.addEventListener('click', function(){
        catchPixel.style.backgroundColor = "chartreuse";
    });
    catchCorPaletaColor4.addEventListener('click', function(){
        catchPixel.style.backgroundColor = "darkgoldenrod";
    });
    catchButton.addEventListener('click', function(){
        catchPixel.style.backgroundColor = "white";
    });


    capturaClique.addEventListener('click', function(){
        catchCorPaletaColor1.nodeValue
    })
    catchCorPaletaColor1.addEventListener('click', function(){
        catchPixel.style.backgroundColor = "black";
    });

    



}