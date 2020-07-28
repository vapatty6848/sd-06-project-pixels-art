window.onload = function() {
  // Button reset color
  let buttonReset = document.querySelector('#clear-board');
  buttonReset.addEventListener('click', function() {
    let colorPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < colorPixels.length; index += 1) {
      colorPixels[index].style.backgroundColor = 'white';
    }
  })

}

