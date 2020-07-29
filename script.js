const btnLimpar = document.querySelector('#clear-board');
const inputBoard = document.querySelector('#board-size');
const btnGenerate = document.querySelector('#generate-board');
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');

let corSelecionada = 'black';
pixelBoard.addEventListener('click', function (e) {
  e.target.style.backgroundColor = corSelecionada;
});

colorPalette.addEventListener('click', function (e) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  e.target.className += ' selected';
  corSelecionada = event.target.style.backgroundColor;
});

btnLimpar.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

function gerarPixels(numberPixels) {
  if (numberPixels < 5) {
    numberPixels = 5;
  } else if (numberPixels > 50) {
    numberPixels = 50;
  }
  const tbody = document.createElement('tbody');
  pixelBoard.appendChild(tbody);
  for (let i = 0; i < numberPixels; i += 1) {
    const tr = document.createElement('tr');
    tr.className = 'linha';
    tbody.appendChild(tr);
    for (let j = 0; j < numberPixels; j += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
  }
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
