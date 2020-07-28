
window.onload = function() {
let selectColor = 'black';
let colors = ['black', 'red', 'blue', 'green'];
createColorPallet(colors);

//Quando clica, add o select e retira da cor antiga
function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector('.select');
    let currentSelectedDiv = event.target;

    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');

    selectColor = currentSelectedDiv.style.backgroundColor;
    console.log(selectColor);
}

//Criação dos itens da paleta (divs)
function createPalletItem(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.background = color;
    palletItemDiv.className = 'color';
    palletItemDiv.addEventListener('click', handlePalletItemEvent);

    if (color === 'black') {
        palletItemDiv.classList.add('selected');
    }
    return palletItemDiv;
}

//Pega a paleta de cores e add os itens a paleta
function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById('color-pallete');

    for (let index in colors) {
        let palletItemDiv = createPalletItem(colors[index]);
        colorPalletContainer.appendChild(palletItemDiv);
    }
}

}