window.onload = function () {
  let colors = document.querySelectorAll('.color');
  
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
}
