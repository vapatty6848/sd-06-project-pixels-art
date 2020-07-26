window.onload = function(){

    let buttonClear = document.getElementById("clear-board")
   
    let divGrande = document.getElementById("pixel-board")
    let divLinha = document.getElementsByClassName("row")
    

    //limpa tela
    buttonClear.addEventListener("click", function(){

        
        arrayOfPixels = document.querySelectorAll('.pixel');
        for(i=0;i<arrayOfPixels.length;i++){
            arrayOfPixels[i] = arrayOfPixels[i].classList.remove("select")
        }
      
    })
       

}