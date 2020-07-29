 let selectedColor = "black";
 
window.onload = function() {
 createColorPalette(['black', 'red', 'blue', 'yellow']);

 //informar array de cores para criar paleta de cores
function createColorPalette(colors){
    let colorPalletContainer = document.getElementById('color-palette');

    for(let index in colors){
        let palletItemDiv = createPaletteItens(colors[index]);
        colorPalletContainer.appendChild(palletItemDiv);
    }
   
}
//cria paleta de cores
function createPaletteItens(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.classList.add('color', 'palette-item');
    palletItemDiv.addEventListener('click', paletteItemEvent);

    if(color === "black"){
        palletItemDiv.classList.add("selected");
    }
    
    return palletItemDiv;
   }

   function paletteItemEvent(event){
    selectedColor = event.target.style.backgroundColor;
    console.log(selectedColor);
        
    }

    //função que colore os pixels
    function coloringPixels(event){
             
        event.target.style.backgroundColor = selectedColor;
        
    }

    function clearBoard(event){

        for(let item of document.getElementsByClassName('pixel')){
            item.style.backgroundColor = "white";

        }

    }
    document.getElementById('clear-board').addEventListener('click', clearBoard);
    document.getElementById('pixel-board').addEventListener('click', coloringPixels);

}