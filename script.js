const pixelBoard = document.querySelector('#pixel-board');
const colorPalet = document.querySelector('#color-palette');
const teste = document.querySelectorAll('.color');
let classSel = 'preto';

function createPixelBoard() {
  
    for (let j = 0; j < 5; j+=1) {
      let createSection = document.createElement('section');
      createSection.setAttribute('class', 'sectionPB');
      pixelBoard.appendChild(createSection);    
  }
  
  const sect = document.getElementsByClassName('sectionPB');
    for (let l = 0; l < 5; l++) {
        for (let i = 0; i < 5; i += 1) {
            let createDiv = document.createElement('div')
            createDiv.setAttribute('class', 'pixel bgbranco')
            sect[l].appendChild(createDiv);
          } 
    }
      
}

colorPalet.addEventListener('click', function (event) {
  classSel = event.target.classList[1]
  for (const j of document.querySelectorAll('.color')) {
    if (j.classList.contains('selected')) {
      j.classList.remove('selected')
    }
  }
  event.target.classList.add('selected')
})

pixelBoard.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.className = "";
  }
  event.target.classList.add('pixel')
  event.target.classList.add(classSel)
})
