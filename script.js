window.onload = function(){
    createColorPallet(['black', 'red', 'green', 'blue'])

    function createColorPallet (colors){
        let colorPalletContainer = document.getElementById('color-palette');

        for(let i in colors){
            let palletItemDiv = createPaletteItem(colors[i]);
            colorPalletContainer.appendChild(palletItemDiv);
        }
    }

    function createPaletteItem (color){
        let palletItemDiv = document.createElement('div');
        palletItemDiv.style.backgroundColor = color;
        palletItemDiv.className = "color";
        palletItemDiv.addEventListener('click', handlePalletItemEvent);

        if(color === 'black'){
            palletItemDiv.classList.add('selected');
        }
        return palletItemDiv;
    }

    function handlePalletItemEvent(event){
    let oldSeletecedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target

    oldSeletecedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected");
    selectedColor = currentSelectedDiv.style.backgroundColor;
    }
    


    let btn = document.querySelector('#clear-board');
    let pixel = document.getElementsByClassName('pixel');
    btn.addEventListener('click', function(){
        for (let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white';
        }
    })

}