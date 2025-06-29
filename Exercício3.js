//Exercício
function verificarIdades(array, anoAtual) {
    let novoVetor = [];
    for (let i = 0; i < array.length; i++) {
        if (anoAtual - array[i] >= 18) {
            novoVetor.push(`Pessoa ${i + 1}: Maior de idade`)


        } else {
            novoVetor.push(`Pessoa ${i + 1}: Menor de idade`)


        }

    }
    return novoVetor;
}

let ano = Number(prompt("Informe o ano atual:"));
let anoArray = [];
let idadeArray = [];


let opt
do {
    let idade = Number(prompt("Informe a idade da pessoa (em ano):\n"))
    anoArray.push(idade);
    opt = prompt("Para continuar adicionando pessoas digite: 's' ou 'S'\nPara parar digite: 'n' ou 'N'")
} while (opt.toLowerCase() != "n");


idadeArray = verificarIdades(anoArray, ano);

alert(anoArray);
alert(idadeArray.join("\n"));
