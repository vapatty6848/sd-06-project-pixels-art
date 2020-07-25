let pixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i < 25; i++) {
  const div = document.createElement('div');
  div.className = 'pixel';
  pixelBoard.appendChild(div);
}