window.onclick = function () {
  const selection = document.querySelector('.selected');
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    selection.classList.remove('selected');
  }
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = selection.id;
  }
};
