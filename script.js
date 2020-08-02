window.onclick = function() {
  let selectedColor = document.querySelector('.selected');

  if(event.target.className === 'color'){
    event.target.classList.add('selected');
    selectedColor.classList.remove('selected');
    selectedColor = document.querySelector('.selected');
  }
  if(event.target.className === 'pixel'){
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}
// Function to clear pixels table
let buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener("click", function() {
  let clearPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < clearPixels.length; index += 1){
    clearPixels[index].style.backgroundColor = "white";
  }
});
// Function to generate board of size 5 to 50
let boardSize = document.getElementById('board-size');
let buttonGenerateBoard = document.getElementById('generate-board');

buttonGenerateBoard.addEventListener('click', function() {
  if (boardSize.value === "") {
    alert("Board inválido!");
  }
  if (parseInt(boardSize.value) < 5) {
    boardSize.value = 5;
  }
  if (parseInt(boardSize.value) > 50) {
    boardSize.value = 50;
  }
  // console.log(parseInt(boardSize.value));
  if (boardSize.value !== "") {
    document.getElementById('pixel-board').remove();
    let newPixelBoard = document.createElement('div');
    newPixelBoard.id = "pixel-board";
    // console.log(newPixelBoard);
    for (let column = 0; column < boardSize.value; column += 1){
      let newPixelLine = document.createElement('div');
      newPixelLine.id = "pixel-line";
      newPixelBoard.appendChild(newPixelLine);
      for (let line = 0; line < boardSize.value; line += 1){
        let pixels = document.createElement('div');
        pixels.className = 'pixel';
        newPixelLine.appendChild(pixels);
        // console.log(pixels);
      }
    }
    document.getElementById('board-container').appendChild(newPixelBoard);
  }
});

