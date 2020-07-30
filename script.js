window.onload = function() {

    createColorPallete(['black', 'cyan', 'red', 'yellow']);

    function createColorPallete(colors) {
        let palleteBox = document.querySelector("#color-palette");
        
        for (let index in colors) {
            let palleteItem = createPallteItem(colors[index]);
            palleteBox.appendChild(palleteItem);
        }
    }   
    
    
    function createPallteItem(color) {
        let palleteItem = document.createElement("div");
        palleteItem.style.backgroundColor = color;
        palleteItem.className = "color";
        palleteItem.addEventListener("click", handleEvintPallete);

        if (color === "black") {
            palleteItem.classList.add("selected");
        }
        return palleteItem;
    }

    function handleEvintPallete(event) {
        let oldSelectedDiv = document.querySelector(".selected");
        let currentSelectedDiv = event.target;

        oldSelectedDiv.classList.remove("selected");
        currentSelectedDiv.classList.add("selected");
    }

}