const Clear = document.getElementById('clear-board');
const pixel = document.querySelectorAll('.pixel');

Clear.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
}