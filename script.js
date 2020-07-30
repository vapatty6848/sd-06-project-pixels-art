window.onload = function () {
    const palette = document.querySelector('#color-palette');
    const cor = palette.children;
    cor[0].style.backgroundColor = 'black';
    cor[1].style.backgroundColor = 'blue';
    cor[2].style.backgroundColor = 'orange';
    cor[3].style.backgroundColor = 'yellow';
    for (let i = 0; i < 25; i += 1) {
        const div = document.createElement('div');
        div.className = 'pixel';
        document.querySelector('#pixel-board').appendChild(div);
    }
    function chClass(event) {
        const pixelColor = document.querySelector('.selected');
        const nPixelColor = event.target;
        pixelColor.classList.remove('selected');
        nPixelColor.classList.add('selected');
    }
    const square = document.querySelector('#pixel-board');
    let color = 'black';
    colocarCor(color);
    function colocarCor(color) {
        square.addEventListener('click', function (event) {
            event.target.style.backgroundColor = color;
        });
    }
    palette.addEventListener('click', function (event) {
        chClass(event);
        color = event.target.style.backgroundColor;
        colocarCor(color);
    });
    const clear = document.querySelector('#clear-board');
    const pixel = square.children;
    clear.addEventListener('click', function () {
        for (let i = 0; i < pixel.length; i += 1) {
            pixel[i].style.backgroundColor = 'white';
        }
    });
};