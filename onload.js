
window.onload = function() {

  let classColors = $a('.color');
  let classPixels = $a('.pixel');

  initPalleteColor(classColors);
  initPixelColor(classPixels);
  PalleteEvents(classColors);
  BoardEvents(classPixels);

}

