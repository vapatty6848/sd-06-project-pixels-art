  const divPallet = document.querySelector('#color-palette');
  const clearButton = document.getElementById('clear-board');

  divPallet.addEventListener('click'), function(event) {
    const firstSelectionBLack = document.querySelector('#black').style.backgroundColor;
    firstSelectionBLack.classList.remove('selected');
    event.target.classList.add('selected');
    firstSelectionBLack = event.target;

  }
 /* selectColor.addEventListener('click', function() {
      optColor(selectColor)

  });
  function defineColor(pixel) {
    pixel.addEventListener('click', function () {
      pixel.style.backgroundColor = selectColor;
    });
  }*/

  function optColor(div) {
    const selectorDiv = document.getElementsByClassName('selected')[0];
   

  }

  clearButton.addEventListener('click', function () {
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i++) {
      const currentPixel = document.querySelectorAll('.pixel')[i];
      currentPixel.style.backgroundColor = 'white';
    }
  })

