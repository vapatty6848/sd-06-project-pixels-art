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

  let corClasse = document.querySelectorAll('.color')
let selectedColor = document.querySelector(".selected")

  document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click',function (){
      corClasse.add.classList("selected")
      document.querySelectorAll(".selected").remove.classList("selected")
    })
  })
  
  
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
  
  

  clearButton.addEventListener('click', function () {
    const clearPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < clearPixel.length; index += 1) {
      clearPixel[index].style.backgroundColor = 'white';
    }
  })

