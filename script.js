window.onclick = function () {
  const selecionaCorPaleta = document.querySelector('.selected');
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    selecionaCorPaleta.classList.remove('selected');
  }
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = selecionaCorPaleta.id;
  }
  if (event.target.id === 'clear-board') {
    const selecionaPixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < selecionaPixel.length; i += 1) {
      selecionaPixel[i].style.backgroundColor = 'white';
    }
  }
};

// const bottonBlack = document.querySelector('#black');
// bottonBlack.addEventListener('click', function() {

// });

// const bottonRed = document.querySelector('#red');
// bottonRed.addEventListener('click', function() {
//   const seleciona = document.querySelector('.selected');
//   seleciona.classList.remove('selected');
//   bottonRed.classList.add('selected');
// });

// const bottonBlue = document.querySelector('#blue');
// bottonBlue.addEventListener('click', function() {
//   const seleciona = document.querySelector('.selected');
//   seleciona.classList.remove('selected');
//   bottonBlue.classList.add('selected');
// });

// const bottonGreen = document.querySelector('#green');
// bottonGreen.addEventListener('click', function() {
//   const seleciona = document.querySelector('.selected');
//   seleciona.classList.remove('selected');
//   bottonGreen.classList.add('selected');
// });

// function handlePixelCLick() {
//   let selectedPixelDiv = event.target;
//   selectedPixelDiv.style.backgroundColor = selectedColor;
// }

// const pixelBoard = document.getElementById('pixel-board');
// pixelBoard.addEventListener('click', function(event) {
//   event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
// })
//
// const clearButton = document.getElementById('clear-board');
// clearButton.addEventListener('click', function() {
//   const allPixel = document.querySelectorAll('.pixel');
//   for (let index = 0; index < allPixel.length; index += 1) {
//     allPixel[index].style.backgroundColor = 'white';
//   }
// })
