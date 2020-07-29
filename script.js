window.onclick = function () {
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    const selection = document.querySelector('.selected');
    selection.classList.remove('selected');
  }
};
