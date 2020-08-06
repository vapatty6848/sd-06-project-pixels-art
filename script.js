window.onload = function () {
  let pixelBoard = document.querySelector('#pixel-board');
  let selectedColor = document.querySelector('.color');
  const selectedClass = 'selected';
  let onClickColor = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');
  const clearButton = document.querySelector('button');
  const changeSizeInput = document.querySelector('#board-size');
  const generateNewBoardButton = document.querySelector('#generate-board');
  const colorBoxes = document.querySelectorAll('.color');

  function generatePixels(quantity) {
    pixelBoard.innerHTML = [];
    pixelBoard.style.width = `${quantity * 43}px`;
    pixelBoard.style.height = `${quantity * 43}px`;

    for (let i = 0; i < quantity * quantity; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      addPaintFunctionToPixel(pixel);
      pixelBoard.appendChild(pixel);
    }
  }

  generatePixels(5);

  for (let i = 1; i < colorBoxes.length; i += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
   
    colorBoxes[i].style.backgroundColor = `rgb(${red} , ${green} , ${blue})`;
  }

  function addSelectedClass() {
    selectedColor.classList.add(selectedClass);
  }

  addSelectedClass();

  function changeBackgroundColorToWhite() {
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
      const currentPixel = document.querySelectorAll('.pixel')[i];
      currentPixel.style.backgroundColor = 'white';
    }
  }

  function addPaintFunctionToPixel(pixel) {
    pixel.addEventListener('click', function () {
      pixel.style.backgroundColor = `${onClickColor}`;
    });
  }

  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    const currentColorOption = document.querySelectorAll('.color')[i];

    currentColorOption.addEventListener('click', function (event) {
      const colorOfClickedOption = window.getComputedStyle(event.target, null).getPropertyValue("background-color");

      onClickColor = colorOfClickedOption;
      selectedColor.classList.remove(selectedClass);
      selectedColor = currentColorOption;
      addSelectedClass();
    });
  }

  clearButton.addEventListener('click', function () {
    changeBackgroundColorToWhite();
  });

  generateNewBoardButton.addEventListener('click', function () {
    let pixelQuantity = changeSizeInput.value;
    if (pixelQuantity.length === 0) {
      alert('Board inválido!');
    } else {
      if (pixelQuantity < 5) {
        pixelQuantity = 5;
      } else if (pixelQuantity > 50) {
        pixelQuantity = 50;
      }

      generatePixels(pixelQuantity);
    }
  });
};
