let selectedColor;

function selectColor () {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  console.log(document.querySelectorAll('.color'));
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    selectColor();
  }
});



