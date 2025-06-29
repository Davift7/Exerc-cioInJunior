//Exercício 4
let valorReais = Number(prompt("Informe o seu valor em dinheiro em real $:"));

let converEuro, converDolar;

converEuro = valorReais / 6.10;
converDolar = valorReais / 5.70;

alert(`O seu valor em reais é: R$${valorReais}\nConvertendo para Euro fica: €${parseFloat(converEuro.toFixed(2))}\nConvertendo para Dólar fica: $ ${parseFloat(converDolar.toFixed(2))} `)
