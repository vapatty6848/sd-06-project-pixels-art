
window.onload = function () {

  function clickPixel(event) {
    console.log(sessionStorage.getItem('class'))
    event.target.classList.add(sessionStorage.getItem('class'));
  }
  function selectColor(event) {
    console.log(event.target.classList[1]);
    switch (event.target.classList[1]) {
      case 'two':
        sessionStorage.setItem('class', 'two');
        break;
      case 'three':
        sessionStorage.setItem('class', 'three');
        break;
      case 'four':
        sessionStorage.setItem('class', 'four');
        break;
      default:
        sessionStorage.setItem('class', 'selected');
    }
  }
  document.getElementById('pixel-board').addEventListener('click', clickPixel);
  document.getElementById('color-palette').addEventListener('click', selectColor);
}





