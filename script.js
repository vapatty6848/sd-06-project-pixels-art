window.onload = function () {
  // creating colors palet
  const paletColors = ['black', 'blue', 'green', 'gray'];
  for (const index in paletColors) {
    const createdElement = document.createElement('li');
    document.querySelector('.color-palette').appendChild(createdElement);
    createdElement.style.backgroundColor = paletColors[index];
    createdElement.className = 'color';

    if (paletColors[index] === 'black') {
      createdElement.classList.add('selected');
    }
  }
  // generating pixels elements
  const PixelsGenarator = 25;
  for (let index = 0; index < PixelsGenarator; index += 1) {
  const PixelsElement = document.createElement('div');
  PixelsElement.className = 'pixel';
  document.querySelector('#pixel-board').appendChild(PixelsElement);
	}
  paintingElement();
  changeSelected();
  clearBoard();
}

// function to change selected class
function changeSelected() {
  let change = document.querySelector('.color-palette');
  change.addEventListener('click', function (event) {
	  let seletctedItem = document.querySelector('.selected');
	  let newItemSelected = event.target;
	  seletctedItem.classList.remove('selected');
	  newItemSelected.classList.add('selected');
  });
}
// function to paint board's elements
function paintingElement() {
  let paint =  document.getElementById('pixel-board');
  paint.addEventListener('click', function (event){
	  let colorSelected = document.querySelector('.selected');
	  let itemToPaint = event.target;
	  itemToPaint.style.backgroundColor = colorSelected.style.backgroundColor;
  });
};
// function to clear all elements at board
function clearBoard() {
  let clear = document.querySelector('.clear-board');
  let elementsAtBoard = document.querySelector('.pixel-board').children;
  console.log(elementsAtBoard);
  clear.addEventListener('click', function () {
	  const x = document.querySelectorAll('.pixel');
	  for (index in elementsAtBoard){
		  if (elementsAtBoard[index].className){
			  x[index].style.backgroundColor ='white';
      }
      console.log('nome da classe')
	  }
  });
}
//console.log(window.onload);