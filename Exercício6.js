let n = Number(prompt("Informe o termo desejado da sequencia de Finonacci"));


function fibonnacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonnacci(n - 1) + fibonnacci(n - 2)
    }
}

function armazeFibonacci(n) {
    let armaze = [];
    for (let i = 0; i < n; i++) {
        let key = fibonnacci(i)
        armaze.push(key);
    }


    return armaze;

}

let resultado = [];

resultado = armazeFibonacci(n);
alert(`Os ${n} primeiros termos da sequência de Fibonacci são:\n${resultado.join(", ")}`);
