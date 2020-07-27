window.onload = function () {
  
  let colors = document.getElementById  ("color-palette").childNodes;
  
  let selected = document.getElementsByClassName("selected")

  let colorBlack = colors[1]
  colorBlack.className = "selected"
  colorBlack.style.backgroundColor = "black";

  console.log(selected.length)
  let getColorRGB = colorBlack.style.backgroundColor

  let colorGreen = colors[3];
  colorGreen.style.backgroundColor = "green";

  let colorBlue = colors[5];
  colorBlue.style.backgroundColor = "blue";

  let colorRed = colors[7];
  colorRed.style.backgroundColor = "red";

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains ('color') && selected.length >= 1) {
      console.log(selected)
      selected[0].className = "color";
      getColorRGB = event.target.style.backgroundColor
      event.target.className = "selected";
      console.log(selected.length)
      console.log(getColorRGB)
    } else if (event.target.classList.contains ('pixel') && selected.length === 1) {
      event.target.style.backgroundColor = getColorRGB
    }
  });

};
