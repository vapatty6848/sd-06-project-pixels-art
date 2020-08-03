window.onload = function() {

    blackColor.classList.add('selected')
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains ('pixel')) {
            let pixel = event.target
            pixel.style.backgroundColor = 'black'
        }
    }, false);
}

const blackColor = document.getElementsByClassName('color')[0]
blackColor.style.backgroundColor = 'black'

const blueColor = document.getElementsByClassName('color')[1]
blueColor.style.backgroundColor = 'blue'

const orangeColor = document.getElementsByClassName('color')[2]
orangeColor.style.backgroundColor = 'orange'

const greenColor = document.getElementsByClassName('color')[3]
greenColor.style.backgroundColor = 'green'

function createBorderPixels() {
    for( i = 1; i <= 5; i ++ ) {
        let divLinha = document.createElement('div');
        divLinha.className = 'linha'
        document.getElementById('pixel-board').appendChild(divLinha)
        let br = document.createElement('br')
        document.querySelector('.linha').appendChild(br)
        for(k = 1; k <= 5; k ++) {
            let divColuna = document.createElement('div')
            divColuna.className = 'pixel'
            document.querySelector('.linha').appendChild(divColuna)
        }
    }   
   
}
createBorderPixels();

let selectorPalletColor = document.querySelector('#color-palette');
selectorPalletColor.addEventListener('click', handlePalletItemEvent);

function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector('.selected')
    let currentSelectedDiv = event.target;
    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
    let mudaCor = currentSelectedDiv.style.backgroundColor

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains ('pixel')) {
            let pixel = event.target
            pixel.style.backgroundColor = mudaCor
        }
    }, false);
};

let divButton = document.querySelector('.button')
let buttonClear = document.createElement('button');
buttonClear.id = 'clear-board'
let textButton = document.createTextNode('Limpar'); 
buttonClear.appendChild(textButton)
divButton.appendChild(buttonClear)

buttonClear.addEventListener('click', limpaTudo)
function limpaTudo(){
    let clearPixelBoard = document.getElementsByClassName('pixel');
    for( i = 0; i <= clearPixelBoard.length - 1; i ++) {
        clearPixelBoard[i].style.backgroundColor = 'white'
    }
};

document.querySelector('#generate-board').addEventListener('click', boardSiseValidate);
document.querySelector('#generate-board').addEventListener('click', clearPixelBoard);
document.querySelector('#generate-board').addEventListener('click', userCreateBoard);
 
function boardSiseValidate() {
    let boardSise = document.querySelector('#board-size').value
    if(boardSise < 5 || boardSise > 50) {
        alert('Board inválido!');
    }
};

function clearPixelBoard() {
    let boardPixel = document.querySelector('#pixel-board')
    let itemPixel = boardPixel.querySelectorAll('.linha')
    for(i = 0; i <itemPixel.length; i += 1) {
        boardPixel.removeChild(itemPixel[i])
    }
}   

function userCreateBoard() {
    let boardSize = document.querySelector('#board-size').value;
    console.log(boardSize)
    for(i = 1; i <= boardSize; i ++) {
        let divLinha = document.createElement('div');
        divLinha.className = 'linha';
        document.getElementById('pixel-board').appendChild(divLinha);
        let br = document.createElement('br');
        document.querySelector('.linha').appendChild(br)
        for(k = 1; k <= boardSize; k++) {
            let divColuna = document.createElement('div')
            divColuna.className = 'pixel'
            document.querySelector('.linha').appendChild(divColuna)
        }
    }
}
