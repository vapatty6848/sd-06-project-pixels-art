window.onload = function () {
  let colors = document.getElementById('color-palette').childNodes;

  let colorBlack = colors[1];
  colorBlack.style.backgroundColor = 'rgb(0, 0,0)';
  colorBlack.className = 'selected';

  let getColorRGB;

  let colorGreen = colors[3];
  colorGreen.style.backgroundColor = 'green';

  let colorBlue = colors[5];
  colorBlue.style.backgroundColor = 'blue';

  let colorRed = colors[7];
  colorRed.style.backgroundColor = 'red';

  let colorYellow = colors[9];
  colorYellow.style.backgroundColor = 'yellow';

  let selected = document.getElementsByClassName('selected');

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      selected[0].className = 'color';
      event.target.className = 'selected';
      event.target.backgroundColor = event.target.style.backgroundColor;
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
    colorBlack.className = 'selected';
  });
};
