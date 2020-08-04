// Variável da cor selecionada
let corSelecionada = 'black';

// Função para adição da cor
function addCor(cor) {
  corSelecionada = cor;
  const selecionada = 'selected';
  const sintaxe = '.';
  const removerCor = document.querySelector('.selected');
  removerCor.classList.remove('selected');
  const adicionarCor = document.querySelector(sintaxe + cor);
  adicionarCor.classList.add(selecionada);
}

// Constantes da função colorir
const botaoPreto = document.querySelector('.black');
botaoPreto.addEventListener('click', function () {
  addCor('black');
});

const botaoVerde = document.querySelector('.green');
botaoVerde.addEventListener('click', function () {
  addCor('green');
});

const botaoRoxo = document.querySelector('.purple');
botaoRoxo.addEventListener('click', function () {
  addCor('purple');
});

const botaoVermelho = document.querySelector('.red');
botaoVermelho.addEventListener('click', function () {
  addCor('red');
});

// Constante da função de limpar
const limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', function () {
  const limparPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < limparPixel.length; index += 1) {
    limparPixel[index].style.backgroundColor = 'white';
  }
});

// Função e Const para criação de quadrantes
function criarPixel() {
    const div = document.createElement('div');
    div.className = 'pixel';
    return div;
  }

const criarQuadrante = document.querySelector('#generate-board');
criarQuadrante.addEventListener('click', function () {
  const inputQuadrante = document.getElementById('board-size');
  let quadrante = inputQuadrante.value * inputQuadrante.value;
  const pixeis = document.getElementById('pixel-board');
  pixeis.querySelectorAll('*').forEach((n) => n.remove());
  for (let index = 0; index < quadrante; index += 1) {
    pixeis.appendChild(criarPixel());
  }
  const grid = document.getElementsByClassName('board')[0];
  grid.style.width = 36 * inputQuadrante.value + 'px';
});

// Const para pintura dos quadrantes
const pintarQuadrante = document.querySelector('#pixel-board');
pintarQuadrante.addEventListener('click', function (event) {
  const corEscolhida = event.target;
  corEscolhida.style.backgroundColor = corSelecionada;
});
