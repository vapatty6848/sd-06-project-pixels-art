//Colors Palette
let colorPalette = document.querySelector('#color-palette');
let colorsArray = ['black', 'blue', 'red' , 'green'];
for (let i = 0; i < 4; i += 1) {
    let colorItem = document.createElement('li');
    colorItem.className = 'color';
    colorPalette.appendChild(colorItem);
    colorItem.style.background = colorsArray[i];
    colorItem.style.border = 'solid black 1px';
    colorItem.style.borderRadius = '100%';
    colorItem.style.display = 'inline-block';
    colorItem.style.padding = '2%';
    colorItem.style.margin = '1%';
    colorItem.style.width = '1px';
}

//Pixel Board
let pixelBoard = document.createElement('table');
pixelBoard.id = 'pixel-board';
document.querySelector('section').appendChild(pixelBoard);
pixelBoard.style.display = 'block';
pixelBoard.style.lineHeight = 0;

for (let row = 0; row < 5; row += 1) {
    let tableRow = document.createElement('tr');
    tableRow.style.display = 'block';
    pixelBoard.appendChild(tableRow);
   for (let column  = 0; column < 5; column += 1) {
        let tablePixel = document.createElement('td');
        tablePixel.className = 'pixel';
        tablePixel.style.display = 'inline-block';
        tablePixel.style.border = 'solid black 1px';
        tablePixel.style.background = 'white';
        tableRow.appendChild(tablePixel);
        tablePixel.style.width = '40px';
        tablePixel.style.height = '40px';
        //Adding event for Task 8
        tablePixel.addEventListener('click', (event) => putColor(tablePixel));
    }
}

//Selected Color
let colorsOnPalette = document.querySelectorAll('li');
colorsOnPalette[0].className = colorsOnPalette[0].className.concat(' selected');

for (let i = 0; i < colorsOnPalette.length; i += 1) {
    colorsOnPalette[i].addEventListener('click', (event) => changeClass(i));
}

function changeClass(indiceOfElement){
    for (let i = 0; i < colorsOnPalette.length; i += 1) {
        if (i == indiceOfElement) {
            colorsOnPalette[i].className = colorsOnPalette[i].className.concat(' selected');
        } else {
            colorsOnPalette[i].className = 'color';
        }
    }
}


//Putting color on pixels
function putColor(clickedPixel) {
    let activeColorOfPalette = document.querySelector('.selected').style.background;
    clickedPixel.style.background = activeColorOfPalette;
}