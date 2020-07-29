window.onload = function() {

    let selectedColour = 'black';

    function divSelected(colour, div) {
        selectedColour = colour;
        const assignedDiv = document.getElementsByClassName('selected')[0];
        assignedDiv.classList.remove('selected');
        div.classList.add('selected');
    }

    function blackColour() {
        divSelected('black', document.querySelector('#black'));
    }
    document.querySelector('#black').addEventListener('click', blackColour);

    function orangeColour() {
        divSelected('orange', document.querySelector('#orange'));
    }
    document.getElementById('orange').addEventListener('click', orangeColour);

    function purpleColour() {
        divSelected('purple', document.querySelector('#purple'));
    }
    document.getElementById('purple').addEventListener('click', purpleColour);

    function seagreenColour() {
        divSelected('seagreen', document.querySelector('#seagreen'));
    }
    document.getElementById('seagreen').addEventListener('click', seagreenColour);


    function definedColour(pixel) {
        pixel.addEventListener('click', function() {
            pixel.style.backgroundColor = selectedColour;
        });
    }
    const boardPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < boardPixel.length; index += 1) {
        definedColour(boardPixel[index]);
    }

    const clearBoard = document.querySelector('#clear-board');
    clearBoard.addEventListener('click', function() {
        for (let index = 0; index < boardPixel.length; index += 1) {
            boardPixel[index].style.backgroundColor = 'white';
        }
    });

}