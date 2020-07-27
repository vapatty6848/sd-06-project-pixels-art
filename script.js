window.onload = function () {
  
  let colors = document.getElementById  ("color-palette").childNodes;

  let colorBlack = colors[1]
  colorBlack.style.backgroundColor = 'black';
  colorBlack.className = 'selected';

  let getColorRGB = colorBlack.style.backgroundColor

  let colorGreen = colors[3];
  colorGreen.style.backgroundColor = 'green';

  let colorBlue = colors[5];
  colorBlue.style.backgroundColor = 'blue';

  let colorRed = colors[7];
  colorRed.style.backgroundColor = 'red';

  let colorYellow = colors[9];
  colorYellow.style.backgroundColor = 'yellow';

  let selected = document.getElementsByClassName('selected')

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains ('color') && selected.length >= 1) {
      console.log(selected);
      selected[0].className = 'color';
      getColorRGB = event.target.style.backgroundColor;
      event.target.className = 'selected';
      console.log(selected.length);
      //console.log(getColorRGB);
    } else if (event.target.classList.contains ('pixel') && selected.length === 1) {
      event.target.style.backgroundColor = getColorRGB;
      //console.log(event.target)
    };
  });

  let clearButton = document.querySelector('#clear-board');

  let pixel = document.getElementsByClassName('pixel');

  clearButton.addEventListener("click", function () {
    for (i = 0; i < pixel.length; i += 1)
    pixel[i].style.backgroundColor = 'white'
  });

};
