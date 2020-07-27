window.onload = function () {
  const colorPalette = document.querySelector('#color-palette');
  const pixelsBoard = document.getElementById('pixel-board');
  const clearButton = document.getElementById('clear-board');


  function changeClass(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
  colorPalette.addEventListener('click', changeClass);

  function pixelColoring(event) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  }
  pixelsBoard.addEventListener('click', pixelColoring);

  function clearBoard() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = '';
    }
  }
  clearButton.addEventListener('click', clearBoard);

    /* *******Tentativa usando o webstorage******************
    //localStorage.setItem("chosenColor", "black"); // selecionando a cor preta ao carregar a página
    //localStorage.setItem("chosenColor", "black"); // selecionando a cor preta ao carregar a página
    // colorPalette.addEventListener('click', function (event) {
    //   localStorage.setItem("chosenColor", event.target.id);
    //   let chosenColor = localStorage.getItem("chosenColor");
    //   return chosenColor;
    // });
    /****************************************************** */
};
