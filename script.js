const btnLimpar = document.querySelector('#clear-board');
const inputBoard = document.querySelector('#board-size');
const btnGenerate = document.querySelector('#generate-board');
const pixelBoard = document.querySelector('#pixel-board');

let corSelecionada = 'black';
function criarEventos() {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].addEventListener('click', function () {
      pixels[pixel].style.backgroundColor = corSelecionada;
    });
  }
}
const colors = document.querySelectorAll('.color');
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
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

function gerarPixels(pixels) {
  if (pixels < 5) {
    pixels = 5;
  } else if (pixels > 50) {
    pixels = 50;
  }
  for (let i = 0; i < pixels; i += 1) {
    const tr = document.createElement('tr');
    tr.className = 'linha';
    pixelBoard.appendChild(tr);
    for (let j = 0; j < pixels; j += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
  }
  criarEventos();
}

btnGenerate.addEventListener('click', () => {
  const value = inputBoard.value;
  if (value === '') {
    alert('Board inválido!');
  } else {
    gerarPixels(value);
  }
});
