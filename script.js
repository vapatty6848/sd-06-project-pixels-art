function colorBlack(){
    localStorage.getItem('class', 'selected');
}
//function selectColor(){
    // primeira cor selecionada -> preto, class black selected
    //escolher cor:
    //trocar class selected de acordo com o click na paleta de cores -como faz?
    //clicar na cor (evento: click, class color)-> selected vai para nova cor localStorage.setItem
    //depois de escolher a cor(na paleta) clicar no pixel que sequer colorir-> o pixel assume aquela cor
    //enquanto não selecionar outra cor permanecer com a mesma
//}
function clearButton(){
    // quando acontecer o evento: botão ser clicado-> limpar quadro de pixels:
    //evento: click no botão id ="clear-bord"
    let buttoncleaner = document.getElementById("clear-bord");
    buttoncleaner.addEventListener("click", document.getElementById("pixel-board").style.backgroundColor = "white");

    //limpar quadro de pixels:
    //document.getElementById("pixel-board").style.backgroundColor = "white";
}
