const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
const btnLimpar = document.querySelector('#clear-board');
const inputBoard = document.querySelector('#board-size');
const btnGenerate = document.querySelector('#generate-board');

let corSelecionada = 'black';
for (let pixel = 0; pixel < pixels.length; pixel += 1) {
  pixels[pixel].addEventListener('click', function () {
    pixels[pixel].style.backgroundColor = corSelecionada;
  });
}

for (let color = 0; color < colors.length; color += 1) {
  const cor = colors[color];
  cor.addEventListener('click', function () {
    if (!cor.classList.contains('selected')) {
      for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove('selected');
      }
      cor.className += ' selected';
      corSelecionada = colors[color].classList[1];
    }
  });
}

btnLimpar.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

btnGenerate.addEventListener('click', () => {
  let value = inputBoard.value;
  if(value === ''){
    alert('Board inválido!');
  }
});
