// window.onload = function () {
//   const pixels = document.querySelectorAll('.pixel');
//   const colors = document.querySelectorAll('.color');
//   let = corSelecionada = 'black';
//   for(let pixel = 0; pixel < pixels.length; pixel += 1){
//     pixels[pixel].addEventListener('click', function () {
//       pixels[pixel].style.backgroundColor = corSelecionada;
//     });
//   }
//   for(let color = 0; color < colors.length; color += 1){
//     let cor = colors[color]; 
//     cor.addEventListener('click', function () {
//       if(cor.classList.contains('selected')){
//         return;
//       } else {
//         for (let i = 0; i < colors.length; i++) {
//           colors[i].classList.remove('selected');
//         }
//         cor.className += ' selected';
//         corSelecionada = colors[color].classList[1];
//       }
//     }) 
//   }
// }
