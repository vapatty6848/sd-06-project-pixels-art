window.onload = function () {
    let selectedColor = 'black';
    document.getElementById('black').style.backgroundColor = 'black';
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('green').style.backgroundColor = 'green';
    document.getElementById('yellow').style.backgroundColor = 'yellow';

    function selecionaCor () {
        const oldSelected = document.querySelector('.selected');
        const currentSelected = event.target;
        oldSelected.classList.remove('selected');
        currentSelected.classList.add('selected');
        selectedColor = currentSelected.style.backgroundColor;
    }   
    const colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', selecionaCor);

    function selecionaQuadrado () {
        event.target.style.backgroundColor = selectedColor;
    }
    const pixelFrame = document.querySelector('#pixel-board');
    pixelFrame.addEventListener('click', selecionaQuadrado);

    function clearQuadrado () {
        const pixelFrame = document.getElementsByClassName('pixel');
        for(let i = 0; i < pixelFrame.length; i += 1) {
            pixelFrame[i].style.backgroundColor = 'white';
        }
    }
    const clearBoard = document.getElementById('clear-board');
    clearBoard.addEventListener('click', clearQuadrado)



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