//load inicial da pagina
window.onload = desenhandoBlocos();

//Criando os Blocos da Tabela
function desenhandoBlocos(){
    let bloco = document.getElementById("pixel-board")
    for (let i=0;i<5;i++){
        let linha = document.createElement("div")
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
//variaveis
let colorIninit = document.querySelector('.selected')
let corDeDentro = document.getElementById('pixel-board')

//Eventos 
corDeDentro.addEventListener('click',function(event){
    if(event.target.id != "pixel-board"){
        event.target.style.backgroundColor = colorIninit.id;
    }
})

