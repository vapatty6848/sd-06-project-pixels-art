
window.onload = function() {

  let classColors = queryAll('.color');
  let classPixels = queryAll('.pixel');
  let clearButton = query('.clear');


  initPalleteColor(classColors);
  initPixelColor(classPixels);
  PalleteEvents(classColors);
  BoardEvents(classPixels);
  ButtonsEvents(clearButton,classPixels);
}

