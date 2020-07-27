let pixel = document.querySelectorAll('.pixel');
let color = document.querySelectorAll('.color');


window.onload = selectedColor();
function selectedColor() {
    let selected = document.querySelector('selected');
    for (let i = 0; i < color.length; i++) {
        color[0].classList.add('selected')
        color[i].addEventListener('click', function () {
            for (let index = 0; index < color.length; index++) {
                if (color[index].classList.contains('selected')) {
                    color[index].classList.remove('selected')
                } else {
                    color[i].classList.add('selected');
                }
                for (let i = 0; i < pixel.length; i++) {
                    pixel[i].addEventListener('click', function () {
                        if (color[0].classList.contains('selected')) {
                            pixel[i].className = 'pixel color1'
                        } else if (color[1].classList.contains('selected')) {
                            pixel[i].className = 'pixel color2'
                        } else if (color[2].classList.contains('selected')) {
                            pixel[i].className = 'pixel color3';
                        } else {
                            pixel[i].className = 'pixel color4';
                        }
                    })
                }
            }

        });
    };

};





// Resetando a pagina para pixels brancos

// function whitePixels() {
//     for (let i = 0; i < pixel.length; i++) {
//         pixel[i].style.backgroundColor = 'white';
//     }
// }

// window.onload = whitePixels();

////


// Criando botao ClearBoard

let button = document.querySelector('#clear-board');

function buttonClear() {
    button.addEventListener('click', function () {
        for (let i = 0; i < pixel.length; i++) {
            pixel[i].className = 'pixel';
        }
    })
}
/////

buttonClear();
selectedColor();
// whitePixels();