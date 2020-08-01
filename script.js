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

