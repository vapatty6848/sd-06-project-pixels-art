window.onload = function() {
    createColorPalette(['black', 'blue', 'green', 'yellow']);
}

//Create the palette color itens, inside the palette-container
function createColorPalette(colors) {
    let colorPaletteContainer = document.getElementById('color-palette');
    for (let index in colors) {
        let colorItensDiv = createPaletteItens(colors[index]);
        colorPaletteContainer.appendChild(colorItensDiv);
    }
}

function createPaletteItens(color) {
    let colorItensDiv = document.createElement('div');
    colorItensDiv.style.backgroundColor = color;
    colorItensDiv.className = 'palette-itens';
    colorItensDiv.classList.add('color');
    colorItensDiv.addEventListener('click', handlePaletteItenEvent);
    return colorItensDiv;
}

function handlePaletteItenEvent() {
    console.log("tudo ok!");
}


