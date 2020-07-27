window.onload = function() {
    const cor0 = document.querySelectorAll('.color')[0];
    cor0.className = 'selected';
    const limpar = document.getElementById('clear-board');
    limpar.addEventListener('click', function() {
        const pixel = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixel.length; i += 1) {
            pixel[i].style.backgroundColor = 'white';
        }
    })
}