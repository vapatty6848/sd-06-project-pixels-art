let selectedColor = 'black';

window.onload=function(){

    let colorList = ['black', 'red', 'green', 'blue'];
    let pixels = document.querySelectorAll('.pixel');
  
    createColorPalette(colorList);
 }
    function colorSelector (color){
        let selectorDivElement = document.createElement('div');
        selectorDivElement.className = 'color';
        selectorDivElement.style.backgroundColor = color;
        selectorDivElement.style.display = "table-cell";
        return selectorDivElement;
      }
    }



