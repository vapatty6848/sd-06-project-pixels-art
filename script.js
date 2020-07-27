window.onload = function () {

let varPixel = document.querySelector("#table")
let colorBlack = document.querySelector(".selected")

varPixel.addEventListener("click", function () {
  varPixel.style.backgroundColor = colorBlack

})

// function btnClick() {    
//   var x = document.getElementById("mytable").getElementsByTagName("td");
//   x[0].innerHTML = "i want to change my cell color";
//   x[0].style.backgroundColor = "yellow";
// }