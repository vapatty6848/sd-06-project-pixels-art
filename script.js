window.onload = function () {
    let selectedColor = 'black';
    document.getElementById('black').style.backgroundColor = 'black';
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('green').style.backgroundColor = 'green';
    document.getElementById('yellow').style.backgroundColor = 'yellow';
}
function  colorChange  ( )  {
    const  oldPixelSelected  =  documento . querySelector ( '.selected' ) ;
    const  currentPixelSelected  =  evento . alvo ;
    oldPixelSelected . classList . remove ( 'selecionado' ) ;
    currentPixelSelected . classList . add ( 'selecionado' ) ;
    selectedColor  =  currentPixelSelected . estilo . backgroundColor ;
}      

