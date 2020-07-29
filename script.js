window.onload = function() {
  let selectedColor = document.getElementsByClassName('selected');
  let color = document.getElementsByClassName('color');
  let pixel = document.getElementsByClassName('pixel')

  color.addEventListener('onclick', function(event) {
    event.target.classList.add('selected');
    selectedColor.classList.remove('selected');
  });

  pixel.addEventListener('onclick', function(event) {
    event.target.style.backgroundColor = selectedColor.id;
  });
}