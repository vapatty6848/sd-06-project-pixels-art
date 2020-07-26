let pixel = document.querySelectorAll('.pixel');


function selectedColor() {
    let color = document.querySelectorAll('.color');

    for (let i = 0; i < color.length; i++) {
        color[i].addEventListener('click', function(e) {
            e.className = 'color'
            e.target.classList.add('selected');
        })
    };
 }



function alternerdColors() {
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener('click', function () {
            pixel[i].classList.add('teste');
        })
    }
}


// Resetando a pagina para pixels brancos

function whitePixels() {
    for(let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'white'
    }
}

window.onload = whitePixels();

////


// Criando botao ClearBoard

let button = document.querySelector('#clear-board');

function buttonClear() {
    button.addEventListener('click', function() {
        for(let i = 0; i < pixel.length; i++) {
            pixel[i].style.backgroundColor = 'white';
        }
    })
}

/////

buttonClear();
alternerdColors();
selectedColor();
whitePixels();