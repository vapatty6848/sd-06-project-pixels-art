window.onload = function() {
  const cores = ['black', 'gray', 'red', 'yellow'];
  const quantidade = 5;
  let corSelecionada = 'black';
  criarPaleta(cores);
  criarPixels(quantidade);
}
/* ******************************************************** */
function criarPaleta(cores) {
  for (let i = 0; i < cores.length; i += 1) {
    let criarCor = document.createElement('div');
    criarCor.className = 'color'
    criarCor.style.backgroundColor = cores[i];
    document.getElementById('color-palette').appendChild(criarCor);
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

