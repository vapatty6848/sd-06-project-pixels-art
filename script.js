let selectedColor = 'black';

window.onload = function(){

   
    createColorPallet(['black', 'red', 'blue', 'green']); //aqui adiciono quantas cores quiser

            // aqui ele vai criar a paleta de cores, vai chamar o array e criar uma paleta para cada cor do array, para criar cada pelate ele chama a função createPalletItem, que é específica só para a criação. Então ele cria dentro do container maior, os quadrados menores

    function createColorPallet(colors){
        let colorPaletContainer = document.querySelector('#color-palette');

        for (let index in colors){
        let palletItemDiv = createPalletItem(colors[index]); 
        colorPaletContainer.appendChild(palletItemDiv)
        }  
    }
            // nessa função ele cria cada quadradinho com sua cor específica

    function createPalletItem(color){
        let palletItemDiv = document.createElement('div');
        palletItemDiv.style.backgroundColor = color;
        palletItemDiv.classList.add("color");
        palletItemDiv.addEventListener('click', handlePalletItemEvent);

        if (color === 'black'){
            palletItemDiv.classList.add('selected');
        }

                // palletItemDiv.addEventListener('click', function(event){
                //     console.log("funcionou");
                // }); Podia fazer usando um função anônima também, ao invés de chamar a handle. Mas dessa forma é mais organizado

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


