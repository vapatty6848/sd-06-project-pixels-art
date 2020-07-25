
window.onload = function() {
    //console.log('page loaded')
    
    //global variables
    

    //calls
    colorPalete();
}
function colorPalete() {
    let colors = ['black', 'green', 'blue', 'purple']
    for (let i = 0; i < colors.length; i += 1) {
        let color = colors[i];
        createColorButton(color);

    }
}
function createColorButton(color) {
    let colorContainer = document.getElementById('color-palete');
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


