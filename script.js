window.onload = function () {
  //  Criacao da paleta com os correspondentes cores
  let color_Palette = document.querySelector('#color-palette');
  let colorsArray = color_Palette.children;
  colorsArray[0].style.backgroundColor = 'black';
  colorsArray[1].style.backgroundColor = 'red';
  colorsArray[2].style.backgroundColor = 'orange';
  colorsArray[3].style.backgroundColor = 'green';

  //  Criacao de quadrado
  for (let i = 0; i < 25; i += 1) {
    let div = document.createElement('div');
    div.className = 'pixel';
    document.querySelector('#pixel-board').appendChild(div);
  }

  //  Seleccionar cor
  let selCor = document.querySelector('#color-palette');
  selCor.addEventListener('click', function (event) {
    mudarClass(event);
  })

  //  Cambiar o elemento que contem a class selected
  function mudarClass (event) {
    let corSelecionado = document.querySelector('.selected');
    let corNovoSelecionado = event.target;
    corSelecionado.classList.remove('selected');
    corNovoSelecionado.classList.add('selected');
  }
}