  const divPallet = document.querySelector('#color-palette');
  const clearButton = document.getElementById('clear-board');
  const boardClickedPixel = document.querySelector('#pixel-board');
  let aux="x";

  
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
 
  if (aux==='x'){
    boardClickedPixel.addEventListener('click', function (event) {
      const clickedPixel = event.target;
      
        clickedPixel.style.backgroundColor = 'black'; 
    });
  
  }
  divPallet.addEventListener('click', function op(event) {
   
    aux = event.target;
    console.log(aux);
    console.log(event.target);
   
  boardClickedPixel.addEventListener('click', function (event) {
    const clickedPixel = event.target;
    
      clickedPixel.style.backgroundColor = aux.style.backgroundColor; 
  });

  })
  
  let selected = document.getElementsByClassName('selected');
  document.querySelector('div').classList.add('selected');

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      selected[0].className = 'color';
      event.target.classList.add('selected');
      event.target.backgroundColor = event.target.style.backgroundColor;
      console.log(selected.length)
    } else if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = selected[0].style.backgroundColor ;
    }
  });

  clearButton.addEventListener('click', function () {
    const clearPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < clearPixel.length; index += 1) {
      clearPixel[index].style.backgroundColor = 'white';
    }
  })

