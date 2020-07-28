// Selecionar e colocar as cores no background dos divs
let colors = ["black", "rgb(214, 40, 40)", "rgb(252, 191, 73)", "rgb(234, 226, 183)"];


function setColors(one, two, three, four) {
    let box1 = document.getElementById("black");
    let box2 = document.getElementById("red");
    let box3 = document.getElementById("yellow");
    let box4 = document.getElementById("gray");

    box1.style.backgroundColor = one;
    box2.style.backgroundColor = two;
    box3.style.backgroundColor = three;
    box4.style.backgroundColor = four;
}

setColors(colors[0], colors[1], colors[2], colors[3])


// Pegar a cor clicada
let chosenColor = colors[0]; // preto já pré-selecionado

let colorElements = document.getElementsByClassName("color");
let selectedDiv = colorElements[0];
colorElements[0].classList.add('selected');

for (let i = 0; i < colorElements.length; i++) {
    // pegar cada elemento com a id color 
    // adicionar um eventListener nele
    colorElements[i].addEventListener("click", function () {
        chosenColor = colorElements[i].style.backgroundColor;
        selectedDiv.classList.remove('selected');
        selectedDiv = colorElements[i];
        colorElements[i].classList.add('selected');
    });
}

// Pintar qualquer pixel com a cor clicada
let pixelBoxes = document.getElementsByClassName("pixel");

for (let i = 0; i < pixelBoxes.length; i++) {
    pixelBoxes[i].addEventListener("click", function () {
        pixelBoxes[i].style.backgroundColor = chosenColor;
    });
    // extra pra apagar com o botão direito do mouse!!
    pixelBoxes[i].addEventListener("contextmenu", function () {
        pixelBoxes[i].style.backgroundColor = "white";
        event.preventDefault();
    });
}

// Adicionar o botão de limpar
let limparButton = document.getElementById('clear-board');

limparButton.addEventListener('click', clear);

function clear() {
    // Todos os pixelBoxes viram branco de novo.
    for (let i = 0; i < pixelBoxes.length; i++) {
        pixelBoxes[i].style.backgroundColor = 'white';
    }
}

// BONUS 1 - Mudar tamanho do quadro
let sizeInput = document.getElementById("board-size");
let sizeButton = document.getElementById("generate-board");

sizeButton.addEventListener('click', function () {
    let times = sizeInput.value; // o número que o usuario colocou
    letboxesArray = [];


});
