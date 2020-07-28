//inciando

//meme-text

function onChangeText () {

    let textInput = document.querySelector("#text-input");
    
    document.querySelector("#meme-text").innerText = textInput.value;
}
let textInput = document.querySelector("#text-input");
textInput.addEventListener("input", onChangeText);