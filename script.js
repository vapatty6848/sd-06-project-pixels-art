window.onload = function() {
    blackColor.classList.add('selected')
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
        for( k = 1; k <= 5; k ++) {
            let CriaDiv = document.createElement('div');
            let Board = document.getElementById('pixel-board');
            CriaDiv.className = 'pixel'
            Board.appendChild(CriaDiv)
            Board.appendChild(CriaDiv)
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