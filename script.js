window.onclick = function () {
  const selection = document.querySelector('.selected');
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    selection.classList.remove('selected');
  }
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = selection.id;
  }
  if (event.target.id === 'clear-board') {
    const all = document.querySelectorAll('.pixel');
    for (let i = 0; i < all.length; i += 1) {
      all[i].style.backgroundColor = 'white';
    }
  }
};
