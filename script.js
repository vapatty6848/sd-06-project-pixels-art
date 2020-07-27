const pixelBoard = document.querySelector('#pixel-board');
const colorPalet =  document.querySelector('#color-palette');
const teste = document.getElementsByTagName('div')
let classSel = 'preto'; 

function createPixelBoard() {
for (let i = 0; i < 25; i+=1) {
    let create = document.createElement('span')
    create.setAttribute('class', 'pixel bgbranco')
    pixelBoard.appendChild(create);   
}   
}

colorPalet.addEventListener('click', function (event) {
     classSel = event.target.classList[1]
    for (const j of document.getElementsByTagName('div')) {
        if (j.classList.contains('selected')) {
            j.classList.remove('selected')
        }
    }
     event.target.classList.add('selected')
})

pixelBoard.addEventListener('click', function (event) {
    if(event.target.classList.contains('pixel')){
        event.target.className = "";
    }
    event.target.classList.add('pixel')
    event.target.classList.add(classSel)
})
