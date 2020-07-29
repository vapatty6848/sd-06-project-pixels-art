window.onload = function () {
  //  Criacao da paleta com os correspondentes cores
  const palette = document.querySelector('#color-palette');
  const colorsArray = palette.children;
  colorsArray[0].style.backgroundColor = 'black';
  colorsArray[1].style.backgroundColor = 'red';
  colorsArray[2].style.backgroundColor = 'orange';
  colorsArray[3].style.backgroundColor = 'green';
  //  Criacao de quadrado
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    document.querySelector('#pixel-board').appendChild(div);
  }
  //  Cambiar o elemento que contem a class selected
  function mudarClass(event) {
    const corSelecionado = document.querySelector('.selected');
    const corNovoSelecionado = event.target;
    corSelecionado.classList.remove('selected');
    corNovoSelecionado.classList.add('selected');
  }
  //  colocar cor na palete
  const quadrado = document.querySelector('#pixel-board');
  let color = 'black';
  colocarCor(color);
  function colocarCor(color) {
    quadrado.addEventListener('click', function (event) {
      event.target.style.backgroundColor = color;
    });
  }
  //  Seleccionar cor
  palette.addEventListener('click', function (event) {
    mudarClass(event);
    color = event.target.style.backgroundColor;
    colocarCor(color);
  });
  //  Funcao botao apagar os cored do quadrado
  const botaoLimpar = document.querySelector('#clear-board');
  const pixel = quadrado.children;
  botaoLimpar.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
};
