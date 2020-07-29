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


}