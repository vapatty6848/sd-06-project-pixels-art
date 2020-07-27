const colorBlock1 = '#000';
const colorBlock2 = randomColor();
const colorBlock3 = randomColor();
const colorBlock4 = randomColor();

document.getElementById('colorOption1').style.backgroundColor = colorBlock1;
document.getElementById('colorOption2').style.backgroundColor = colorBlock2;
document.getElementById('colorOption3').style.backgroundColor = colorBlock3;
document.getElementById('colorOption4').style.backgroundColor = colorBlock4;

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

