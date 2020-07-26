window.onload = function(){

    let buttonClear = document.getElementById("clear-board")
   
    let divGrande = document.getElementById("pixel-board")
    let divLinha = document.getElementsByClassName("row")
    buttonClear.addEventListener("click", function(){

        
        arrayOfPixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < arrayOfPixels.length; i += 1) {
        arrayOfPixels[i].style.background = "rgb(255,255,255)";
    }


        divGrande.style.backgroundColor = "rgb(255,255,255)"
        for(i=0;i<5;i++){
        divLinha[i].style.backgroundColor = "rgb(255,255,255)"
    }
        
    
        

    })

}