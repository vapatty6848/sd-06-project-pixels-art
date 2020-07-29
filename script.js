function criarPaleta(cores) {
  for (let i = 0; i < cores.length; i += 1) {
    const criarCor = document.createElement('div');
    criarCor.className = 'color';
    criarCor.style.backgroundColor = cores[i];
    document.getElementById('color-palette').appendChild(criarCor);
    if (cores[i] === 'black') {
      criarCor.className += ' selected';
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
  const cores = document.getElementsByClassName('color');
  let selecionada = document.querySelector('.selected');
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', function () {
      corSelecionada = event.target.style.backgroundColor;
      cores[i].className += ' selected';
      selecionada.classList.remove('selected');
      selecionada = document.querySelector('.selected');
    });
  }
}
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
window.onload = function () {
  const cores = ['black', 'gray', 'red', 'yellow'];
  const quantidade = 5;
  let corSelecionada;
  criarPaleta(cores);
  criarPixels(quantidade);
  pegaCor();
  pintar();
  limparTudo();
};
/* ******************************************************** */
