function clear() {
  let pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
function chooseColor() {
  let choosed = document.querySelector('.choosed');
  choosed.classList.remove('choosed');
  this.classList.add('choosed');
}
function clickPrint() {
  let buttonColor = document.querySelector('.choosed');
  this.style.backgroundColor = buttonColor.style.backgroundColor;
}

window.onload = function () {
  let blackColor = document.getElementById('blackSquare');
  blackColor.style.backgroundColor = 'black';
  blackColor.addEventListener('click', chooseColor);

  let bluecolor = document.getElementById('blueSquare');
  bluecolor.style.backgroundColor = 'blue';
  bluecolor.addEventListener('click', chooseColor);

  let greenColor = document.getElementById('greenSquare');
  greenColor.style.backgroundColor = 'green';
  greenColor.addEventListener('click', chooseColor);

  let redColor = document.getElementById('redSquare');
  redColor.style.backgroundColor = 'red';
  redColor.addEventListener('click', chooseColor);

  let clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', clear);

  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', clickPrint);
  }
};