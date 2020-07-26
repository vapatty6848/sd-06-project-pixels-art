const selectColor = document.getElementById('black');
const selectColor = document.getElementById('red');
const selectColor = document.getElementById('blue');
const selectColor = document.getElementById('green');
  selectColor.addEventListener('click', function() {
      optColor(selectColor)

  });
  function defineColor(pixel) {
    pixel.addEventListener('click', function () {
      pixel.style.backgroundColor = selectColor;
    });
  }

  function optColor(div) {
    const selectorDiv = document.getElementsByClassName('selected')[0];
    selectorDiv.classList.remove('selected');
    div.classList.add('selected');

  }
