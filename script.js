window.onclick = function() {
    let selection = document.querySelector(".selected");
    if(event.target.className === "color") {
        event.target.classList.add("selected");
        selection.classList.remove("selected");
        selection = document.querySelector(".selected");
    }
    if(event.target.className === "pixel") { 
        event.target.style.backgroundColor = selection.id;
    }
}
