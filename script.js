const blackColor = document.getElementsByClassName('color')[0]
blackColor.style.backgroundColor = 'black'

const blueColor = document.getElementsByClassName('color')[1]
blueColor.style.backgroundColor = 'blue'

const orangeColor = document.getElementsByClassName('color')[2]
orangeColor.style.backgroundColor = 'orange'

const greenColor = document.getElementsByClassName('color')[3]
greenColor.style.backgroundColor = 'green'

 




    for( i = 1; i <= 5; i ++ ) {

        for( k = 1; k <= 5; k ++) {
            let CriaDiv = document.createElement('div');
            let Board = document.getElementById('pixel-board');
            CriaDiv.className = 'pixel'
            Board.appendChild(CriaDiv)
            Board.appendChild(CriaDiv)


        }


    }
