window.onload = function () {
  let colorPalette = document.querySelector('#color-palette');
  
  function createColorPallet(colors) {
    for (index in colors) {
      let colorDiv = createColor(colors[index]);
      colorPalette.appendChild(colorDiv);
    }
  };
  
  let colors = ['black', 'green', 'blue', 'red'];

  createColorPallet(colors);

  function createColor(color) {
    let colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = color;
    return colorDiv;
  };

  let selected = document.getElementsByClassName('selected');
  document.querySelector('div').classList.add('selected');

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      selected[0].className = 'color';
      event.target.classList.add('selected');
      event.target.backgroundColor = event.target.style.backgroundColor;
      console.log(selected.length)
    } else if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = selected[0].style.backgroundColor ;
    }
  });

  let clearButton = document.querySelector('#clear-board');

  let pixel = document.getElementsByClassName('pixel');

  clearButton.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
    selected[0].className = 'color';
    document.querySelector('div').classList.add('selected');
  });

  function createLine(input) {
    let pixelBoard = document.querySelector('#pixel-board');
    for (cont = 0; cont < input; cont += 1) {
      let trDiv = createTrDiv();
      pixelBoard.appendChild(trDiv);
      for (cont = 0; cont < input; cont += 1) {
        let pixelDiv = createPixelDiv();
        trDiv.appendChild(pixelDiv);
      }
    }
    return pixelBoard
  }

  function createTrDiv () {
    let trDiv = document.createElement('div');
    trDiv.className = 'tr';
    return trDiv;
  }

  function createPixelDiv () {
    let pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    return pixelDiv;
  }

  let boardButton = document.querySelector('#generate-board');
  let boardInput = document.querySelector('#board-size');

  boardButton.addEventListener('click', function () {
    if (boardInput.value <= 5) {
      function repeat(func, times) {
        func();
        times && --times && repeat(func, times);
      }
      repeat(function () {createLine(5)}, 5);
    } else if (boardInput.value >= 50) {
      function repeat(func, times) {
        func();
        times && --times && repeat(func, times);
      }
      repeat(function () {createLine(50)}, 50);
    } else {
      function repeat(func, times) {
        func();
        times && --times && repeat(func, times);
      }
      repeat(function () {createLine(boardInput.value)}, boardInput.value);
    }
  });


};
