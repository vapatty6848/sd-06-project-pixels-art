//'greenyellow', 'orange', 'violet', 'cyan', 'blueviolet', 'chartreuse', 'chocolate', 'coral', 'gold', 'goldenrod', 'grey', 'black'
// variaveis
const colorPalette = document.querySelector("#color-palette");
const tableColor = document.getElementById("pixel-board");

let colors = ["black", "blue", "yellow", "red"];

// functions and events
for (let i = 0; i < colors.length; i++) {
  let createBoxColor = document.createElement("li");
  createBoxColor.className = "color";
  createBoxColor.style.backgroundColor = colors[i];
  colorPalette.appendChild(createBoxColor);
}

for (let i = 0; i < 5; i++) {
  let createTr = document.createElement("tr");
  createTr.className = "tabela";
  tableColor.appendChild(createTr);
  for (let i = 0; i < 5; i++) {
    let createTd = document.createElement('td');
    createTd.className = 'pixel';
    createTr.appendChild(createTd);

    
  }
}
