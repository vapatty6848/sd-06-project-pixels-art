window.onload = function() {
    let color = document.querySelectorAll(".color");    
    let quadroPixel = document.querySelector("#pixel-board");
    let containerColor = document.querySelector("#color-palette");
    let botaoLimpar = document.querySelector("#clear-board")
    let cores = ["black", "yellow", "blue", "gray", "Gold"];

    function limparQuadro() {
        let listaPixel = document.querySelectorAll("div.pixel");
        for (let nPixel = 0; nPixel < listaPixel.length; nPixel += 1) {
            listaPixel[nPixel].style.backgroundColor = "white";
        }        
    }

    function criarPixels(nDivs) {
        for (let n = 1; n <= nDivs; n += 1) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            quadroPixel.appendChild(pixel);        
        }
    }
    criarPixels(25);

    for (let nColor = 0; nColor < color.length; nColor += 1) {
        color[nColor].style.backgroundColor = cores[nColor];        
    }
     
    let elementoSelecionado = color[0];
    let click1 = 0;    
    containerColor.addEventListener("click", function(event) {
        elementoSelecionado.className = "color";
        console.log(elementoSelecionado.className); 
        elementoSelecionado = event.target;
        elementoSelecionado.className += " selected";
        click1 += 1;
        console.log(elementoSelecionado.className);     
    });

    quadroPixel.addEventListener("click", function(event) {
        event.target.style.backgroundColor = elementoSelecionado.style.backgroundColor;               
    });

    botaoLimpar.addEventListener("click", function(event) {
        limparQuadro();             
    });

    let botaoTamanho = document.querySelector("#generate-board");
    // ver se tamanho é uma string ou um numero
    let tamanho = document.querySelector("#board-size").value;
    botaoTamanho.addEventListener("click", function(event) {
        if (tamanho <= 50 && tamanho >= 5) {
            quadroPixel.style.width = tamanho * 42;
            quadroPixel.style.height = tamanho * 42;

        } else {
            alert("Board inválido!");
        }
        limparQuadro();             
    });         
}