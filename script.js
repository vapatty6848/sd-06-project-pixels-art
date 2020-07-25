
window.onload = function() {
    //console.log('page loaded')
    
    //global variables
    

    //calls
    colorPalete();
    createPixelBoard(5);
}
function colorPalete() {
    let colors = ['black', 'green', 'blue', 'purple']
    for (let i = 0; i < colors.length; i += 1) {
        let color = colors[i];
        createColorButton(color);

    }
}
function createColorButton(color) {
    let colorContainer = document.getElementById('color-palette');
    let colorBtn = document.createElement('button');
    colorBtn.classList.add('color');
    colorBtn.id = color;
    colorBtn.style.backgroundColor = color;
    colorBtn.addEventListener('click', getColor)
    colorContainer.appendChild(colorBtn);
}
function getColor() {
    let pickedColor = this.id;
    console.log(this.id)
}

function createPixelBoard(size) {
    let totalSize = size * size;
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.style.borderStyle = 'solid';
    pixelBoard.style.borderWidth = '2px';
    pixelBoard.style.width = (size * 40) + (size * 2) + 'px';
    for (let i = 0; i < totalSize; i += 1) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);
    }
}


