let pixelBoard = document.getElementById('pixel-board');
for ( let i = 0 ; i < 5 ; i ++ ){
    for ( let j = 0 ; j < 5 ; j ++ ){
    let eachPixel = document.createElement('div');
    eachPixel.className = "pixel";
    eachPixel.style.backgroundColor = "white";
    eachPixel.style.width = "40px";
    eachPixel.style.height= "40px"
    pixelBoard.appendChild(eachPixel);  
    }
}
   
let colorSelected = document.querySelectorAll('.color');
colorSelected[1].addEventListener('click',getColor(event))

function getColor(event){
  
    console.log(event.backgroundColor);
}

getColor();