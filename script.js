window.onload = function() {
  // let selectedColor = document.querySelector('.selected');
  let color = document.getElementsByClassName('color');
  let pixels = document.getElementsByClassName('pixel');
  

  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function(event) {
      let selectedColor = document.querySelector('.selected');
      event.target.classList.add('selected');
      selectedColor.classList.remove('selected');
    });
  }
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].addEventListener('click', function(event) {
      let selectedColor = document.querySelector('.selected');
      event.target.style.backgroundColor = selectedColor.id;
    });
  }
}