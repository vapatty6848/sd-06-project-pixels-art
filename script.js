window.onload = function () {

let varPixel = document.querySelector("#table")
let colorBlack = document.querySelector(".selected")
let cadaPixel = document.querySelectorAll(".pixel")

cadaPixel.forEach(cadaPixel => { 
  cadaPixel.addEventListener('click', function () {
    cadaPixel.style.backgroundColor = colorBlack => {
    //handle click
  }
  })
})
}
