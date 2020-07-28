
window.onload = function() {

  let classColors = document.querySelectorAll('.color');
  let classPixels = document.querySelectorAll('.pixel');
  let clearButton = document.querySelector('.clear');


  initPalleteColor(classColors);
  initPixelColor(classPixels);
  PalleteEvents(classColors);
  BoardEvents(classPixels);
  ButtonsEvents(clearButton,classPixels);
}

