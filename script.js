window.onload = function() {
  const cores = ['black', 'gray', 'red', 'yellow'];
  const quantidade = 5;
  let corSelecionada = 'black';
  criarPaleta(cores);
  criarPixels(quantidade);
  capturaCor();
}
/* ******************************************************** */
function criarPaleta(cores) {
  for (let i = 0; i < cores.length; i += 1) {
    let criarCor = document.createElement('div');
    criarCor.className = 'color'
    criarCor.style.backgroundColor = cores[i];
    document.getElementById('color-palette').appendChild(criarCor);
    if ( cores[i] === 'black') {
      criarCor.classList.add('selected')
    }
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
function capturaCor(event) {
  let corAntiga = document.querySelector('.selected');
  let corNova = event.target;
  corAntiga.classList.remove('selected');
  corNova.classList.add('selected');
  corSelecionada = corNova.style.backgroundColor;
  console.log(corSelecionada);
}
