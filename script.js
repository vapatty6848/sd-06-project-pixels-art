window.onload = function() {
// carregando pagina com cor selecionada.
    document.getElementById('black').classList.add('selected');
};

let blue = document.getElementById('blue');
blue.addEventListener('click', function() {
    document.getElementById('blue').classList.add('selected')

if(blue.classList === 'color selected') {
    document.getElementById('black').classList.remove('color selected');
    document.getElementById('black').classList.add('color');
    document.getElementById('blue').classList.remove('color selected');
    document.getElementById('blue').classList.remove('selected');
}
});
console.log(blue.classList)