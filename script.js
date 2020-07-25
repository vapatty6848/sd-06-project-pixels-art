const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
let corSelecionada = 'black';
for (let i = 0; i < pixels.length; i+= 1) {
    pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = corSelecionada;
    });
}

/*/for (let i = 0; i < colors.length; i+= 1) {
    colors[i].addEventListener('click', function () {
        corSelecionada = colors[i].style.backgroundColor
    })
    
}/*/
