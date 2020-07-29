const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
const clearBoard = document.getElementById('clear-board')
let = corSelecionada = 'black';
colors[0].classList.add('selected');

//Muda selecionada para a cor que o usuario clicou na paleta de cores
for (let cor = 0; cor < colors.length; cor++) {
  colors[cor].addEventListener('click', function () {
   for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove('selected')
   }
    colors[cor].classList.add('selected')
    if (colors[cor].classList.contains('selected')){
      corSelecionada = colors[cor].id
    }

  })
}

//Pinta o pixel com a cor selecionada
for(let pixel = 0; pixel < pixels.length; pixel += 1){
  pixels[pixel].addEventListener('click', function () {
    pixels[pixel].style.backgroundColor = corSelecionada;
  });
}

//Pinta o quadro inteiro de Branco
clearBoard.addEventListener('click', function () {
  for(let pixel = 0; pixel < pixels.length; pixel += 1){
    pixels[pixel].style.backgroundColor = 'white'
  }
})








