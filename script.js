window.onload = function () {
  
  let colors = document.getElementById("color-palette").childNodes

  let colorBlack = colors[1]
  colorBlack.style.backgroundColor = "black"
  colorBlack.className = "selected"

  let colorGreen = colors[3]
  colorGreen.style.backgroundColor = "green"

  let colorBlue = colors[5]
  colorBlue.style.backgroundColor = "blue"

  let colorRed = colors[7]
  colorRed.style.backgroundColor = "red"

}
