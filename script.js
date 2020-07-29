const colors = ['black', 'red', 'orange', 'yellow'];
const squarePaletteSize = '50px';
const squareBoardSize = '40px';

for (let i = 0; i < 4; i += 1) {
  const createColorClassDiv = document.createElement('div');
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
    const createColorClassDiv = document.createElement('div');
    createColorClassDiv.className = 'pixel';
    createColorClassDiv.style.width = squareBoardSize;
    createColorClassDiv.style.height = squareBoardSize;
    createColorClassDiv.style.backgroundColor = 'white';
    createColorClassDiv.style.float = 'left';
    createColorClassDiv.style.border = '1px solid black';

    document.getElementsByClassName('pixel-wrapp')[i].appendChild(createColorClassDiv);
  }
}

document.getElementById('color-palette').height = 'auto';

function deleteAllSelected() {
  document.querySelectorAll('.color').forEach(item => {
    for (let i = 0; i < item.classList.length; i += 1) {
      if (item.classList[i] === 'selected') {
        item.classList.remove(item.classList[i]);
      }
    }
  });
}

document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', event => {
    deleteAllSelected();
    event.target.className += ' selected';
  })
})

document.querySelectorAll('.color')[0].className += ' selected';

document.querySelectorAll('.pixel').forEach(box => {
  box.addEventListener('click', function () {
    const color = document.querySelector('.selected').style.backgroundColor;
    box.style.backgroundColor = color;
  })
});

const btClean = document.getElementById('clear-board');
btClean.addEventListener('click', function () {
  const allBoxes = document.querySelectorAll('.pixel');
  for (let i = 0; i < allBoxes.length; i += 1) {
    allBoxes[i].style.backgroundColor = 'white';

  }
})
