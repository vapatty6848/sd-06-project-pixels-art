const colors = document.querySelectorAll('.color');
const clearBoard = document.getElementById('clear-board')
const inputSize = document.getElementById('board-size')
const vqvButton = document.getElementById('generate-board')
const pixelBoard = document.getElementById('pixel-board')
let = corSelecionada = 'black';
colors[0].classList.add('selected');

//Muda selecionada para a cor que o usuario clicou na paleta de cores
for (let cor = 0; cor < colors.length; cor++) {
  colors[cor].addEventListener('click', function () {
   for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove('selected')
   }
    colors[cor].classList.add('selected')
    if (colors[cor].classList.contains('selected')){
      corSelecionada = colors[cor].id
    }

  })
}
//Pinta o pixel com a cor selecionada
const pixels = document.querySelectorAll('.pixel');
for(let pixel = 0; pixel < pixels.length; pixel += 1){
  pixels[pixel].addEventListener('click', function () {
    pixels[pixel].style.backgroundColor = corSelecionada;
  });
}

//Pinta o quadro inteiro de Branco
clearBoard.addEventListener('click', function () {
  for(let pixel = 0; pixel < pixels.length; pixel += 1){
    pixels[pixel].style.backgroundColor = 'white'
  }
})

vqvButton.addEventListener('click', function () {
  if (inputSize.value < 5) {
    inputSize.value = 5
  } else if (inputSize.value > 7) {
    inputSize.value = 7
  }
  let table = document.createElement('table')
  document.getElementsByTagName('article')[0].appendChild(table)
  let tbody = document.createElement('tbody')
  table.appendChild(tbody)
  for (let i = 0; i < inputSize.value; i+= 1) {
    let linha = document.createElement('tr')
    tbody.appendChild(linha)
    for (let i2 = 0; i2 < inputSize.value; i2+= 1) {
      let square = document.createElement('td')
      linha.appendChild(square) 
      square.classList.add('pixel')
    }
  }
})







