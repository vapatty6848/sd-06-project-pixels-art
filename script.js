function returnColorPallet(number){
  const rPallet = document.querySelectorAll("#color-" + number);
  return rPallet;
}

function returnPixelBox(number){
  const rBox = document.querySelectorAll("#pixel-" + number);
  return rBox;
}

const clearButton = document.querySelector("#clear-board");
clearButton.addEventListener('click', function(){
  const selectedPixel = document.querySelectorAll(".pixel");
  for(let index = 0; index < selectedPixel.length; index +=1){
    selectedPixel[index].style.backgroundColor = 'white';
  }
});

/*const btnColorBlack = document.querySelector('.black');
btnColorBlack.addEventListener('click', function () {
  addColorSelected('black');
});

const btnColorRed = document.querySelector('.red');
btnColorRed.addEventListener('click', function () {
  addColorSelected('red');
});

const btnColorGreen = document.querySelector('.green');
btnColorGreen.addEventListener('click', function () {
  addColorSelected('green');
});

const btnColorBlue = document.querySelector('.blue');
btnColorBlue.addEventListener('click', function () {
  addColorSelected('blue');
});
*/