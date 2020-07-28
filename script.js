const colorOptions = document.querySelectorAll('.color');
let currentColorElement = document.querySelector('.selected');
let currentColor = window.getComputedStyle(currentColorElement).backgroundColor;

function getColor(event) {
  currentColorElement = event.target;
  for (const i of colorOptions) {
    if (i.classList.contains('selected')) {
      i.classList.remove('selected');
    }
  }
  currentColorElement.classList.add('selected');
  currentColor = window.getComputedStyle(currentColorElement).backgroundColor;
}

colorOptions.forEach((colorOption) => {
  colorOption.addEventListener('click', getColor);
  colorOption.addEventListener('drag', getColor);
  }
);

function getDraggedColor(event) {
  event.preventDefault();
  if (event.target.className === 'pixel') {
    event.target.style.background = currentColor;
  }
}

for(let i = 1; i <= 25; i += 1) {
  const divPixel = document.createElement('div');
  divPixel.className = 'pixel';
  if (i % 5 === 0) {
    const createBR = document.createElement('br');
    document.querySelector('#pixel-board').appendChild(divPixel);
    document.querySelector('#pixel-board').appendChild(createBR);
  } else {
    document.querySelector('#pixel-board').appendChild(divPixel);
  }
}

const pixels = document.querySelectorAll('.pixel');

function paintColor(event) {
  event.target.style.backgroundColor = currentColor;
}

pixels.forEach((elem) => {
  elem.addEventListener('click', paintColor);
  elem.addEventListener('dragover', (event) => { event.preventDefault(); });
  elem.addEventListener('drop', getDraggedColor);
  }
);

function resetPixels() {
  pixels.forEach((elem) => { elem.style.backgroundColor = 'white'; });
}
