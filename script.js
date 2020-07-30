let colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', mudancadeCor)
let copiadaClasse = ["color", "black", "selected"]

// Função de captura das cores 
    function mudancadeCor(evento) {                          
        let minhaClasse = evento.target.className.split(' ');
        if(minhaClasse[1] === "black") {
            copiadaClasse = minhaClasse;
            copiadaClasse[2] = "selected"
            console.log(minhaClasse);
        } else if (minhaClasse[1] === "yellow") {
            copiadaClasse = minhaClasse;
            copiadaClasse[2] = "selected"
            console.log(minhaClasse);
        } else if (minhaClasse[1] === "blue") {
            copiadaClasse = minhaClasse;
            copiadaClasse[2] = "selected"
            console.log(minhaClasse);
        } else if (minhaClasse[1] === "red") {
            copiadaClasse = minhaClasse;
            copiadaClasse[2] = "selected"
            console.log(minhaClasse);
        }
        return copiadaClasse;

    } 


    let botaoApaga = document.getElementById("clear-board");
    botaoApaga.addEventListener('click', function() {

    } )
    
// Fim da função 

let corDoPixels = document.getElementById('pixel-board');
corDoPixels.addEventListener('click', colorPrint );

// Função p/ trocar as cores dos pixels 
    function colorPrint(eventos) {
        let corPixel = eventos.target.className.split(' ');
        
        if(corPixel[0] !== "linha") {
            corPixel[1] = copiadaClasse[1];
            corPixel = corPixel[0] + " " + corPixel[1];
            eventos.target.className = corPixel;
            
        } console.log(corPixel)
        
    }

// Mudando as cores do quadrado p/ branco 

let pixel = document.getElementById('pixel-board').querySelectorAll('.pixel');
let whiteButton = document.getElementById('clear-board');
console.log(pixel);

whiteButton.addEventListener('click', function() {
    for(let i = 0; i < pixel.length; i += 1) {
        pixel[i].className = "pixel"
    } console.log(pixel[0]);
    
})  