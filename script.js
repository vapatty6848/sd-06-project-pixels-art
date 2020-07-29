window.onload = function () {

    // palletColor(['black', 'red', 'blue', 'green']);
    // insertPixels (5);
    // function palletColor (colors) {
    //     let colorContainer = document.getElementById('color-palette');
    //     for (let i in colors) {
    //         let colorDiv = createPallet(colors[i]);
    //         colorContainer.appendChild(colorDiv);
    //     }
    
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

    function handlePallet (event){
        let currentDiv = document.querySelector('.selected');
        let newDiv = event.target;
        currentDiv.classList.remove('selected');
        newDiv.classList.add('selected');
        let bkgrdColor = div.style.backgroundColor;
    }
    // function createPixels () {
    //     let pixelDiv = document.createElement('div');
    //     pixelDiv.className = 'pixel line';
    // }
    // function insertPixels (lines) {
    //     let pixelContainer = document.getElementById('pixel-board');
    //     for (let i = 0; i < lines; i += 1) {
    //         let pixelDiv = createPixels();
    //         pixelContainer.appendChild(pixelDiv);
    //     }
    //     for (let i = 0; i < lines; i += 1) {
    //         let pixelDiv = createPixels();
    //         pixelContainer.appendChild(pixelDiv);
    //     }
        
    // }
}
