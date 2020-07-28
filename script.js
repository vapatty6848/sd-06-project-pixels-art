document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    document.querySelector('.selected').classList.toggle('selected');
    event.target.classList.toggle('selected');
  }
});

