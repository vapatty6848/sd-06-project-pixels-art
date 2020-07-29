// window = janela atual da pagina
// onclick = evento da pagina
window.onclick = function(event) {
  // declarada constante da cor selecionada palletColorSelector
  const palletColorSelector = document.querySelector('.selected');
  // Se onde eu cliquei tem classe color
  // event.target = Onde eu cliquei na janela
  if (event.target.className === 'color') {
    // Eu irei add a class Selected
    event.target.classList.add('selected');
    // Removi a class selected do elemento palletColorSelector
    palletColorSelector.classList.remove('selected');
  }
  // Se onde eu cliquei tem classe pixel
  if (event.target.className === 'pixel') {
    // Irei copiar o estilo de backgroundColor do palletColorSelector
    // event.target.style.backgroundColor = #id==black,red,green
    event.target.style.backgroundColor = palletColorSelector.id;
  }
  if (event.target.id === 'clear-board') {
    // Cria um array de pixel
    const pixelsArray = document.querySelectorAll('.pixel');
    // Pecorre todo o array e define backgroundColor = white
    for (let i = 0; i < pixelsArray.length; i += 1) {
      pixelsArray[i].style.backgroundColor = 'white';
    }
  }
};

function setColor(colorButtonPallet) {
  const palletButton = document.querySelector(colorButtonPallet);
  palletButton.addEventListener('click', function() {
    const selector = document.querySelector('.selected');
    selector.classList.remove('selected');
    palletButton.classList.add('selected');
  });
}

const collorsPallet = ['#black', '#red', '#blue', '#green'];

collorsPallet.forEach(colorName => {
  setColor(colorName);
});
