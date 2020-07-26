window.onload = function(){

    let buttonClear = document.getElementById("clear")
   

    buttonClear.addEventListener("click", function(){

        //document.querySelector(".pixel").style.backgroundColor = "red"
        arrayOfPixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < arrayOfPixels.length; i += 1) {
        arrayOfPixels[i].style.background = 'white';
    }
    
        

    })

}