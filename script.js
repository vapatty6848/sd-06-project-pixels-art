// Váriaveis Globais
let boardSize;
let nPixels = 25;
const corPreto = document.getElementById('preto');
const corVerde = document.getElementById('verde');
const corVermelho = document.getElementById('vermelho');
const corAmarelo = document.getElementById('amarelo');
const form = document.getElementById('generate');
const campo = document.getElementById('board-size');
const pixelBoard = document.getElementById('pixel-board');
// Iniciando o mouse em "Black"
let novaCor = 'black';

// gerar cor aleatória
// link do site usado como base
// https://www.it-swarm.dev/pt/javascript/gerador-de-cores-aleatorias/967183954/
// function r() { return Math.floor(Math.random() * 255) };
// const color1 = 'rgb(' + r() + "," + r() + "," + r() + ')';
// const color2 = 'rgb(' + r() + "," + r() + "," + r() + ')';
// const color3 = 'rgb(' + r() + "," + r() + "," + r() + ')';
// corVerde.style.background = color1;
// corVermelho.style.background = color2;
// corAmarelo.style.background = color3;

// Escutando o click, e atribuindo a cor para o mouse
function colors() {
  corPreto.addEventListener('click', () => {
    novaCor = 'black';
    corPreto.classList.add('selected');
    corVerde.classList.remove('selected');
    corVermelho.classList.remove('selected');
    corAmarelo.classList.remove('selected');
  });
  corVerde.addEventListener('click', () => {
    novaCor = 'green';
    corVerde.classList.add('selected');
    corPreto.classList.remove('selected');
    corVermelho.classList.remove('selected');
    corAmarelo.classList.remove('selected');
  });
  corVermelho.addEventListener('click', () => {
    novaCor = 'red';
    corVermelho.classList.add('selected');
    corVerde.classList.remove('selected');
    corPreto.classList.remove('selected');
    corAmarelo.classList.remove('selected');
  });
  corAmarelo.addEventListener('click', () => {
    novaCor = 'yellow';
    corAmarelo.classList.add('selected');
    corVerde.classList.remove('selected');
    corVermelho.classList.remove('selected');
    corPreto.classList.remove('selected');
  });

  // escutando o click, e atribuindo a cor para o pixel selecionado
  document.querySelectorAll('.pixel').forEach((item) => {
    item.addEventListener('click', () => { item.style.background = novaCor; });
  });

  // botão para limpar as cores
  document.getElementById('clear-board').addEventListener('click', function () {
    document.querySelectorAll('.pixel').forEach((item) => {
      item.style.background = 'white';
    });
    // novaCor = "black";
  });
}

form.addEventListener('submit', function (e) {
  // Comando para a página não recarregar
  e.preventDefault();

  // Evitar que o input seja vazio
  boardSize = campo.value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else {
    // Limitar o input entre 5 e 50
    if (boardSize < 5) {
      nPixels = 5;
    } else if (boardSize > 50) {
      nPixels = 50;
    } else {
      nPixels = boardSize;
    }

    // remover a tabela original
    pixelBoard.removeChild(pixelBoard.childNodes[1]);
    // Criar o corpo da nova tabela
    let tBody = document.createElement('tbody');
    pixelBoard.appendChild(tBody);
    // Criar a nova tabela
    for(let i = 0; i < nPixels; i += 1){
      let trCreate = document.createElement('tr');
      tBody.appendChild(trCreate);
      for(let j = 0; j < nPixels; j += 1){
        let tdCreate = document.createElement('td');
        tdCreate.classList = 'pixel';
        trCreate.appendChild(tdCreate);
      }
    }
    // Chamando função de colorir.
    // Deve ser chamada novamente pois a tabela foi criada depois da leitura da pagina
    colors();
  }
});

// Chamando função de colorir. Iniciando o JS de fato.
colors();
