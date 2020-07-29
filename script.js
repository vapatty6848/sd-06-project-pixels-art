window.onload = function () {

    createColorPallet(['black', 'blue', 'red', 'green']);
    let colorBlack = document.getElementById('black');
    colorBlack.classList.add("selected");

    let classColor = document.querySelectorAll('.color');
    let colorSelected = document.querySelector(".selected");

    document.querySelectorAll('.color').forEach(item => {
        item,addEventListener('click', function() {
            classColor.add.classList("selected")
            document.querySelectorAll(".selected").remove.classList("selected")

        })
    })
}



function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById('color-palette');
    for(let index in colors) {
        let palletItemDiv = createPalletItem(color[index]);
        colorPalletContainer.appendChild(palletItemDiv)
    }
}
function createPalletItem(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className ="pallet-item";
    palletItemDiv.addEventListener('click', handlePalletItemEvent);
    if (color === 'black') {
        palletItemDiv.classList('selected');
    }
    return palletItemDiv;
}

function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;
    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classlist.add('selected');
}