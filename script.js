window.onload = function () {
  let pixelBoard = document.querySelector('#pixel-board');
  let selectedColor = document.querySelector('.color');
  const selectedClass = 'selected';
  let onClickColor = window.getComputedStyle(selectedColor, null).getPropertyValue("background-color");
  const clearButton = document.querySelector('button');
  const changeSizeInput = document.querySelector('#board-size');
  const generateNewBoardButton = document.querySelector('#generate-board');

  function generatePixels(quantity) {
    pixelBoard.innerHTML = [];
    pixelBoard.style.width = `${quantity * 43}px`;
    pixelBoard.style.height = `${quantity * 43}px`;

    for (let i = 0; i < quantity * quantity; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      addPaintFunctionToPixel(pixel)
      pixelBoard.appendChild(pixel);
    }
  }

  generatePixels(5) 

  function addSelectedClass() {
    selectedColor.classList.add(selectedClass);
  }

  addSelectedClass();

  function changeBackgroundColorToWhite() {
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i++) {
      const currentPixel = document.querySelectorAll('.pixel')[i];
      currentPixel.style.backgroundColor = 'white';
    }
  }

  function addPaintFunctionToPixel(pixel) {
      pixel.addEventListener('click', function () {
        pixel.style.backgroundColor = `${onClickColor}`;
      })
  }

  for (let i = 0; i < document.querySelectorAll('.color').length; i++) {
    const currentColorOption = document.querySelectorAll('.color')[i];

    currentColorOption.addEventListener('click', function (event) {
      const colorOfClickedOption = window.getComputedStyle(event.target, null).getPropertyValue("background-color");

      onClickColor = colorOfClickedOption;
      selectedColor.classList.remove(selectedClass);
      selectedColor = currentColorOption;
      addSelectedClass();
    })
  }

  clearButton.addEventListener('click', function () {
    changeBackgroundColorToWhite();
  })

  generateNewBoardButton.addEventListener('click', function () {
    if (changeSizeInput.value.length === 0) {
      alert('Board inválido!');
    } else {
      generatePixels(changeSizeInput.value)
    }
  })
}