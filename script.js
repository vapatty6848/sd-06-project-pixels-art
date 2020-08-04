window.onload = function () {
  let tamanhoQuadro = 5;
  window.onload = criarQuadrado(tamanhoQuadro);
  //  Criacao da paleta com os correspondentes cores
  const palette = document.querySelector('#color-palette');
  const colorsArray = palette.children;
  colorsArray[0].style.backgroundColor = 'black';
  colorsArray[1].style.backgroundColor = 'red';
  colorsArray[2].style.backgroundColor = 'orange';
  colorsArray[3].style.backgroundColor = 'green';


  //  Quadrado
  

  //  Criacao de quadrado
  //for (let i = 0; i < 25; i += 1) {
  //  const div = document.createElement('div');
  //  div.className = 'pixel';
  //  document.querySelector('#pixel-board').appendChild(div);
  //}
  
  //  Cambiar o elemento que contem a class selected
  function mudarClass(event) {
    const corSelecionado = document.querySelector('.selected');
    const corNovoSelecionado = event.target;
    corSelecionado.classList.remove('selected');
    corNovoSelecionado.classList.add('selected');
  }

  //  colocar cor na palete
  let quadrado = document.querySelector('#pixel-board');
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
  let board = document.querySelectorAll('.pixel');
  botaoLimpar.addEventListener('click', function () {
    for (let i = 0; i < board.length; i += 1) {
      board[i].style.backgroundColor = 'white';
    }
  });

  //  Botao fazer quadrado tamanho definido
  const botaoGenerer = document.querySelector('#generate-board');
  
  botaoGenerer.addEventListener('click', function () {
    //  Limpa os quadrados
    let quadrado = document.querySelector('#pixel-board').children;
    quadradoTr = quadrado.length;
    for (let i = 0; i < quadradoTr; i += 1){
      quadrado[0].remove();
    }
    let tamanhoQuadro = document.querySelector('#board-size').value;
    criarQuadrado(tamanhoQuadro)
  });


  function criarQuadrado(tamanhoQuadro) {
    for (let i = 0; i < tamanhoQuadro; i += 1) {
      let tr = document.createElement('tr');
      document.querySelector('#pixel-board').appendChild(tr);
      for (let e = 0; e < tamanhoQuadro; e += 1) {
        const td = document.createElement('td');
        td.classList = ('pixel');
        document.querySelectorAll('tr')[i].appendChild(td);
      }
    }
  }
};
