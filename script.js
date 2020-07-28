
function desenhandoBlocos(){
    let bloco = document.getElementById("blocos-Pixel")
    for (let i=0;i<5;i++){
        for (let o=0;o<5;o++){
            let blocoUnico=document.createElement("div")
            blocoUnico.className="pixel"
            blocoUnico.style.background="white"
            blocoUnico.style.width="50px"
            blocoUnico.style.height="50px"
            bloco.appendChild(blocoUnico)
        }
    }
}
window.onload = desenhandoBlocos();