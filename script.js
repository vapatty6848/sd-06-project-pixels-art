window.onload = function () {
    const palette = document.querySelector('#color-palette');
    const cor = palette.children;
    cor[0].style.backgroundColor = 'black';
    cor[1].style.backgroundColor = 'blue';
    cor[2].style.backgroundColor = 'yellow';
    cor[3].style.backgroundColor = 'red';

    for (let i = 0; i < 25; i += 1) {
        const square = document.createElement('div');
        square.className = 'pixel';
        document.querySelector('#pixel-board').appendChild(square);
        }