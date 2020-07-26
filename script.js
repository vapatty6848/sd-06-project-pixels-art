const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
let corSelecionada = 'black';

for (let i = 0; i < pixels.length; i+= 1) {
    pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = corSelecionada;
    });
}

for (let i = 0; i < colors.length; i+= 1) {
    let cor = colors[i]
    cor.addEventListener('click', function(){
        if(!cor.classList.contains('selected')){
            for (let j = 0; j < colors.length; j=+ 1) {
                colors[i].classList.remove('selected');
            }
            cor.className += ' selected'
            corSelecionada = colors[color].classList[1];
        }
    })
} 

