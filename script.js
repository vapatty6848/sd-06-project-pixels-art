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
    let sectionContainer = document.getElementById('container');
    let btn = document.createElement('button');
    let divPixelboard = document.getElementById('pixel-board');
    sectionContainer.insertBefore(btn,divPixelboard);
    btn.className = 'clear-board';
    btn.id = 'clear-board';
    btn.textContent = 'Limpar';
    btn.addEventListener('click',function(){
        let allPixel = document.querySelectorAll('.pixel');
        for(let i = 0; i < allPixel.length; i++) {
            if(allPixel[i].style.backgroundColor){
                allPixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
            }
        }
    });
};
    // criando btn interação com usuario.
let sectionContainer = document.getElementById('container');
let divPixelboard = document.getElementById('pixel-board');
let btnInput = document.createElement('button');
btnInput.textContent = 'VQV';
btnInput.id = 'generate-board';
btnInput.className = 'generate-board';
let input = document.createElement('input');
input.id = 'board-size';
input.className = 'board-size';
input.min = '1';
sectionContainer.insertBefore(btnInput,divPixelboard);
sectionContainer.insertBefore(input,divPixelboard);
// interação de apagar board antigo e carregar novo segundo usuario.
btnInput.addEventListener('click',function() {
    let value = document.getElementById('board-size').value
    // limitando o tamanho maximo do board.
    console.log(value);
    let pixel = document.querySelectorAll('.pixel')
    if(value === ''){
        alert('Board inválido!')
    } else if(value < '5') {
        value === '5'
        for(let i =0; i < pixel.length; i++) {
            document.querySelector('.tr').remove();
    }
    } else if(value > '50') {
        value === '50'
        for(let i =0; i < pixel.length; i++) {
            document.querySelector('.tr').remove();
    }
    } 
        
    
    createPixelboard(value,value);
});