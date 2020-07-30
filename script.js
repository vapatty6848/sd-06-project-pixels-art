const colors = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const selected = document.querySelector('.selected');

let color = window.getComputedStyle(selected).backgroundColor;

for (let i = 0; i < colors.length; i += 1) {
   colors[i].addEventListener('click', function(event) {
       
       let selectedDiv = event.target;
       let oldSelectedDiv = document.querySelector('.selected');

       oldSelectedDiv.classList.remove('selected');
       selectedDiv.classList.add('selected');

       const style = window.getComputedStyle(colors[i]).backgroundColor;
       color = style;
   });
}

for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', function() {
        pixel[i].style.backgroundColor = color;
    });  
}

function clear() {
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';   
    }
}

const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', clear);
