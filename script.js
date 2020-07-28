function initialLoad(){
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

let currentColor = document.querySelector('.selected');
let colorToFill = document.getElementById('pixel-board');
    colorToFill.addEventListener('click',function(event){
        event.target.style.backgroundColor = currentColor.id;
    });

}

window.onload = initialLoad();

let colorSelected = document.getElementById("color-palette");
colorSelected.addEventListener('click',getColor);

function getColor(event){
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;

    currentSelectedDiv.classList.add('selected');
    oldSelectedDiv.classList.remove('selected');
    

    let myColor = event.target.id;


    let colorToFill = document.getElementById('pixel-board');
    colorToFill.addEventListener('click',function(event){
        event.target.style.backgroundColor = myColor;
    });
    
}

