
createPalette = (['black', 'blue', 'brown', 'cyan']);    
//cria div inteira precisa de uma array de cores 
    //Pega a paleta de cores e add os itens a paleta
    function createColorPallet(colors) {
      let paletteContainer = document.getElementById("color-palette");
      for (let i in colors) {
        let paletteColorDiv = createPalletItem(colors[i]);
        paletteContainer.appendChild(paletteColorDiv);
      }
    }

    //Criação dos itens da paleta (divs)
    function createPalletItem(color) {
      let paletteColorDiv = document.createElement('div');
      paletteColorDiv.style.backgroundColor = color;
      paletteColorDiv.className = 'color';
      paletteColorDiv.addEventListener('click', handlePaletteColorEvent);
        if (color === 'black') {
          paletteColorDiv.classList.add('selected');
        }
      return paletteColorDiv;
    }

    //Quando clica, add o selected e retira da cor antiga
    function handlePaletteColorEvent (event) {
      let oldSelectedDiv = document.querySelector('.selected');
      let currentSelectedDiv = event.target;

      oldSelectedDiv.classList.remove('selected');
      currentSelectedDiv.classList.add('selected');
      selectedColor = currentSelectedDiv.style.backgroundColor;
    }

    let boardDiv = document.querySelector('.pixel_board');
    boardDiv.addEventListener('click', handlePixelClick);

    function handlePixelClick(event) {
      let selectedPixelDiv = event.target;
      selectedPixelDiv.style.backgroundColor = selectedColor;
    }

    // Criando pixel board pelo usuario
    function createPixelBoard() {
      let sizeBoard = document.getElementById('size').value;
        if (sizeBoard === 0) {
          alert('Board inválido!');
        } else if (sizeBoard < 5) {
          sizeBoard = 5;
        }

    } 


 // Botão reset
    function resetPixelBoard() {
      let pixels = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';
      }
    } 