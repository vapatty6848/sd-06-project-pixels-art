let pixelBoard = document.querySelector('#pixel-board');



for (let i = 0; i < 5; i++){
    let linha = document.createElement('div');
    linha.className = 'row';
    pixelBoard.appendChild(linha);
    for (let j = 0; j < 5; j++){
        let coluna = document.createElement('div');
        coluna.className = 'column';
        coluna.id= 'pixel'
        linha.appendChild(coluna);
    }
}