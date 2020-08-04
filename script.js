// criando tabela pixels
for (let i = 0; i < 5; i += 1) {
  const createTr = document.createElement('tr');
  createTr.className = 'tabela';
  document.querySelector('.pixel-board').appendChild(createTr);
  for (let index = 0; index < 5; index += 1) {
    const createTd = document.createElement('td');
    createTd.className = 'pixel';
    createTd.backgroundColor = 'white';
    createTr.appendChild(createTd);
  }
}
// função para selecionar a cor
function changeSelected(select) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  select.className += ' selected';
}
// Evento para trocar a cor clicada
document.querySelector('#color-palette').addEventListener('click', function (e) {
  changeSelected(e.target);
});
//Evento para trocar a cor do pixel
document.querySelector('.pixel-board').addEventListener('click', function (e) {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});
//função limpa todos os pixels
function clearBoard() {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.removeProperty('background-color');
  }
}
//Evento do botão de limpa todos os pixels
document.querySelector('#clear-board').addEventListener('click', clearBoard);