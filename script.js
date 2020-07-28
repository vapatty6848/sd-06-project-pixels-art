let selectedColor = 'Black';

window.onload = function () {
  
  // captura a cor após o click na paleta de cores
  let palette = document.getElementsByClassName('color')
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener('click', function () {
      selectedColor = palette[i].style.backgroundColor;
      console.log(selectedColor)
    })
  }




}