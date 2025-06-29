function adicionarJogador() {
    let novoJogador = new Object();
    let nome = prompt("Informe o nome do jogador:")
    let idade = Number(prompt("Informe a idade do jogador:"))
    let posicao = prompt("Informe a posição do jogador:")
    let pontuacao = Number(prompt("Informe a pontuação do jogador:"))
    novoJogador.nome = nome;
    novoJogador.idade = idade;
    novoJogador.posicao = posicao;
    novoJogador.pontuacao = pontuacao;
    return novoJogador
}

function buscarPorPosicao(array, posição) {
    let lista = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].posicao.toLowerCase() === posição.toLowerCase()) {
            lista.push(array[i])
        }
    }
    return lista;
}


function listarTime(array) {
    let resultado = "Jogadores do time:\n\n";
    for (let i = 0; i < array.length; i++) {
        let jogador = array[i];
        resultado += `${i + 1}. Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}\n`;
    }
    alert(resultado);
}


function calcularPontuacaoMedia(array) {
    let soma = 0, contador = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i].pontuacao;
        contador++;
    }
    return soma / contador;
}
let time = [];
let opt;
alert("=======Bem vindo ao menu=======\n")

do {
    opt = Number(prompt("Como deseja seguir:\nOpção 1: Adicionar jogador\nOpção 2: Buscar por posição\nOpção 3: Listar time\nOpção 4: Calcular pontuação média\nOpção 5: Sair"))

    switch (opt) {

        case 1:
            time.push(adicionarJogador());
            break;

        case 2:
            if (time.length === 0) {
                alert("Não é possível verificar a posição, pois não tem jogadores no time");
            } else {
                let posicaoJogador = prompt("Informe a posição que deseja procurar");
                let lista = buscarPorPosicao(time, posicaoJogador);

                if (lista.length === 0) {
                    alert("Nenhum jogador encontrado nessa posição.");
                } else {
                    let resultado = `Jogadores na posição "${posicaoJogador}":\n\n`;
                    for (let i = 0; i < lista.length; i++) {
                        let jogador = lista[i];
                        resultado += `${i + 1}. Nome: ${jogador.nome}, Idade: ${jogador.idade}, Pontuação: ${jogador.pontuacao}\n`;
                    }

                    alert(resultado);
                }
            }
            break;


        case 3:
            if (time.length === 0) {
                alert("Não é possível listar o time, pois não tem jogadores")
            } else {
                listarTime(time)
            }
            break;

        case 4:
            if (time.length === 0) {
                alert("Não tem jogadores no time, não é possível calcular a média.")
            } else {
                let media = calcularPontuacaoMedia(time)
                alert(`A média de pontuação do time é: ${media}`)
            }
            break;

        case 5:
            alert("Programa encerrado!")
            break;

    }


} while (opt !== 5)