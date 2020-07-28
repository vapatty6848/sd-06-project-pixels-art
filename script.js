
function desenhandoBlocos(){
    let bloco = document.getElementById("pixel-board")
    for (let i=0;i<5;i++){
        let linha = document.createElement("div")
        bloco.appendChild(linha)
        for (let o=0;o<5;o++){
            let blocoUnico=document.createElement("div")
            blocoUnico.className="pixel"
            blocoUnico.style.background="white"
            blocoUnico.style.width="50px"
            blocoUnico.style.height="50px"
            linha.appendChild(blocoUnico)
        }
    }
}

function selectColor(){

}
window.onload = desenhandoBlocos();