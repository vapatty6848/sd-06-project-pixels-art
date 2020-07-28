document.addEventListener('click', function (pointedPixel, changeColor) {
  pointedPixel = event.target;

  if (pointedPixel.classList.contains('color') === true) {
    document.querySelector('.selected').classList.remove('selected');
    pointedPixel.classList.add('selected');
  } else if (pointedPixel.classList.contains('pixel') === true) {
    let changeColor = document.querySelector('.selected').id;
    pointedPixel.style.backgroundColor = changeColor;
  }
});
