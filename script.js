window.onload = function () {
  const colors = document.querySelectorAll('.color');
  const pixelTable = document.querySelector('#pixel-board');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', function () {
      for (let j = 0; j < colors.length; j += 1) {
        if (colors[j].classList.contains('selected') === true) {
          colors[j].classList.remove('selected');
        }
      }
      colors[i].classList.add('selected');
    });
  }
  pixelTable.addEventListener('click', function (event) {
    let color
    for (let i = 0; i < colors.length; i += 1) {
      if (colors[i].classList.contains('selected')) {
        color = colors[i].style.backgroundColor;
      }
    }
    event.target.style.backgroundColor = color;
  });
};
