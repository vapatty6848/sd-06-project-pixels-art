const colorBlack = document.querySelector('.black');
const colorRed = document.querySelector('.red');
const colorBlue = document.querySelector('.blue');
const colorPurple = document.querySelector('.purple');
const pixel = document.querySelectorAll('.pixel');

window.onload = function () {
  document.querySelector('.black').className += ' selected';
  document.querySelector('.selected').style.color = 'black';
};

colorBlack.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorBlack.className += ' selected';
  document.querySelector('.selected').style.color = 'black';
});

colorRed.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorRed.className += ' selected';
  document.querySelector('.selected').style.color = 'red';
});

colorBlue.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorBlue.className += ' selected';
  document.querySelector('.selected').style.color = 'blue';
});

colorPurple.addEventListener('click', function () {
  colorBlack.className = 'color black';
  colorRed.className = 'color red';
  colorBlue.className = 'color blue';
  colorPurple.className = 'color purple';
  colorPurple.className += ' selected';
  document.querySelector('.selected').style.color = 'purple';
});

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', function () {
    pixel[i].style.backgroundColor = document.querySelector('.selected').style.color;
  });
}
