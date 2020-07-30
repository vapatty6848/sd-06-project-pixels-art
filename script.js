let selectedPalette = document.querySelectorAll(".selected")[0];
let currentColor = selectedPalette.style.background;

function colorSelect() {
    selectedPalette.classList.remove("selected");
    selectedPalette = event.target;
    selectedPalette.classList.add("selected");
    currentColor = selectedPalette.style.background;
    console.log(selectedPalette);
    console.log(currentColor);
}