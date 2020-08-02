window.onload = function () {
  let palette = document.getElementsByClassName('color');
  let selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  let pixelBoard = document.getElementsByClassName('pixel');
  let clear = document.querySelector('#clear-board');

  function clearPixelBoard () {
    for (let i = 0; i < pixelBoard.length; i += 1) {
      pixelBoard[i].style.backgroundColor = 'white';
    }
  }

  function changeColor (event) {
    let color = event.target

    if (color.classList.contains('selected')) {
      selectedColor = color.style.backgroundColor;
    } else {
      document.getElementsByClassName('selected')[0].classList.remove('selected');
      selectedColor = color.style.backgroundColor;
      color.classList.add('selected');
    }
  }

  // troca as cores inseridas no pixel board por branco
  clear.addEventListener('click', clearPixelBoard)

  // captura a cor após o click na paleta de cores
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener('click', changeColor)
  }

  // cada div da classe pixel ganha a cor que estiver selecionada na paleta após o clique
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].addEventListener('click', function() {
      pixelBoard[i].style.backgroundColor = selectedColor;
    })
  }
}
