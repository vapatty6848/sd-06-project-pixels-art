let pixel = document.querySelectorAll('.pixel');
let color = document.querySelectorAll('.color');
let selected = document.querySelector('selected');
let colorPallete = document.querySelector('#color-palette')
let color2 = document.querySelector('.color2');
let color3 = document.querySelector('.color3');
let color4 = document.querySelector('.color4');


function generateAleatoryColor() {
    let color = '#';

    for (let i = 0; i < 3; i++) {
        let sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? '0' + sub : sub);
    }
    return color
}

for (let i = 0; i < color.length; i++) {
    color[0].style.backgroundColor = "#000"
    color[i].style.backgroundColor = generateAleatoryColor();
}

function selectedColor() {
    for (let i = 0; i < color.length; i++) {
        color[0].classList.add('selected');
        for (let i = 0; i < pixel.length; i++) {
            pixel[i].addEventListener('click', function () {
                pixel[i].className = 'pixel color1'
            })
        };
        color[i].addEventListener('click', function () {
            for (let index = 0; index < color.length; index++) {
                if (color[index].classList.contains('selected')) {
                    color[index].classList.remove('selected')
                } else {
                    color[i].classList.add('selected')
                }

                for (let i = 0; i < pixel.length; i++) {
                    pixel[i].addEventListener('click', function () {
                        if (color[0].classList.contains('selected')) {
                            pixel[i].className = 'pixel color1'
                            pixel[i].style.backgroundColor = color[0].style.backgroundColor
                        } else if (color[1].classList.contains('selected')) {
                            pixel[i].className = 'pixel color2'
                            pixel[i].style.backgroundColor = color[1].style.backgroundColor
                        } else if (color[2].classList.contains('selected')) {
                            pixel[i].className = 'pixel color3';
                            pixel[i].style.backgroundColor = color[2].style.backgroundColor
                        } else {
                            pixel[i].className = 'pixel color4';
                            pixel[i].style.backgroundColor = color[3].style.backgroundColor

                        }
                    })
                }
            }

        });
    };

};

// Criando botao ClearBoard

let button = document.querySelector('#clear-board');
let clearBoard = document.querySelector('#pixel-board');
let whitePixel = document.querySelector('.white');

function buttonClear() {
    button.addEventListener('click', function () {
        for (let i = 0; i < pixel.length; i++) {
            pixel[i].className = 'pixel white'
            pixel[i].style.backgroundColor = ''
        }
    });
}
/////

// Limitando quadros de pixels
let inputSize = document.querySelector('#board-size');
let buttonInputSize = document.querySelector('#generate-board')
let valueInput;

function checkValue() {
    buttonInputSize.addEventListener('click', function () {
        if (inputSize.value === '') {
            alert("Board Inválido")
        }else if (inputSize.value < 5) {
            inputSize.value = 5;
        }else if (inputSize.value > 50) {
            inputSize.value = 50;
        }
                 
        valueInput = inputSize.value
        console.log(valueInput)
    })
}


checkValue();







///
generateAleatoryColor()
buttonClear();
selectedColor();
// whitePixels();