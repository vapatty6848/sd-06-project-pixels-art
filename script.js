window.onload = function () {
	// Variáveis das paletas
  let myColor01 = document.getElementById("color01");
  let myColor02 = document.getElementById("color02");
  let myColor03 = document.getElementById("color03");
  let myColor04 = document.getElementById("color04");

  // Atribui Cor preta para paleta 01
  let colorSelected = "rgb(0 , 0 , 0)";
  myColor01.style.backgroundColor = colorSelected;
  myColor01.addEventListener("click", function () {
		chageSelected(myColor01);
  });	
  
  // gerar cores aleatórias para outras paletas
  generateRandomColor(myColor02);
  generateRandomColor(myColor03);
  generateRandomColor(myColor04);

    // gera cores aleatórias 
  function generateRandomColor(color) {
    let col1 = Math.floor(Math.random() * (250));
    let col2 = Math.floor(Math.random() * (250));
    let col3 = Math.floor(Math.random() * (250));
    color.style.backgroundColor = "rgb(" + col1 + " , " + col2 + " , " + col3 + ")";  
    color.addEventListener("click", function () {
      chageSelected(color);
    });
  }

  // Muda a classe selected
  function chageSelected(newSelected){
    let oldSelected = document.querySelector(".selected");
    oldSelected.classList.remove("selected");
    newSelected.classList.add("selected");
    colorSelected = newSelected.style.backgroundColor;
  }

  let Pixels = document.getElementsByClassName("pixel");
  for(var i = 0; i < Pixels.length; i += 1) {
    let myItemPixel = Pixels[i];
    myItemPixel.addEventListener('click', function() {
      myItemPixel.style.backgroundColor = colorSelected;
    });
  }

  let btnClear = document.getElementById("clear-board");
  btnClear.addEventListener('click', function() {
    for(var i = 0; i < Pixels.length; i += 1) {
      let myItemPixel = Pixels[i];
      myItemPixel.style.backgroundColor = "rgb(255 , 255 , 255)";
    }
  });
}


