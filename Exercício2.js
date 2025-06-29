//Exercício 2
function fatorial(number) {
    let resultado = 1;
    for (let i = number; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}

let op;

do {
    let numero;

    do {
        numero = Number(prompt("Informe um número inteiro positivo:"));

        if (numero <= 0) {
            alert("O número precisa ser um inteiro positivo e diferente de 0!");
        }

    } while (numero <= 0);

    let key = fatorial(numero);
    alert(`O fatorial do seu número é: ${key}`);

    op = prompt("Deseja calcular outro fatorial?\nDigite (s ou S) para continuar ou (n ou N) para encerrar:");

} while (op.toLowerCase() !== "n");
