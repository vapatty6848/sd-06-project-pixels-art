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
criarEventos();

const colors = document.querySelectorAll('.color');
for (let color = 0; color < colors.length; color += 1) {
  const cor = colors[color];
  cor.addEventListener('click', function () {
    if (!cor.classList.contains('selected')) {
      for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove('selected');
      }
      cor.className += ' selected';
      corSelecionada = event.target.style.backgroundColor;
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
  const tbody = document.createElement('tbody');
  pixelBoard.appendChild(tbody);
  for (let i = 0; i < pixels; i += 1) {
    const tr = document.createElement('tr');
    tr.className = 'linha';
    tbody.appendChild(tr);
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
    const tabela = document.querySelector('tbody');
    pixelBoard.removeChild(tabela);
    gerarPixels(value);
  }
});

function aleatorio(tamanhoArray) {
  const numPossibilidades = tamanhoArray;
  let aleat = Math.random() * numPossibilidades;
  aleat = Math.floor(aleat);
  return aleat;
}

function corAleatoria() {
  for (let i = 1; i < colors.length; i += 1) {
    const hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    for (let j = 0; j < 6; j += 1) {
      const posarray = aleatorio(hexadecimal.length);
      cor += hexadecimal[posarray];
    }
    colors[i].style.backgroundColor = `${cor}`;
  }
}
corAleatoria();
