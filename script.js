let selectedColor = 'black';
window.onload = function(){

createColorPallet(['black', 'DarkGreen', 'MediumSlateBlue', 'orange']); // cores adicionadas

function createColorPallet(colors){
    let colorPaletContainer = document.querySelector('#color-palette');
    for (let index in colors){
    let palletItemDiv = createPalletItem(colors[index]); 
    colorPaletContainer.appendChild(palletItemDiv)
    }  
}
