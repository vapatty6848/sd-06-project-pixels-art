window.onload = function () {
    function handlePallet (event){
        let currentDiv = document.querySelector('.selected');
        let newDiv = event.target;
        currentDiv.classList.remove('selected');
        newDiv.classList.add('selected');
        let bkgrdColor = div.style.backgroundColor;
    }
    function createPallet (color) {
        let palletDiv = document.createElement('div');
        palletDiv.style.backgroundColor = color;
        palletDiv.className = 'pallet-item';
        palletDiv.addEventListener('click', handlePallet);
        if (color === 'black') {
            palletDiv.classList.add('selected');
        }
        return palletDiv;
    }
}
