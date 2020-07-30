window.onload = function () {
    let selected = '';
    createPixelBoard(5);
      document.getElementById('pixel-board').addEventListener('click', alternativeClickPixel);
      document.getElementById('color-palette').addEventListener('click', alternativeSelectColor);
      document.getElementById('clear-board').addEventListener('click', clearBoard);
      selected = window.getComputedStyle(document.getElementsByClassName('color')[0], null).getPropertyValue('background-color');
    
    
    function alternativeClickPixel(event) {
      event.target.style.backgroundColor = selected;
    }
    
    function alternativeSelectColor(event) {
      for (let item = 0; item < document.getElementsByClassName('color').length; item += 1) {
        document.getElementsByClassName('color')[item].classList.remove('selected');
      }
      event.target.classList.add('selected');
      selected = window.getComputedStyle(document.getElementsByClassName('selected')[0], null).getPropertyValue('background-color');
    }
    
    function clearBoard() {
      for (let element = 0; element < document.getElementsByClassName('pixel').length; element += 1) {
        document.getElementsByClassName('pixel')[element].style.backgroundColor = 'white';
      }
    }
    
    function createPixelBoard(parameter) {
        for (let line = 0; line < parseInt(parameter, 10); line += 1) {
          const linha = document.createElement('div');
          linha.classList.add('tr');
          document.getElementById('pixel-board').appendChild(linha);
          for (let column = 0; column < parameter; column += 1) {
            const coluna = document.createElement('div');
            coluna.classList.add('td', 'pixel');
            document.getElementsByClassName('tr')[line].appendChild(coluna);
          }
        }
    }
}
    