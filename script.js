  const divPallet = document.querySelector('#color-palette');
  const clearButton = document.getElementById('clear-board');
  let aux;
  
  let selectColor = document.getElementById('color-palette').childNodes;
  let colorBlack = selectColor[1];
  colorBlack.style.backgroundColor = 'black';
  let getColorRGB = colorBlack.style.backgroundColor;
  let colorGreen = selectColor[3];
  colorGreen.style.backgroundColor = 'green';
  let colorBlue = selectColor[5];
  colorBlue.style.backgroundColor = 'blue';
  let colorRed = selectColor[7];
  colorRed.style.backgroundColor = 'red';

  
  divPallet.addEventListener('click', function op(event) {
   
    aux = event.target;
    console.log(event.target);
    const boardClickedPixel = document.querySelector('#pixel-board');
  boardClickedPixel.addEventListener('click', function (event) {
    const clickedPixel = event.target;
    clickedPixel.style.backgroundColor = aux.style.backgroundColor;
    
  });

  })
  
  

  clearButton.addEventListener('click', function () {
    const clearPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < clearPixel.length; index += 1) {
      clearPixel[index].style.backgroundColor = 'white';
    }
  })

