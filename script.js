window.onload = function () {
  const cores = ['black', 'gray', 'red', 'yellow'];
  const quantidade = 5;
  let corSelecionada = 'black';
  criarPaleta(cores);
  criarPixels(quantidade);
  pegaCor();
  pintar();
  limparTudo();
}
/* ******************************************************** */
function criarPaleta(cores) {
  for (let i = 0; i < cores.length; i += 1) {
    let criarCor = document.createElement('div');
    criarCor.className = 'color';
    criarCor.style.backgroundColor = cores[i];
    document.getElementById('color-palette').appendChild(criarCor);
    if ( cores[i] === 'black') {
      criarCor.className += ' selected';
    }
    console.log(criarCor.classList);
  }
}
/* ******************************************************** */
function criarPixels(quantidade) {
  for (let linha = 0; linha < quantidade; linha += 1) {
    let secao = document.createElement('section');
    nomeId = 'linha' + (linha + 1);
    secao.id = nomeId;
    document.getElementById('pixel-board').appendChild(secao);
    for (let coluna = 0; coluna < quantidade; coluna += 1) {
      let criarPixel = document.createElement('div');
      criarPixel.className = 'pixel';
      criarPixel.style.backgroundColor = 'white';
      document.getElementById(nomeId).appendChild(criarPixel);
    }
  }
}
/* ******************************************************** */
function pegaCor() {
  let cores = document.getElementsByClassName('color');
  let selecionada = document.querySelector('.selected')
  console.log(selecionada)
  for (let i = 0; i < cores.length; i +=1 ){
    cores[i].addEventListener('click', function() {
      corSelecionada = event.target.style.backgroundColor;
      cores[i].className += ' selected'
      selecionada.classList.remove('selected')
      selecionada = document.querySelector('.selected');
      console.log(corSelecionada);
    });
  }
}
/* ******************************************************** */
function pintar() {
  let pintarPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pintarPixel.length; i +=1){
    pintarPixel[i].addEventListener('click', function() {
      console.log(corSelecionada)
      pintarPixel[i].style.backgroundColor = corSelecionada;
    });
  }
}
/* ******************************************************** */
function limparTudo() {
  const btnLimpar = document.getElementById('clear-board');
  btnLimpar.addEventListener('click', function() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
/* ******************************************************** */

