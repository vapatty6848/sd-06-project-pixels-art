window.onload = function(){
    createColorPallet(['black', 'red', 'green', 'blue'])

    function createColorPallet (colors){
        let colorPalletContainer = document.getElementById('color-palette');

        for(let i in colors){
            let palleteItemDiv = createPaletteItem(colors[i]);
            colorPalletContainer.appendChild(palleteItemDiv);
        }
    }

function handlePalleteItemEvent (event){
    let oldSeletecedDiv = document.querySelector(".selected");
    let currentSelectedDiv = event.target

    oldSeletecedDiv.classList.remove("selected");
    currentSelectedDiv.classList.add("selected");
}

}