window.onload = function () {
    let colorPalette = document.querySelectorAll('color');
    let colorSelected = document.querySelector('.selected');
    let buttonClear = document.querySelector('#clear-board');
    let allPixel = document.getElementsByTagName('td');

    function SelectColor() {
        for (let index = 0; index < colorPalette.length; index += 1) {
            colorPalette[index].classList.remove('selected');
        }
        this.classList.add('selected');
        colorSelected = document.querySelector('.selected');
    }

    function printPixel() {
        this.className = 'pixel ${colorSelected.classList[1]}'
    }

    for (let index = 0; index < colorPalette.length; index += 1) {
        allPixel[index].addEventListener('click', SelectColor);
        
    }
    
    for (let index = 0; index < allPixel.length; index += 1) {
        allPixel[index].addEventListener('click', printPixel);
        
    }

    buttonClear.addEventListener('click', function () {
        for (let index = 0; index < allPixel.length; index += 1) {
            allPixel[index].className = 'pixel';            
        }
    });
};