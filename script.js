window.onload = function() {
  let selectedColor = document.querySelector('.selected');
  let color = document.getElementsByClassName('color');
  let pixel = document.getElementsByClassName('pixel');
  
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function(event) {
      event.target.classList.add('selected');
      selectedColor.classList.remove('selected');
    });
  }

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function(event) {
      event.target.style.backgroundColor = selectedColor.id;
    });
  }
}