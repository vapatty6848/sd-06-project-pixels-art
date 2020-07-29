window.onload = function() {

    let selectedColour = 'black';

    function divSelected(colour, div) {
        selectedColour = colour;
        const assignedDiv = document.getElementsByClassName('selected')[0];
        assignedDiv.classList.remove('selected');
        div.classList.add('selected');
    }

    function blackColour() {
        divSelected('black', document.getElementById('black'));
    }
    document.getElementById('black').addEventListener('click', blackColour);

    function orangeColour() {
        divSelected('orange', document.getElementById('orange'));
    }
    document.getElementById('orange').addEventListener('click', orangeColour);

    function purpleColour() {
        divSelected('purple', document.getElementById('purple'));
    }
    document.getElementById('purple').addEventListener('click', purpleColour);

    function seagreenColour() {
        divSelected('seagreen', document.getElementById('seagreen'));
    }
    document.getElementById('seagreen').addEventListener('click', seagreenColour);
}