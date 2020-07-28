const colorBlack = document.querySelector('.black');
const colorRed = document.querySelector('.red');
const colorBlue = document.querySelector('.blue');
const colorPurple = document.querySelector('.purple');

window.onload = function () {
  document.querySelector('.black').className += ' selected';
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
