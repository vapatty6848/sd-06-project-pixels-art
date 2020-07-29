window.onload = function () {
	// creating colors palet
	let paletColors = ['black','blue','green','gray'];
	for (index in paletColors) {
		const createdElement = document.createElement('li');
		document.querySelector('.color-palette').appendChild(createdElement);
		createdElement.style.backgroundColor = paletColors[index];
		createdElement.className = 'color';

		if (paletColors[index] == 'black') {
			createdElement.classList.add('selected')
		}
	}
	// generating pixels elements
	let PixelsGenarator = 25;
	for (let index = 0; index < PixelsGenarator; index +=1) {
		const PixelsElement = document.createElement('div');
		PixelsElement.className = 'pixel';
		document.querySelector('#pixel-board').appendChild(PixelsElement);
	}
	paintingElement();
	changeSelected();
	}

	// function to change selected class
function changeSelected () {
	let change = document.querySelector('.color-palette');
	change.addEventListener('click', function (event) {
		let seletctedItem = document.querySelector('.selected');
		let newItemSelected = event.target;
		seletctedItem.classList.remove('selected');
		newItemSelected.classList.add('selected');
	});
}
// function to paint board's elements
function paintingElement () {
	let paint =  document.getElementById('pixel-board');
	paint.addEventListener('click', function (event){
		let itemToPaint = document.querySelector('.selected');
	  let produto = event.target;
		produto.style.backgroundColor = itemToPaint.style.backgroundColor;
  });
};

// function to clear all elements at board
function clearBoard () {
	
}

