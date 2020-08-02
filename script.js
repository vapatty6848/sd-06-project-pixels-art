

window.onload = function () {
  // cria o pixel board a partir das dimensões fornecidas
  function generateBoard() {
    let pixelBoard = document.getElementsByClassName('pixel');
    let board = document.getElementById('pixel-board');
    let brCount = board.getElementsByTagName('br');

    while (brCount.length > 0) {
      board.removeChild(brCount[0]);
    }

    while (pixelBoard.length > 0) {
      board.removeChild(pixelBoard[0]);
    }
    
    createPixelDivs (document.querySelector('#board-size').value);

    pixelBoard = document.getElementsByClassName('pixel');

    for (let i = 0; i < pixelBoard.length; i += 1) {
      pixelBoard[i].addEventListener('click', function() {
        pixelBoard[i].style.backgroundColor = selectedColor;
      })
    }
  }

  // limpa as cores que estão no pixel board
  function clearPixelBoard() {
    let pixelBoard = document.getElementsByClassName('pixel');

    for (let i = 0; i < pixelBoard.length; i += 1) {
      pixelBoard[i].style.backgroundColor = 'white';
    }
  }

  // define a classe da cor clicada como selected, p/ ser usada como referẽncia na hora de colorir o pixel board 
  function changeColor(event) {
    let color = event.target

    if (color.classList.contains('selected')) {
      selectedColor = color.style.backgroundColor;
    } else {
      document.getElementsByClassName('selected')[0].classList.remove('selected');
      selectedColor = color.style.backgroundColor;
      color.classList.add('selected');
    }
  }

  // função auxiliar da generateBoard, p/ criar as divs c/ a classe pixel
  function createPixelDivs(dim) {    
    for (let row = 1; row <= dim; row += 1){
      for (let col = 1; col <= dim; col += 1) {
        let pix = document.createElement('div');
        pix.classList.add('pixel');

        document.getElementById('pixel-board').appendChild(pix);

        if ((col % dim) === 0) {
          let br = document.createElement('br');
          document.getElementById('pixel-board').appendChild(br);
        }
      }      
    }
  }

  let palette = document.getElementsByClassName('color');
  let selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  const clear = document.querySelector('#clear-board');
  const generateButton = document.querySelector('#generate-board')

  // troca as cores inseridas no pixel board por branco
  clear.addEventListener('click', clearPixelBoard);

  // gera o pixel board a partir da dimensão fornecida
  generateButton.addEventListener('click', generateBoard);

  // captura a cor após o click na paleta de cores
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener('click', changeColor)
  }

}
