window.onload = function () {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    console.log(event.target.id);
  });
}
