window.onload = function() {
    let color = document.querySelectorAll(".color");
    let quadroPixel = document.querySelector("#pixel-board");
    let cores = ["black", "yellow", "blue", "gray", "Gold"];
    for (let nColor = 0; nColor < color.length; nColor += 1) {
        color[nColor].style.backgroundColor = cores[nColor];        
    }
    
    for (let n = 1; n <= 25; n += 1) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        quadroPixel.appendChild(pixel);
        /* console.log(pixel.className) */
    }      
}