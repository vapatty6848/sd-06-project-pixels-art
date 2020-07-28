let selectedColor = 'Black';
let palette = document.getElementsByClassName('color');
let pixelBoard = document.getElementsByClassName('pixel');

window.onload = function () {
  
  // captura a cor após o click na paleta de cores
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener('click', function () {
      selectedColor = palette[i].style.backgroundColor;
      console.log(selectedColor)
    })
  }

  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].addEventListener('click', function () {
      pixelBoard[i].style.backgroundColor = selectedColor;
    })
  }


  




}