window.onload = function() {
    let color = document.querySelectorAll(".color");
    let cores = ["black", "yellow", "blue", "gray", "Gold"];
    for (let nColor = 0; nColor < color.length; nColor += 1) {
        color[nColor].style.backgroundColor = cores[nColor];        
    }
  

    
}