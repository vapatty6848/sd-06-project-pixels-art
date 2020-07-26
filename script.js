  const divPallet = document.querySelector('#color-palette');
  divPallet.addEventListener('click'), function(event) {
    const divSelector = document.querySelector('#red').style.backgroundColor;
    console.log(event.target);
    console.log(divSelector);

  }
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
