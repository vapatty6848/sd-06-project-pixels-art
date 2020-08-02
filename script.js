window.onload = function() {
setBlack()
}

window.onclick = function () {
  const palleteColor = document.querySelector('.selected');
  if (event.target.className === 'color') {
    palleteColor.classList.remove('selected');
    event.target.classList.add('selected');
  }

  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = palleteColor.id;
  }
}

function clearBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].style.backgroundColor = 'white';
    pixelBoard[i].style.color = 'white';
  }
}

function setBlack() {
  const initialColor = document.getElementById('black');
  initialColor.classList.add('selected');
}