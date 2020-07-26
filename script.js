window.onload = function(){

    let buttonClear = document.getElementById("clear-board")
   

    buttonClear.addEventListener("click", function(){

        
        arrayOfPixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < arrayOfPixels.length; i += 1) {
        arrayOfPixels[i].style.background = 'white';
    }
    
        

    })

}