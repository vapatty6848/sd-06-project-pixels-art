//load inicial da pagina
window.onload = desenhandoBlocos();

//Functions
function desenhandoBlocos(){
    let bloco = document.getElementById("pixel-board")
    for (let i=0;i<5;i++){
        let linha = document.createElement("div")
        linha.style.height="40px"
        linha.style.width="210px"
        bloco.appendChild(linha)
        for (let o=0;o<5;o++){
            let blocoUnico=document.createElement("div")
            blocoUnico.className="pixel"
            blocoUnico.style.background="white"
            blocoUnico.style.width="40px"
            blocoUnico.style.height="40px"
            blocoUnico.style.border="1px solid black"
            blocoUnico.style.display="inline-block"
            linha.appendChild(blocoUnico)
        }
    }
}
function limpaBlocos(){
    let pixelLimpo = document.getElementsByClassName('pixel')
    for( let i=0; i< pixelLimpo.length ; i+=1){
        pixelLimpo[i].style.backgroundColor = 'white';
    }
}
//Variaveis
let colorIninit = document.querySelector('.selected')
let corDeDentro = document.getElementById('pixel-board')
let limpaBloco = document.querySelector('#clear-board');

//Eventos 
corDeDentro.addEventListener('click',function(event){
    if(event.target.id != "pixel-board"){
        event.target.style.backgroundColor = colorIninit.id;
    }
})
limpaBloco.addEventListener('click',limpaBlocos);





