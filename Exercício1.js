//Exercício 1

let coeficienteA = Number(prompt("Informe o coeficiente 'a':"));
let coeficienteB = Number(prompt("Informe o coeficiente 'b':"));
let coeficienteC = Number(prompt("Informe o coeficiente 'c':"));


//calculo do delta.

function valorDelta(a, b, c) {
    let delta = ((b ** 2) - (4 * a * c))

    return delta;
}


var resultadoX1, resultadoX2;
var resultadoDelta = valorDelta(coeficienteA, coeficienteB, coeficienteC)

if (resultadoDelta > 0) {
    console.log("O valor de delta é positivo, o resultado será duas raizes:");

    resultadoX1 = (-coeficienteB + Math.sqrt(resultadoDelta)) / (2 * coeficienteA);

    resultadoX2 = (-coeficienteB - Math.sqrt(resultadoDelta)) / (2 * coeficienteA);


    console.log(`A raiz x1 é:${parseFloat(resultadoX1.toFixed(2))}, a raiz x2 é: ${parseFloat(resultadoX2.toFixed(2))}`);

} else if (resultadoDelta == 0) {
    console.log("O valor de delta é igual a 0, o resultado da raiz será apenas 1");

    resultadoX1 = (-coeficienteB + Math.sqrt(resultadoDelta)) / (2 * coeficienteA);

    console.log(`A raiz x1 é: ${parseFloat(resultadoX1.toFixed(2))}`);


} else {
    console.log(`O resultado de delta é negativo, não existe raiz real.`)
}