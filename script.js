window.onclick = function() {


  const palletColorSelector = document.querySelector('.selected');
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    palletColorSelector.classList.remove('selected');
  }
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = palletColorSelector.id;
  }
  if (event.target.id === 'clear-board') {
    const pixelSelector = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixelSelector.length; i += 1) {
      pixelSelector[i].style.backgroundColor = 'white';
    }
  }
}
const buttonBlack = document.querySelector('#black');
buttonBlack.addEventListener('click', function() {
  const selector = document.querySelector('.selected');
  selector.classList.remove('selected');
  buttonBlack.classList.add('selected');
});

const buttonRed = document.querySelector('#red');
buttonRed.addEventListener('click', function() {
  const selector = document.querySelector('.selected');
  selector.classList.remove('selected');
  buttonRed.classList.add('selected');
});

const buttonBlue = document.querySelector('#blue');
buttonBlue.addEventListener('click', function() {
  const selector = document.querySelector('.selected');
  selector.classList.remove('selected');
  buttonBlue.classList.add('selected');
});

const buttonGreen = document.querySelector('#green');
buttonGreen.addEventListener('click', function() {
  const selector = document.querySelector('.selected');
  selector.classList.remove('selected');
  buttonGreen.classList.add('selected');
});
