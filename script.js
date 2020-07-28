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