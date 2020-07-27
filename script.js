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
    if(event.target.id === "clear-board") {
        const all = document.querySelectorAll(".pixel");
        for (let i = 0; i < all.length; i++){
            all[i].style.backgroundColor = "white";
        }
        
    }
}
