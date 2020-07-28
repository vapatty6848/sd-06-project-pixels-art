let selectedColor = 'rgb(0 , 0 , 0)'; // COMEÇANDO COMO UNDEFINED! VER ISSO DEPOIS!
console.log(selectedColor);

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    // Swap selected color
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    console.log(document.querySelectorAll('.color'));

    // Set selected color;
    selectedColor = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
    console.log(event.target);
    console.log(selectedColor);
  }

  if(event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor;
  }
});



