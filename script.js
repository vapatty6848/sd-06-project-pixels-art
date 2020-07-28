window.onload = function(){
    createColorPallet(['black', 'red', 'green', 'blue'])

    function createColorPallet (colors){
        let colorPalletContainer = document.getElementById('color-palette');

        for(let i in colors){
            let palleteItemDiv = createPaletteItem(colors[i]);
            colorPalletContainer.appendChild(palleteItemDiv);
        }
    }

    function createPaletteItem (color){
        let palleteItemDiv = document.createElement('div');
        palleteItemDiv.style.backgroundColor = color;
        palleteItemDiv.className = "collor";
        palleteItemDiv.addEventListener('click', handlePalleteItemEvent);

        if(color === 'black'){
            palleteItemDiv.classList.add('selected');
        }
        return palleteItemDiv;
    }

    function handlePalleteItemEvent (event){
    let oldSeletecedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target

    oldSeletecedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected");

    }
    
    document.getElementById('pixel').addEventListener('click', function(){
      pixelColorSelected = document.querySelector('.selected');
      let pixelBackgroundColor = pixelColorSelected.style.backgroundColor;
      event.target.style.backgroundColor = pixelBackgroundColor;  
    })

    let btn = document.querySelector('#clear-board');
    let pixel = document.getElementsByClassName('pixel');
    btn.addEventListener('click', function(){
        for (let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white';
        }
    })

}