const colors = ['black', 'red', 'orange', 'yellow'];
const squarePaletteSize = '50px';
const squareBoardSize = '40px';

for (let i = 0; i < 4; i += 1) {
  let createColorClassDiv = document.createElement('div');
  createColorClassDiv.className = 'color';
  createColorClassDiv.style.width = squarePaletteSize;
  createColorClassDiv.style.height = squarePaletteSize;
  createColorClassDiv.style.backgroundColor = colors[i];
  createColorClassDiv.style.float = 'left';
  createColorClassDiv.style.border = '1px solid black';

  document.getElementById('color-palette').appendChild(createColorClassDiv);
}

for (let i = 0; i < 5; i += 1) {
  const lineDiv = document.createElement('div');
  lineDiv.className = 'pixel-wrapp';
  lineDiv.width = (colors.length * squareBoardSize) + (colors.length * 2);
  document.getElementById('pixel-board').appendChild(lineDiv);

  for (let j = 0; j < 5; j += 1) {
    let createColorClassDiv = document.createElement('div');
    createColorClassDiv.className = 'pixel';
    createColorClassDiv.style.width = squareBoardSize;
    createColorClassDiv.style.height = squareBoardSize;
    createColorClassDiv.style.backgroundColor = 'white';
    createColorClassDiv.style.float = 'left';
    createColorClassDiv.style.border = '1px solid black';


    document.getElementsByClassName('pixel-wrapp')[i].appendChild(createColorClassDiv);
  }
}


// for (let i = 0; i < 5; i += 1) {
//   // const lineDiv = document.createElement('div');
//   // lineDiv.id = 'pixel-wrapp';
//   document.getElementById('pixel-board').appendChild(lineDiv);
//   for (let i = 0; i < 5; i += 1) {
//     let createColorClassDiv = document.createElement('div');
//     createColorClassDiv.className = 'pixel';
//     createColorClassDiv.style.width = squareBoardSize;
//     createColorClassDiv.style.height = squareBoardSize;
//     createColorClassDiv.style.backgroundColor = 'white';
//     createColorClassDiv.style.float = 'left';
//     createColorClassDiv.style.border = '1px solid black';


//     document.getElementById('pixel-wrapp').appendChild(createColorClassDiv);
//   }
// }
// document.getElementById('')
