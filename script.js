window.onload = function () {
  const mainPalette = document.getElementById('color-palette');
  const boardGrid = document.getElementById('pixel-board');
  const btnClear = document.getElementById('clear-button');
  let presentColor = 'black';

  // Adiciona novas opções de cores;
  const generateColor = ['black', 'red', 'blue', 'green'];

  // Adiciona as novas cores a paleta;
  function generatePalette(colorOptions) {
    for (let index = 0; index < colorOptions.length; index += 1) {
      const paletteOptions = createPixelColor(colorOptions[index]);
      mainPalette.appendChild(paletteOptions);
    }
  }
  generatePalette(generateColor);

  // Cria novos pixels de cores para a paleta;
  function createPixelColor(color) {
    const palettePixel = document.createElement('div');
    palettePixel.style.backgroundColor = color;
    palettePixel.className = 'color';
    palettePixel.addEventListener('click', selectColor);

    if (color === 'black') {
      palettePixel.classList.add('selected');
    }
    return palettePixel;
  }

  // Habilita e Desabilita a Cor desejada ao clicar;
  function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    const currentColor = event.target;
    selectedColor.classList.remove('selected');
    currentColor.classList.add('selected');
    presentColor = currentColor.style.backgroundColor;
  }

  // Cria o grid de pixel
  function createGrid(numberElements) {
    for (let index = 0; index < (numberElements**2); index += 1) {
      const pixel = document.createElement("div");
      boardGrid.appendChild(pixel);
      pixel.className = "pixel";
    }
  }
  createGrid(5);

  // Pinta os pixels da cor selecionada;
  function printPixel(event) {
    let selectedPixel = event.target;
    selectedPixel.style.backgroundColor = presentColor;
  }
  boardGrid.addEventListener("click", printPixel);

  // const btnClear = document.querySelector("#clear-board");
  // btnClear.addEventListener('click', function () {
  //   alert("funcionando!");
  // })

}
