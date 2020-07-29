// CRIAR A TABELA DINAMICAMENTE
function createBoard(num) {
    for (coluna = 1; coluna <= num; coluna++) {
        let wrapper = document.getElementById('pixel-board');
        let tr = document.createElement('tr');
        wrapper.appendChild(tr);
        for (let linha = 1; linha <= num; linha++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.classList.add('pixel');
        }
    }
}

// Apagar quadro
function eraseBoard() {
    let wrapper = document.getElementById('pixel-board');
    wrapper.innerHTML = "";
}

//MUDAR O TAMANHO DO QUADRO
let numInput = document.getElementById('board-size');
let numButton = document.getElementById('generate-board');
let numberForBoard;
console.log((numInput).value);

numInput.addEventListener('input', function () {
    numberForBoard = document.getElementById('board-size').value;
    console.log(numberForBoard)
});

// Tanto o keydown quanto o Button refazem o quadro
numInput.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        rebuildBoard();
    }
});

numButton.addEventListener('click', function () {
    rebuildBoard();
});

function rebuildBoard() {
    // Não deixar colocar valor null ou maior que 50
    if (!numberForBoard) {
        window.alert('Board inválido!')
        return;
    } else if (numberForBoard > 50) {
        window.alert('O tamanho máximo é 50 x 50');
        numberForBoard = 50;
    } else if (numberForBoard < 5) {
        window.alert('O tamanho mínimo é 5 x 5');
        numberForBoard = 5;
    }

    eraseBoard();
    createBoard(numberForBoard);
    useColors();
}

createBoard(5);
useColors();

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
function useColors() {
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
}

// Adicionar o botão de limpar
let limparButton = document.getElementById('clear-board');

limparButton.addEventListener('click', clear);

function clear() {
    // Todos os pixelBoxes viram branco de novo.
    let pixelBoxes = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixelBoxes.length; i++) {
        pixelBoxes[i].style.backgroundColor = 'white';
    }
}


