window.onload = function () {
  const cores = ['black', 'gray', 'red', 'yellow'];
  const quantidade = 5;
  const btnLimpar = document.getElementById('clear-board');
  let corSelecionada = 'black';
  criarPaleta(cores);
  criarPixels(quantidade);
  pegaCor();
  btnLimpar.addEventListener('click', limparTudo);
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
  for (let i = 0; i < pixel.length; i +=1){
    pixel[i].addEventListener('click', function() {
      console.log(corSelecionada)
      pixel[i].event.target.style.backgroundColor = corSelecionada;
    });
  }
}
/* ******************************************************** */
function limparTudo() {
  btnLimpar.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
}
