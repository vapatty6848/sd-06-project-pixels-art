window.onload = function () {
	// Variáveis das paletas
  let myColor01 = document.getElementById("color01");
  let myColor02 = document.getElementById("color02");
  let myColor03 = document.getElementById("color03");
  let myColor04 = document.getElementById("color04");

  // Cor preta para paleta 01
  myColor01.style.backgroundColor = "rgb(0 , 0 , 0)";
  myColor01.addEventListener("click", function () {
		chageSelected(myColor01);
  });	
  
  // gerar cores aleatórias para outras paletas
  generateRandomColor(myColor02);
  generateRandomColor(myColor03);
  generateRandomColor(myColor04);

  function generateRandomColor(color) {
		let col1 = Math.floor(Math.random() * (250));
		let col2 = Math.floor(Math.random() * (250));
		let col3 = Math.floor(Math.random() * (250));
    color.style.backgroundColor = "rgb(" + col1 + " , " + col2 + " , " + col3 + ")";  
    color.addEventListener("click", function () {
    	chageSelected(color);
    });
  }
  
  
  // myColor02.style.backgroundColor = "rgb(155 , 50 , 8)";  
	// myColor02.addEventListener("click", function () {
	// 	chageSelected(myColor02);
	// });

  
  // myColor03.style.backgroundColor = "rgb(198 , 168 , 108)";  
	// myColor03.addEventListener("click", function () {
	// 	chageSelected(myColor03);
	// });	

  
  // myColor04.style.backgroundColor = "rgb(45 , 75 , 139)";
	// myColor04.addEventListener("click", function () {
	// 	chageSelected(myColor04);
  // });	
  
  let colorSelected = "rgb(0 , 0 , 0)";
  
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
