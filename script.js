const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
let = corSelecionada = 'black';
colors[0].classList.add('selected');

for (let cor = 0; cor < colors.length; cor++) {
  colors[cor].addEventListener('click', function () {
   for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove('selected')
   }
    colors[cor].classList.add('selected')
    corSelecionada = colors[cor].id
  })
}

for(let pixel = 0; pixel < pixels.length; pixel += 1){
  pixels[pixel].addEventListener('click', function () {
    pixels[pixel].style.backgroundColor = corSelecionada;
  });
}







