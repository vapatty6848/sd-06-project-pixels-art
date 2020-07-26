let corSelecionada = 'black';

const idBlack = document.getElementById('black');
idBlack.addEventListener('click', function () {
  corSelecionada = 'black';
});

const idRed = document.getElementById('red');
idRed.addEventListener('click', function () {
  corSelecionada = 'red';
});

const idBlue = document.getElementById('blue');
idBlue.addEventListener('click', function () {
  corSelecionada = 'blue';
});

const idGreen = document.getElementById('green');
idGreen.addEventListener('click', function () {
  corSelecionada = 'green';
});

function corDefinida(pixel) {
  pixel.addEventListener('click', function () {
    pixel.style.backgroundColor = corSelecionada;
  });
}

const arrayPixel = document.getElementsByClassName('pixel');
for (let i = 0; i < arrayPixel.length; i += 1) {
  corDefinida(arrayPixel[i]);
}

const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', function () {
  for (let i = 0; i < arrayPixel.length; i += 1) {
    arrayPixel[i].style.backgroundColor = 'white';
  }
});
