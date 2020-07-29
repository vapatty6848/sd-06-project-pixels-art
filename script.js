window.onclick = function() {
  let selectedColor = document.querySelector('.selected');

  if(event.target.className === 'color'){
    event.target.classList.add('selected');
    selectedColor.classList.remove('selected');
    selectedColor = document.querySelector('.selected');
  }
  if(event.target.className === 'pixel'){
    // Até aqui vai tudo certo!
    console.log(event.target);
    // Aqui está o erro!
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}