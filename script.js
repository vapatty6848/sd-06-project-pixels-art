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

    function frameChange () {
        event.target.style.backgroundColor = selectedColor;
    }

    const pixelFrame = document.querySelector('#pixel-board');
    pixelFrame.addEventListener('click', frameChange);
}





