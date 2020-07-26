window.onload = function () {
  let pixelBoard = document.querySelector('#pixel-board');
  let selectedColor = document.querySelector('.color');
  let onClickColor = window.getComputedStyle(selectedColor, null).getPropertyValue("background-color");
  const selectedClass = 'selected';
  const clearButton = document.querySelector('button');

  for (let i = 0; i < 25; i++) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }

  function addSelectedClass() {
    selectedColor.classList.add(selectedClass);
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

  for (let i = 0; i < document.querySelectorAll('.pixel').length; i++) {
    const currentPixel = document.querySelectorAll('.pixel')[i];

    currentPixel.addEventListener('click', function () {
      currentPixel.style.backgroundColor = `${onClickColor}`;
    })
  }

  clearButton.addEventListener('click', function () {
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i++) {
      const currentPixel = document.querySelectorAll('.pixel')[i];
      currentPixel.style.backgroundColor = 'white';
    }
  })
}