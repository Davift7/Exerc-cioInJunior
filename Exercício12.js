let valor = [5, 5, 6, 6, 7, 7, 2, 8, 8, 9, 9];
function encontrarElementoUnico(array) {
    var contador;
    var numeroEscolhido;
    for (let i = 0; i < array.length; i++) {
        contador = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                contador++;
            }
        }
        if (contador < 2) {
            numeroEscolhido = valor[i]
        }
    }
    return numeroEscolhido;
}


