window.onload = function () {
  const listaDeItensPaleta = document.querySelectorAll('li');
  for (let indice = 0; indice < listaDeItensPaleta.length; indice += 1) {
    listaDeItensPaleta[indice].addEventListener('click', function () {
      for (let ordem = 0; ordem < listaDeItensPaleta.length; ordem += 1) {
        // console.log(listaDeItensPaleta[ordem].classList[1]);
        listaDeItensPaleta[ordem].classList.remove('selected');
      }
      this.classList.add('selected');
    });
  }
};
