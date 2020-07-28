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

const clearBoard = document.querySelector('#clear-board');

clearBoard.addEventListener('click', function () {
  for (let anLine = document.getElementById('pixel-board').firstElementChild; anLine; anLine = anLine.nextElementSibling) {
    for (let anChild = anLine.firstElementChild; anChild; anChild = anChild.nextElementSibling) {
      anChild.style.backgroundColor = 'white';
    }
  }
});
