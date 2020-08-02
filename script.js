window.onclick = function() {
  let palleteColor = document.querySelector(".selected");
  if (event.target.className === "color") {
    palleteColor.classList.remove("selected");
    event.target.classList.add("selected");
  }

  if (event.target.className === "pixel") {
    event.target.style.backgroundColor = palleteColor.id;
  }
}