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
let bg
pixelBoard.forEach(pixel => {
    palette.forEach(color => {
        if (color.classList.contains('selected')) {
            pixel.addEventListener('click', () => {
                pixel.style.backgroundColor = color.style.backgroundColor
            })

        }

    })
})