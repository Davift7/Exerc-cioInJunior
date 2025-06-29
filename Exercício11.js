let tamanho = Number(prompt("Informe a quantidade de numeros que deseja informar"));
let lista = []
for (let i = 0; i < tamanho; i++) {
    let valor = Number(prompt(`Informe o ${i + 1}° numero do seu vetor`));
    lista.push(valor)

}

alert(lista)

let contador = 0;
for (let j = 0; j < tamanho; j++) {
    if ((j + 1) < tamanho) {
        if (lista[j] < lista[j + 1]) {
            contador++;
        }
    }
}

alert(contador)