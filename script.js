let changeColor = document.querySelector('.selected').id;

document.addEventListener('click', function (pointedPixel) {
  pointedPixel = event.target;

  if (pointedPixel.classList.contains('color') === true) {
    document.querySelector('.selected').classList.remove('selected');
    pointedPixel.classList.add('selected');
    changeColor = document.querySelector('.selected').id;
  } else if (pointedPixel.classList.contains('pixel') === true) {
    pointedPixel.style.backgroundColor = changeColor;
  }
});
