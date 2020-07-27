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
};
