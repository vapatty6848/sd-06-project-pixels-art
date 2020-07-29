window.onload = function() {

  // Color palette selection
  function createColorPalette(numberOfPalettes) {
    for (let i = 0; i < numberOfPalettes; i += 1) {
      const div = document.createElement("div");
      div.className = "color";
      colorPaletteContainer.appendChild(div);
    }
  }
  
  const colorPaletteContainer = document.getElementById("color-palette");
  createColorPalette(4);

  // Assigning class "selected" to black palette
  const blackPalette = document.querySelectorAll(".color")[0];
  blackPalette.style.backgroundColor = "black"
  blackPalette.className += " selected";

  // 
  function generateRandomColor() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

  function applyColorOnColorPalette() {
    for (let colorPalette of colorsPalette) {
      colorPalette.style.backgroundColor = generateRandomColor();
    }
  }

  const colorsPalette = document.querySelectorAll(".color:not(:first-child)");
  applyColorOnColorPalette();

  // Pixel board
  function createPixelLine() {
    const pixelLine = document.createElement("div");
    pixelLine.className = "pixel-line";
    pixelBoardContainer.appendChild(pixelLine);
  }

  function createPixel(index) {
    const pixelLines = document.querySelectorAll(".pixel-line");
    
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.onclick = function() {colorPixel(pixel);}

    pixelLines[index].appendChild(pixel);
  }

  function generatePixelBoard(numberOfRows,numberOfColumns) {
    for (let i = 0; i < numberOfRows; i += 1) {
      createPixelLine();
      for (let j = 0; j < numberOfColumns; j += 1) {
        createPixel(i);
      }
    }
  }

  const pixelBoardContainer = document.getElementById("pixel-board");
  generatePixelBoard(5,5);

  // Color pixelBoard
  function changeSelectedClassAndBrushColor(element) {
    const currentInk = document.querySelector(".selected");
    currentInk.classList.remove("selected");

    element.className += " selected";
    changeBrushColor(element);
  }

  function changeBrushColor(element) {
    let color = extractColorFromString(element.getAttribute("style"));
    brush = color;
  }

  function extractColorFromString(elementStyle) {
    let color = elementStyle
    color = color.split(": ");
    color = color[1];
    color = color.split(";");
    color = color[0];
    return color;
  }

  const inks = document.querySelectorAll(".color");
  let brush = "black";

  for (let ink of inks) {
    ink.addEventListener("click", function() {
      changeSelectedClassAndBrushColor(this);
    })
  }

  function colorPixel(pixel) {
    pixel.style.backgroundColor = brush;
  }

}
