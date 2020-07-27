window.onload = function() {
  const CorPaletaColor1 = document.querySelector('#color-1');
  const CorPaletaColor2 = document.querySelector('#color-2');
  const CorPaletaColor3 = document.querySelector('#color-3');
  const CorPaletaColor4 = document.querySelector('#color-4');
  const Button = document.querySelector('#clear-board');
  const Pixel = document.querySelector('.pixel');
  const Pixel1 = document.querySelector('#pixel-1');
  const Pixel2 = document.querySelector('#pixel-2');
  const Pixel3 = document.querySelector('#pixel-3');
  const Pixel4 = document.querySelector('#pixel-4');
  const Pixel5 = document.querySelector('#pixel-5');
  const Pixel6 = document.querySelector('#pixel-6');
  const Pixel7 = document.querySelector('#pixel-7');
  const Pixel8 = document.querySelector('#pixel-8');
  const Pixel9 = document.querySelector('#pixel-9');
  const Pixel10 = document.querySelector('#pixel-10');
  const Pixel11 = document.querySelector('#pixel-11');
  const Pixel12 = document.querySelector('#pixel-12');
  const Pixel13 = document.querySelector('#pixel-13');
  const Pixel14 = document.querySelector('#pixel-14');
  const Pixel15 = document.querySelector('#pixel-15');
  const Pixel16 = document.querySelector('#pixel-16');
  const Pixel17 = document.querySelector('#pixel-17');
  const Pixel18 = document.querySelector('#pixel-18');
  const Pixel19 = document.querySelector('#pixel-19');
  const Pixel20 = document.querySelector('#pixel-20');
  const Pixel21 = document.querySelector('#pixel-21');
  const Pixel22 = document.querySelector('#pixel-22');
  const Pixel23 = document.querySelector('#pixel-23');
  const Pixel24 = document.querySelector('#pixel-24');
  const Pixel25 = document.querySelector('#pixel-25');

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