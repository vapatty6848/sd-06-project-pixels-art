let pixelBoard = document.querySelector('#pixel-board');
let preto = document.querySelector('#black')


for (let i = 0; i < 5; i++){
    let linha = document.createElement('div');
    linha.className = 'pixel';
    pixelBoard.appendChild(linha);
    for (let j = 0; j < 5; j++){
        let coluna = document.createElement('div');
        coluna.className = 'pixel';
        coluna.id= 'column'
        linha.appendChild(coluna);
    }
}

window.onload = function(){
    preto.style = "black"
}