window.onload = function () {
  const pixels = document.querySelectorAll('.pixel');
  const divPaleta = document.getElementById('color-palette');
  const colors = document.querySelectorAll('.color');

  for(let pixel in pixels){
    pixels[pixel].addEventListener('click', function () {
      pixels[pixel].style.backgroundColor = 'black';
    });
  }
  for(let color in colors){
    let cor = colors[color]; 
    cor.addEventListener('click', function () {
      if(cor.classList.contains('selected')){
        return;
      } else {
        for (let i = 0; i < colors.length; i++) {
          colors[i].classList.remove('selected');
        }
        cor.className += ' selected';
      }
    }) 
  }
// divPaleta.addEventListener('mouseover', function (event) {
//  event.target.addEventListener('click',function (event){
//   event.target.classList[1] //nome da cor
//   console.log(event.target);
//   const div = event.target;
//   console.log(div);
//  })
// });
}
