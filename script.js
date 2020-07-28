window.onload = function() {

  // Deixar o preto selecionado
  let colorBlack = document.querySelector('#black');
  colorBlack.classList.add('selected');
  console.log(colorBlack);

  // Como funciona a seleção de cores:
  // Classe selected = Deixa a cor selecionada para pintar a div (Add class="selected" style.backgroundColor = ".color[x]")
  // Quando clica em outra cor remove classe selected da antiga e adiciona na nova (onclick -> remove selected da antiga e poe na clicada)
  // Preto já inicia com a classe selected (WebStorage infinito)
  // Apertando no pixel em branco transforma na cor seleceionada -> onclick chama funcao changeColor muda pra cor selecionada
}

const palleteColor = document.querySelector('#color-pallete');
palleteColor.addEventListener('click', function() {
  let oldSelectedDiv = document.querySelector('.selected');
  let currentSelectedDiv = event.target;

  oldSelectedDiv.classList.remove('selected');
  currentSelectedDiv.classList.add('selected');
  console.log(currentSelectedDiv);
});

function resetPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#white';
  }
}
