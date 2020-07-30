window.onload = function() {
    // ativando função de criação de paletes de cor.
        paleta(['black', 'green','yellow', 'pink']);
        createPixelboard(5,5);
        createBtn()
    };//termino onloadPage.
    
    // função de criação de palete de cores.
    function paleta(colors) {
        let divContainer = document.getElementById('color-palette');
        for(let i in colors) {
            let divItem = createItemCor(colors[i]);
            divContainer.appendChild(divItem);
        };
    };
    // função de criação de cores individuais.
    function createItemCor(color) {
        let divItem = document.createElement('div');
        divItem.style.backgroundColor = color;
        divItem.className = 'color';
        divItem.addEventListener('click',ItemCorEvent);
        if(color === 'black') {
            divItem.classList.add('selected');
        };
        return divItem;
    };
    // evento de seleção de cores.
    function ItemCorEvent(event) {
       let passada = document.querySelector('.selected');
       let nova = event.target
       passada.classList.remove('selected');
       nova.classList.add('selected');
    };
    // função criação de pixel-board.
    function createPixelboard(row, column) {
        let board = document.getElementById('pixel-board');
        for(let i = 0; i < row; i++){
            let pixelRow = document.createElement('div');
            pixelRow.className = 'tr';
            board.appendChild(pixelRow);
          for(let c = 0; c < column; c++){
            let pixelColumn = document.createElement('div');
            pixelColumn.className = 'pixel';
            pixelRow.appendChild(pixelColumn);
            pixelColumn.addEventListener('click', function(event) {
                let first = event.target;
                let nova = document.querySelector('.selected');
                first.style.backgroundColor = nova.style.backgroundColor;
          });
        };
      };
    };
    //criando botão para limpar o board.
    function createBtn() {
        let btn = document.createElement('button');
        let btnDiv = document.querySelector('#clear-board');
        btnDiv.appendChild(btn);
        btn.className = 'clear-board';
        btn.textContent = 'Limpe aki!';
        btn.addEventListener('click',function(){
            let allPixel = document.querySelectorAll('.pixel');
            for(let i in allPixel) {
                if(allPixel[i].style.backgroundColor){
                    allPixel[i].style.backgroundColor = '';
                }
            }
        });
    };
    //
    
        
    