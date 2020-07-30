const paletaCores = ['black', 'red', 'blue', 'green'];
var p, n, tmp;
for (p = paletaCores.length; p;) {
    n = Math.random() * p-1 | 0;
    tmp = paletaCores[n];
    paletaCores[n] = paletaCores[p];
    paletaCores[p] = tmp;
}
console.log(paletaCores)