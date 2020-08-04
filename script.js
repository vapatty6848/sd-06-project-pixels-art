let selectedColor = 'black';
window.onload = function(){

createColorPallet(['black', 'DarkGreen', 'MediumSlateBlue', 'orange']); 

function createColorPallet(colors){
    let colorPaletContainer = document.querySelector('#color-palette');
    for (let index in colors){
    let palletItemDiv = createPalletItem(colors[index]); 
    colorPaletContainer.appendChild(palletItemDiv)
    }  
}

function createPalletItem(color){
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.classList.add("color");
    palletItemDiv.addEventListener('click', handlePalletItemEvent);
    if (color === 'black'){
    palletItemDiv.classList.add('selected');
    }
        return palletItemDiv;
}

function handlePalletItemEvent(event){
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;
    let backgroundColor = currentSelectedDiv.style.backgroundColor;
    console.log(backgroundColor);
    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
    selectedColor = backgroundColor;     
    }
    let botao = document.querySelector('#clear-board');
    let board = document.getElementsByClassName('pixel');
    botao.addEventListener('click', function(){
        for (let index = 0; index < board.length; index++){
            console.log(board[index]);
            board[index].style.backgroundColor = 'white';
        }
})
    for (let i = 0; i < 5; i++){
        let pixelBoard = document.querySelector('#pixel-board');
        let linha = document.createElement('div');
        linha.className = 'pixel';
        linha.className = 'row';
        pixelBoard.appendChild(linha);
        for (let j = 0; j < 5; j++){
            let coluna = document.createElement('div');
            coluna.className = 'pixel';
            coluna.id= 'column'
            linha.appendChild(coluna);
            coluna.addEventListener('click', function(event){
            coluna.style.backgroundColor = selectedColor;
            })
        }
}
}