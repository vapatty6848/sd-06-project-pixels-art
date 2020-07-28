function colorBlack(){
    localStorage.setItem('class', 'selected');
}
//req 7- - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.

function selectColor(event){
    // primeira cor selecionada -> preto, class black selected
    //escolher cor:
    //trocar class selected de acordo com o click na paleta de cores -como faz?
    localStorage.setItem('class', event.target.id);

    //clicar na cor (evento: click, class color)-> selected vai para nova cor localStorage.setItem 
    
    
}

// req 8- - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.

function paintPixel(event){
 //depois de escolher a cor(na paleta) clicar no pixel que sequer colorir-> o pixel assume aquela cor
  //enquanto não selecionar outra cor permanecer com a mesma
//pintar pixel depois do click - classe pixel
 event.target.style.backgroundColor = localStorage.getItem('class');
 //chamar função: selectColor para saber qual cor usar
   
}

//req 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
function clearButton(event){
    // quando acontecer o evento: botão ser clicado-> limpar quadro de pixels:
    //evento: click no botão id ="clear-bord"
   document.getElementById("pixel-board").style.backgroundColor ="white";
   //usar for percorrer os pixels e trocar o background color
   // let index=0 ; index < document.getelementsByClassName("pixels").length; index ++;
   

    //limpar quadro de pixels:
    //document.getElementById("pixel-board").style.backgroundColor = "white";
}

document.getElementById("clear-bord").addEventListener("click", clearButton);
document.getElementById("color-palette").addEventListener("click", selectColor);
document.getElementById("pixel-board").addEventListener("click", paintPixel);