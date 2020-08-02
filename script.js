window.onclick = function() {
  let palleteColor = document.querySelector(".selected");
  if (event.target.className === "color") {
    palleteColor.classList.remove("selected");
    event.target.classList.add("selected");
  }

  if (event.target.className === "pixel") {
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
