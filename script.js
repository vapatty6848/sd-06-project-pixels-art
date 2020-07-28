window.onload = function() {

  //adding color
  let black = document.getElementsByClassName('color')[0];
  black.style.backgroundColor ='black';
  let red = document.getElementsByClassName('color')[1];
  red.style.backgroundColor ='red';
  let blue = document.getElementsByClassName('color')[2];
  blue.style.backgroundColor ='blue';
  let green = document.getElementsByClassName('color')[3];
  green.style.backgroundColor ='green';

  // Function to fire the event and change the selected class to the one that is clicked
  function pixelClicked() {
    let oldPixelSelected = document.querySelector(".selected");
    let currentPixelSelected = event.target;
    oldPixelSelected.classList.remove("selected");
    currentPixelSelected.classList.add("selected")
    selectedColor = currentPixelSelected.style.backgroundColor;
  }

  // Clicking pixel
  let clickPixel = document.querySelector('#color-palette');
  clickPixel.addEventListener("click", pixelClicked);

  // Coloring the pixels
  function colorPixel(event) {
    let pixelSelected = event.target;
    pixelSelected.style.backgroundColor = selectedColor;
  }

  // Pixels coloring
  let pixelBoardDiv = document.getElementById("pixel-board");
  pixelBoardDiv.addEventListener("click", colorPixel);

  // Button reset color
  let buttonReset = document.querySelector('#clear-board');
  buttonReset.addEventListener('click', function() {
    let colorPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < colorPixels.length; index += 1) {
      colorPixels[index].style.backgroundColor = 'white';
    }
  })
}

