
let lista = ["Lucas", "João", "Pedro"]
let opt


do {

    let fila = "=======Fila de Espera=======\n"
    if (lista.length === 0) {
        fila += "Fila vazia.\n"
    } else {
        for (let i = 0; i < lista.length; i++) {
            fila += `${i + 1}° ${lista[i]}\n`

        }

    }

    fila += "\nComo deseja seguir?\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair";

    opt = Number(prompt(fila));



    switch (opt) {
        case 1:
            let nomeCliente = prompt("Informe o nome do cliente:");
            lista.push(nomeCliente)
            break;

        case 2:
            if (lista.length === 0) {
                alert("Nenhum cliente na fila.")
            } else {
                let nomeRetirado = lista.shift();
                alert(`Cliente ${nomeRetirado} está sendo atendido.`)
            }

            break;

        case 3:
            alert("Programa encerrado!")
            opt = 3;

            break;

        default:

            alert("Numero invalido.")
            break

    }

} while (opt !== 3)