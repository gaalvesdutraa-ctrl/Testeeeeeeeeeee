const perguntaElemento =
    document.getElementById("pergunta");

const respostasElemento =
    document.getElementById("respostas");

const progressoElemento =
    document.getElementById("progresso");

let perguntaAtual = 0;

const resultadoJogador = {};

for (const atributo of atributos) {
    resultadoJogador[atributo] = 0;
}

mostrarPergunta();

function mostrarPergunta() {

    progressoElemento.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    const pergunta =
        perguntas[perguntaAtual];

    perguntaElemento.textContent =
        pergunta.pergunta;

    respostasElemento.innerHTML = "";

    pergunta.respostas.forEach(
        (resposta) => {

            const botao =
                document.createElement("button");

            botao.textContent =
                resposta.texto;

            botao.onclick = () => {

                // Soma os atributos

                for (const atributo in resposta.efeitos) {

                    const valor =
                        resposta.efeitos[atributo];

                    resultadoJogador[atributo] =
                        Math.min(
                            13,
                            Math.max(
                                0,
                                resultadoJogador[atributo] + valor
                            )
                        );

                }

                perguntaAtual++;

                // Resultado final

                if (
                    perguntaAtual >= perguntas.length
                ) {

                    const ranking =
                        calcularResultado();

                    const primeiro =
                        ranking[0];

                    const segundo =
                        ranking[1];

                    const terceiro =
                        ranking[2];

                    const info =
                        infosPersonagens[
                            primeiro.personagem.nome
                        ];

                    perguntaElemento.textContent =
                        `Você é: ${primeiro.personagem.nome}`;

                    const maximo =
                        primeiro.pontuacao;

                    const compat1 = 100;

                    const compat2 =
                        (
                            (segundo.pontuacao / maximo) * 100
                        ).toFixed(1);

                    const compat3 =
                        (
                            (terceiro.pontuacao / maximo) * 100
                        ).toFixed(1);

                    respostasElemento.innerHTML = `

<img
src="${info?.imagem ?? "imagens/desconhecido.jpg"}"
alt="${primeiro.personagem.nome}"
class="imagem-personagem"
>

<h2>${primeiro.personagem.nome}</h2>

<p><b>Parte:</b> ${info?.parte ?? "Desconhecida"}</p>

<p><b>Stand:</b> ${info?.stand ?? "Desconhecido"}</p>

<p>${info?.descricao ?? ""}</p>

<hr>

<p>🥇 ${primeiro.personagem.nome} (${compat1}%)</p>
<p>🥈 ${segundo.personagem.nome} (${compat2}%)</p>
<p>🥉 ${terceiro.personagem.nome} (${compat3}%)</p>

`;

                    console.log(
                        "TOP 20:",
                        ranking.slice(0, 20)
                    );

                    return;
                }

                mostrarPergunta();

            };

            respostasElemento.appendChild(
                botao
            );

        }
    );

}

function calcularResultado() {

    const ranking = [];

    for (const personagem of personagens) {

        let pontuacao = 0;

        for (const atributo of atributos) {

            const valorJogador =
                resultadoJogador[atributo];

            const valorPersonagem =
                personagem[atributo] ?? 0;

            pontuacao +=
                valorJogador *
                valorPersonagem;

        }

        ranking.push({
            personagem: personagem,
            pontuacao: pontuacao
        });

    }

    ranking.sort(
        (a, b) =>
            b.pontuacao - a.pontuacao
    );

    return ranking;

}