window.onload = function () {
    let selectedColor = 'black';
    document.getElementById('black').style.backgroundColor = 'black';
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('green').style.backgroundColor = 'green';
    document.getElementById('yellow').style.backgroundColor = 'yellow';

    function colorChange () {
        const oldPixelSelected = document.querySelector('.selected');
        const currentPixelSelected = event.target;
        oldPixelSelected.classList.remove('selected');
        currentPixelSelected.classList.add('selected');
        selectedColor = currentPixelSelected.style.backgroundColor;
    }   
    const colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', colorChange);

    function changeFrame () {
        event.target.style.backgroundColor = selectedColor;
    }
    const pixelFrame = document.querySelector('#pixel-board');
    pixelFrame.addEventListener('click', changeFrame);

    function clearFrame () {
        const pixelFrame = document.getElementsByClassName('pixel');
        for(let i = 0; i < pixelFrame.length; i += 1) {
            pixelFrame[i].style.backgroundColor = 'white';
        }
    }
    const clearBoard = document.getElementById('clear-board');
    clearBoard.addEventListener('click', clearFrame)



    function createFramePixel () {
        const num = document.getElementById('board-size').value;
        const aux = document.getElementById('pixel-board');
        while(aux.firstChild) {
            aux.firstChild.remove();
        }
        for(let i = 0; i < num.length; i += 1) {
            const aux = document.getElementById('pixel-board');
            let divLinePixel = document.createElement('div');
            divLinePixel.classList.add('line-pixel');
            aux.appendChild(divLinePixel);
            for(let a = 0; a < num.length; a += 1) {
                const aux1 = document.querySelector('.line-pixel');
                let divPixel = document.createElement('div');
                divPixel.className = 'pixel';
                aux1.appendChild(divPixel);
            }
        }
    }

    const generateBoard = document.getElementById('generate-board');
    generateBoard.addEventListener('click', createFramePixel);    
}