window.onload = function () {
  let color_Palette = document.querySelector('#color-palette');
  let colorsArray = color_Palette.children;
  colorsArray[0].style.backgroundColor = 'black';
  colorsArray[1].style.backgroundColor = 'red';
  colorsArray[2].style.backgroundColor = 'orange';
  colorsArray[3].style.backgroundColor = 'green';

  
  
    
    for (let i = 0; i < 25; i += 1) {
      let div = document.createElement('div');
      div.className = 'pixel';
      document.querySelector('#pixel-board').appendChild(div);
      
    }
    
       
    
  
}