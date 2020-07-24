let colorPalette = document.querySelector('#color-palette');
let colorsArray = ['red', 'blue', 'green', 'yellow'];
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
}