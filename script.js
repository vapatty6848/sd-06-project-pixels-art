window.onload = function () {
	// criando paleta de cores
	let paletColors = ['black','blue','green','gray'];
	for (index in paletColors) {
		const createdElement = document.createElement('li');
		document.querySelector('.color-palette').appendChild(createdElement);
		createdElement.style.backgroundColor = paletColors[index];
		createdElement.className = 'color';
	}
	// gerando os elementos pixel 
	let PixelsGenarator = 5;
	for (let index = 0; index < PixelsGenarator; index +=1) {
		console.log('testando');
	  for (let index2 = 0; index2 <  PixelsGenarator; index2 +=1) {
			console.log('testando2')
			const PixelsElement = document.createElement('div');
			PixelsElement.className = 'pixel';
			document.querySelector('#pixel-board').appendChild(PixelsElement);
		}
	}
	
}