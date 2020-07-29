window.onload = function () {
  const listaDeItensPaleta = document.querySelectorAll('li');
  const apagaTudo = document.querySelector('#clear-board');
  let corSelecionada = document.querySelector('.selected');
  const todosQuadros = document.getElementsByTagName('td');

  function toggleSelect() {
    for (let ordem = 0; ordem < listaDeItensPaleta.length; ordem += 1) {
      listaDeItensPaleta[ordem].classList.remove('selected');
    }
    this.classList.add('selected');
    corSelecionada = document.querySelector('.selected');
  }

  function paintPixel() {
    this.className = `pixel ${corSelecionada.classList[1]}`;
  }

  for (let indice = 0; indice < listaDeItensPaleta.length; indice += 1) {
    listaDeItensPaleta[indice].addEventListener('click', toggleSelect);
  }

  for (let indice = 0; indice < todosQuadros.length; indice += 1) {
    todosQuadros[indice].addEventListener('click', paintPixel);
  }

  apagaTudo.addEventListener('click', function () {
    for (let indice = 0; indice < todosQuadros.length; indice += 1) {
      todosQuadros[indice].className = 'pixel white';
    }
  });
};
