function modifyStyle(element , property , attribute) {
  element.style[`${property}`] = `${attribute}`;
}

colorPalete = document.getElementById('black');
modifyStyle(colorPalete, `backgroundColor`, `black`);
colorPalete = document.getElementById('orange');
modifyStyle(colorPalete, `backgroundColor`, `orange`);
colorPalete = document.getElementById('blue');
modifyStyle(colorPalete, `backgroundColor`, `blue`);
colorPalete = document.getElementById('burlywood');
modifyStyle(colorPalete, `backgroundColor`, `red`);
