
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
  let palette = document.querySelector('#color-palette');
  palette.addEventListener('click', function (event) {
    mudarClass(event);
    color = event.target.style.backgroundColor;
    colocarCor(color);
  })
  

  //  Cambiar o elemento que contem a class selected
  function mudarClass (event) {
    let corSelecionado = document.querySelector('.selected');
    let corNovoSelecionado = event.target;
    corSelecionado.classList.remove('selected');
    corNovoSelecionado.classList.add('selected');
  }

  //  colocar cor na palete
  let color = 'black';
  colocarCor(color);
  function colocarCor (color) {
    let quadrado = document.querySelector('#pixel-board');
    quadrado.addEventListener('click', function (event) {
      event.target.style.backgroundColor = color;
    });
  }
}