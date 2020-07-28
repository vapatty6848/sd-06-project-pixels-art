//Add select class to the black color from the palette first
let corPreta = document.getElementById('color-1');
corPreta.classList.add('selected');

//Add select class when clicking on the square from the palette
let selectedColor = document.querySelectorAll('.color');
document.addEventListener('click', function(event) {
    if (event.target.classList = 'color') {
        selectedColor.classList.add('selected');
    }
});