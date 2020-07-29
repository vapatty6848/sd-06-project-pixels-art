window.onclick = function () {
    if (event.target.className === 'color') {
        event.target.classList.add('selected');
        let selection = document.querySelector('.selected');
        selection.classList.remove('selected');
    }
}