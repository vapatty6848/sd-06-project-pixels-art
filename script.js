window.onload = function () {
  
  let colors = document.getElementById  ("color-palette").childNodes;

  let colorBlack = colors[1]
  colorBlack.style.backgroundColor = 'rgb(0, 0,0)';
  colorBlack.className = 'selected';

  console.log(document.querySelector("div"))

  let getColorRGB = colorBlack.style.backgroundColor;

  let colorGreen = colors[3];
  colorGreen.style.backgroundColor = 'green';
  colorGreen.className = "color";

  let colorBlue = colors[5];
  colorBlue.style.backgroundColor = 'blue';
  colorBlue.className = "color";

  let colorRed = colors[7];
  colorRed.style.backgroundColor = 'red';
  colorRed.className = "color";

  let colorYellow = colors[9];
  colorYellow.style.backgroundColor = 'yellow';
  colorYellow.className = "color";

  let selected = document.getElementsByClassName('selected');

  console.log(selected.length)

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains ('color')) {
      console.log(selected);
      selected[0].className = 'color';
      getColorRGB = event.target.style.backgroundColor;
      event.target.className = 'selected';
    } else if (event.target.classList.contains ('pixel')) {
      event.target.style.backgroundColor = getColorRGB;
    };
  });

  let clearButton = document.querySelector('#clear-board');

  let pixel = document.getElementsByClassName('pixel');

  clearButton.addEventListener("click", function () {
    for (i = 0; i < pixel.length; i += 1)
    pixel[i].style.backgroundColor = 'white'
  });
};
