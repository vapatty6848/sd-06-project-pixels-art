window.onload = function () {
	// creating colors palet
	let paletColors = ['black','blue','green','gray'];
	for (index in paletColors) {
		const createdElement = document.createElement('li');
		document.querySelector('.color-palette').appendChild(createdElement);
		createdElement.style.backgroundColor = paletColors[index];
		createdElement.className = 'color';
	}
	// generating pixels elements
	let PixelsGenarator = 5;
	for (let index = 0; index < PixelsGenarator; index +=1) {
		for (let index2 = 0; index2 <  PixelsGenarator; index2 +=1) {
			const PixelsElement = document.createElement('div');
			PixelsElement.className = 'pixel';
			document.querySelector('#pixel-board').appendChild(PixelsElement);
		}
	}
	//function for select black element on window.onload
	function selectedElement () {
		let elementSelected = document.querySelector('.color-palette').firstChild;
		elementSelected.className = 'selected'
	}
	selectedElement()
}

