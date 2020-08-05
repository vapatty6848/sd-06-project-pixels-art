let penColour = 'black';

function setPenColour(color) {
  penColour = color;
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
}

function myFunction() {
  document.getElementById("myForm").reset();
}