window.onload = function () {
    const clearButton = document.getElementById('clear-board');

    function clearBoard() {
        const pixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixels.length; i += 1) {
          pixels[i].style.backgroundColor = '';
        }
      }
    clearButton.addEventListener('click', clearBoard);
    
}
