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
        if(event.target.id != "pixel-board"){
        event.target.style.backgroundColor = currentColor.id;
        }
    });

}

window.onload = initialLoad();

let colorSelected = document.getElementById("color-palette");
colorSelected.addEventListener('click',getColor);

function getColor(event){
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;

    if(currentSelectedDiv.id != "color-palette"){
        oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
   
    }

    let myColor = event.target.id;


    let colorToFill = document.getElementById('pixel-board');
    colorToFill.addEventListener('click',function(event){
        if(event.target.id != "pixel-board"){
        event.target.style.backgroundColor = myColor;
        }
    });
    
}

let clearBoardBtn = document.querySelector('#clear-board');
clearBoardBtn.addEventListener('click',clearBoard);

function clearBoard(){
    let pixelBoard = document.getElementsByClassName('pixel')
    for( let i=0; i< pixelBoard.length ; i+=1){
        pixelBoard[i].style.backgroundColor = 'white';
    }
}
