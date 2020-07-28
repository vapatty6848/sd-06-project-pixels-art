let palette = document.querySelectorAll('.color');
console.log(palette)

palette.forEach(color => {
    color.addEventListener('click', () => {
        palette.forEach(color => {
            color.classList.remove('selected')
        })
        color.className += ' selected'
    })
})


const pixelBoard = document.querySelectorAll('.pixel');
console.log(pixelBoard)
pixelBoard.forEach(pixel => {
    pixel.addEventListener('click', () => {
        palette.forEach(color => {
            if(color.classList.contains('selected')){
                pixel.className += ' ' + color.classList[1]
            }
        })
    })
})

const botaoApagar = document.getElementById('clear-board');
botaoApagar.addEventListener('click', () => {
    pixelBoard.forEach(pixel => {
        pixel.className = 'pixel td';
    })
});
