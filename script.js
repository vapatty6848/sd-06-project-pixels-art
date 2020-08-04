    const color = document.querySelectorAll('.color')
    const td = document.querySelectorAll('td')
    
    for (let i = 0; i < color.length; i += 1){
        color[i].addEventListener('click', function () {
            for (let j = 0; j < color.length; j += 1) {
                if (color[j].classList.contains('selected') === true) {
                  color[j].classList.remove('selected');
                }
              }
              color[i].classList.add('selected');
        })
    }

    document.querySelector('#pixel-board').addEventListener('click', function (event) {
        let colo;
        for (let i = 0; i < color.length; i += 1) {
            if (color[i].classList.contains('selected') === true) {
            colo = color[i].style.backgroundColor;
            }
        }
        event.target.style.backgroundColor = colo;
    });

    document.querySelector('#clear-board').addEventListener('click', function () {
        const block = document.querySelectorAll('.pixel');
        for (let i = 0; i < block.length; i += 1) {
          block[i].style.backgroundColor = 'white';
        }
      }); 
  