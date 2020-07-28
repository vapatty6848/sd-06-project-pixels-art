window.onload = function () {
  let color_Palette = document.querySelector('#color-palette');
  let colorsArray = color_Palette.children;
  colorsArray[0].style.backgroundColor = 'black';
  colorsArray[1].style.backgroundColor = 'red';
  colorsArray[2].style.backgroundColor = 'orange';
  colorsArray[3].style.backgroundColor = 'green';

  let quadrado = document.querySelector('.pixel');
  let quadradoTotal = document.querySelector('#pixel-board');
  for (let i = 0; i < 4; i += 1) {
    
    for (let i = 0; i < 4; i += 1) {
      
      let div = document.createElement('div');
      div.className = 'pixel';
      document.querySelector('#pixel-board').appendChild(div);
      
    }  
    div.style.width = '50px'
  }
}