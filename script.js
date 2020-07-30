window.onload = function () {
    let colorSelected = document.querySelector('.selected');
    let buttonClear = document.querySelector('#clear-board');
    let allPixel = document.getElementsByTagName('td');

    function printPixel() {
        this.className = 'pixel ${colorSelected.classList[1]}'
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