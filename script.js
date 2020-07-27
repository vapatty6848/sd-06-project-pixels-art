window.onload = function() {
  const CorPaletaColor1 = document.querySelector('#color-1');
  const CorPaletaColor2 = document.querySelector('#color-2');
  const CorPaletaColor3 = document.querySelector('#color-3');
  const CorPaletaColor4 = document.querySelector('#color-4');
  const Button = document.querySelector('#clear-board');
  const Pixel = document.querySelector('.pixel');

  CorPaletaColor1.addEventListener('click', function() {
    Pixel.style.backgroundColor = 'black';
  });
  CorPaletaColor2.addEventListener('click', function() {
    Pixel.style.backgroundColor = 'blueviolet';
  });
  CorPaletaColor3.addEventListener('click', function() {
    Pixel.style.backgroundColor = 'chartreuse';
  });
  CorPaletaColor4.addEventListener('click', function() {
    Pixel.style.backgroundColor = 'darkgoldenrod';
  });
  Button.addEventListener('click', function() {
    Pixel.style.backgroundColor = 'white';
  });
}