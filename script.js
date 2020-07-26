let corSelecionada = "";

let idBlack = document.getElementById('black');
idBlack.addEventListener('click', function () {
  corSelecionada = 'black';
});

let idRed = document.getElementById('red');
idRed.addEventListener('click', function () {
  corSelecionada = 'red';
});

let idBlue = document.getElementById('blue');
idBlue.addEventListener('click', function () {
  corSelecionada = 'blue';
});

let idGreen = document.getElementById('green');
idGreen.addEventListener('click', function () {
  corSelecionada = 'green';
});

let arrayPixel = document.getElementsByClassName('pixel');
for (let i = 0; i < arrayPixel.length; i += 1) {
  arrayPixel[i].addEventListener('click', function () {
    arrayPixel[i].style.backgroundColor = corSelecionada;
  });
}
