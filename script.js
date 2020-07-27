function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'rgb(0, 128, 0)';
  }
}

window.onload = function () {
  const color1 = document.getElementsByClassName('color')[0];
  color1.style.backgroundColor = 'black';

  const color2 = document.getElementsByClassName('color')[1];
  color2.style.backgroundColor = 'green';

  const color3 = document.getElementsByClassName('color')[2];
  color3.style.backgroundColor = 'yellow';

  const color4 = document.getElementsByClassName('color')[3];
  color4.style.backgroundColor = 'blue';

  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', clear);
};
