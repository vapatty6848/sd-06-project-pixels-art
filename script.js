const cores = ['black', 'gray', 'red', 'yellow'];
let quantidade = 5;
let corSelecionada;
/* ******************************************************** */
function criarPaleta(cores) {
  for (let i = 0; i < cores.length; i += 1) {
    const criarCor = document.createElement('div');
    criarCor.className = 'color';
    criarCor.style.backgroundColor = cores[i];
    document.getElementById('color-palette').appendChild(criarCor);
    if (cores[i] === 'black') {
      criarCor.classList.add('selected');
      corSelecionada = 'black';
    }
  }
}
/* ******************************************************** */
function criarPixels(quantidade) {
  for (let linha = 0; linha < quantidade; linha += 1) {
    const secao = document.createElement('section');
    const nomeId = 'linha' + (linha + 1);
    secao.id = nomeId;
    document.getElementById('pixel-board').appendChild(secao);
    for (let coluna = 0; coluna < quantidade; coluna += 1) {
      const criarPixel = document.createElement('div');
      criarPixel.className = 'pixel';
      criarPixel.style.backgroundColor = 'white';
      document.getElementById(nomeId).appendChild(criarPixel);
    }
  }
}
/* ******************************************************** */
function pegaCor() {
  const corAntiga = document.getElementsByClassName('selected');
  const cores = document.querySelector('#color-palette');
  cores.addEventListener('click', function(event) {
    let corAtual = event.target;
    for (let i = 0; i < corAntiga.length; i += 1) {
      corAntiga[i].classList.remove('selected');
    }
    corAtual.classList.add('selected');
    corSelecionada = corAtual.style.backgroundColor;
  });
}
/* ******************************************************** */
// function pegaCor() {
//   const cores = document.getElementsByClassName('color');
//   let selecionada = document.querySelector('.selected');
//   for (let i = 0; i < cores.length; i += 1) {
//     cores[i].addEventListener('click', function () {
//       corSelecionada = event.target.style.backgroundColor;
//       cores[i].classList.add('selected');
//       selecionada.classList.remove('selected');
//       selecionada = document.querySelector('.selected');
//     });
//   }
// }
/* ******************************************************** */
function pintar() {
  const pintarPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pintarPixel.length; i += 1) {
    pintarPixel[i].addEventListener('click', function () {
      pintarPixel[i].style.backgroundColor = corSelecionada;
    });
  }
}
/* ******************************************************** */
function limparTudo() {
  const btnLimpar = document.getElementById('clear-board');
  btnLimpar.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
/* ******************************************************** */
// function btnBoardSize() {
//   let pixels = document.querySelectorAll('#pixel');
//   let tamanho = document.getElementById('board-size');
//   let btnPixels = document.querySelector('#generate-board');
//   btnPixels.addEventListener('click', function() {
//     for (let i = pixels.length; i > 0; i -= 1 ){
//       document.querySelector('pixel-board').removeChild;
//     }
//     criarPixels(tamanho.value);
//   });
// }
/* ******************************************************** */
window.onload = function () {
  criarPaleta(cores);
  criarPixels(quantidade);
  pegaCor();
  pintar();
  limparTudo();
  //btnBoardSize();
};
/* ******************************************************** */
