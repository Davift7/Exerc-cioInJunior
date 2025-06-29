//Exercício 7

function ehPalindromo(fraseOriginal, fraseReversa, tam) {
    for (let i = 0; i < tam; i++) {
        if (fraseOriginal[i].toLowerCase() !== fraseReversa[i].toLowerCase()) {
            return 0;
        }

    }
    return 1
}


let frase = prompt("Informe uma frase: ");
frase = frase.split(" ").join("")
let fraseReserva = [];
let tam = frase.length

let j = 0;
for (let i = tam - 1; i >= 0; i--) {
    fraseReserva[j] = frase[i];
    j++;

}
fraseReserva = fraseReserva.join("");


let palindromo = ehPalindromo(frase, fraseReserva, tam)

if (palindromo == 1) {

    alert("Essa frase é um palindromo");
} else {

    alert("Essa frase não é um palindromo");
}

