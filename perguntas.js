const perguntas = [
{
    pergunta: "Qual frase mais combina com você?",

    respostas: [

        {
            texto: "Uma pessoa vale pelo bem que faz.",
            efeitos: {
                bondade: 2,
                altruismo: 1,
                crueldade: -1
            }
        },

        {
            texto: "A liberdade é a coisa mais importante.",
            efeitos: {
                liberdade: 2,
                ordem: -1
            }
        },

        {
            texto: "O mundo pertence aos determinados.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "O conhecimento vale mais que a força.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Quem tem poder decide as regras.",
            efeitos: {
                ego: 2,
                manipulacao: 1,
                bondade: -1
            }
        }
    ]
},
{
    pergunta: "Seu amigo tomou uma decisão terrível.",

    respostas: [

        {
            texto: "Fico ao lado dele mesmo assim.",
            efeitos: {
                lealdade: 2
            }
        },

        {
            texto: "Tento convencer ele a mudar.",
            efeitos: {
                empatia: 2
            }
        },

        {
            texto: "Deixo ele aprender sozinho.",
            efeitos: {
                paciencia: 1
            }
        },

        {
            texto: "Me afasto.",
            efeitos: {
                liberdade: 1
            }
        },

        {
            texto: "Uso isso a meu favor.",
            efeitos: {
                manipulacao: 2,
                crueldade: 1
            }
        }
    ]
},
{
    pergunta: "Você recebe um Stand absurdamente poderoso.",

    respostas: [

        {
            texto: "Protegeria pessoas.",
            efeitos: {
                bondade: 2,
                altruismo: 2
            }
        },

        {
            texto: "Tentaria entender como funciona.",
            efeitos: {
                inteligencia: 2,
                criatividade: 1
            }
        },

        {
            texto: "Buscaria meu sonho.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Mudaria o mundo.",
            efeitos: {
                determinacao: 2,
                carisma: 1
            }
        },

        {
            texto: "Ninguém mais ficaria acima de mim.",
            efeitos: {
                ego: 2,
                manipulacao: 1
            }
        }
    ]
},
{
    pergunta: "Você encontra uma Flecha Stand.",

    respostas: [

        {
            texto: "Entrego para alguém responsável.",
            efeitos: {
                honra: 2,
                ordem: 1
            }
        },

        {
            texto: "Estudo ela.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Uso em mim.",
            efeitos: {
                coragem: 2
            }
        },

        {
            texto: "Vendo para alguém.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Uso para ganhar vantagem.",
            efeitos: {
                manipulacao: 2
            }
        }
    ]
},
{
    pergunta: "Você só pode salvar uma pessoa.",

    respostas: [

        {
            texto: "Meu melhor amigo.",
            efeitos: {
                lealdade: 2
            }
        },

        {
            texto: "Um desconhecido inocente.",
            efeitos: {
                altruismo: 2,
                bondade: 1
            }
        },

        {
            texto: "Quem for mais útil no futuro.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Quem tiver mais chance de sobreviver.",
            efeitos: {
                paciencia: 1,
                inteligencia: 1
            }
        },

        {
            texto: "Eu mesmo.",
            efeitos: {
                ego: 2
            }
        }
    ]
},
{
    pergunta: "Se você pudesse ver seu futuro, o que faria?",

    respostas: [

        {
            texto: "Aceitaria meu destino.",
            efeitos: {
                ordem: 2,
                paciencia: 1
            }
        },

        {
            texto: "Tentaria mudá-lo.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "Usaria essa informação com cuidado.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Aproveitaria para alcançar meus objetivos.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Usaria para manipular eventos.",
            efeitos: {
                manipulacao: 2
            }
        }
    ]
},
{
    pergunta: "O que mais assusta você?",

    respostas: [

        {
            texto: "Perder alguém importante.",
            efeitos: {
                empatia: 2,
                lealdade: 1
            }
        },

        {
            texto: "Falhar.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "Perder minha liberdade.",
            efeitos: {
                liberdade: 2
            }
        },

        {
            texto: "Ser esquecido.",
            efeitos: {
                ego: 1,
                carisma: 1
            }
        },

        {
            texto: "Não alcançar meu potencial.",
            efeitos: {
                ambicao: 2
            }
        }
    ]
},
{
    pergunta: "Você e um rival têm o mesmo objetivo.",

    respostas: [

        {
            texto: "Compito honestamente.",
            efeitos: {
                honra: 2
            }
        },

        {
            texto: "Tento cooperar.",
            efeitos: {
                empatia: 2
            }
        },

        {
            texto: "Procuro uma vantagem estratégica.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Faço o necessário para vencer.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Saboto meu rival.",
            efeitos: {
                manipulacao: 2,
                crueldade: 1
            }
        }
    ]
},
{
    pergunta: "Você é acusado injustamente.",

    respostas: [

        {
            texto: "Defendo minha inocência.",
            efeitos: {
                coragem: 1,
                honra: 1
            }
        },

        {
            texto: "Procuro provas.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Espero a verdade aparecer.",
            efeitos: {
                paciencia: 2
            }
        },

        {
            texto: "Uso influência para escapar.",
            efeitos: {
                carisma: 2
            }
        },

        {
            texto: "Faço quem me acusou se arrepender.",
            efeitos: {
                vinganca: 2
            }
        }
    ]
},
{
    pergunta: "Qual destas pessoas seria mais interessante?",

    respostas: [

        {
            texto: "Um herói.",
            efeitos: {
                bondade: 2
            }
        },

        {
            texto: "Um explorador.",
            efeitos: {
                liberdade: 2
            }
        },

        {
            texto: "Um cientista.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Um líder.",
            efeitos: {
                carisma: 2
            }
        },

        {
            texto: "Um conquistador.",
            efeitos: {
                ambicao: 2
            }
        }
    ]
},
{
    pergunta: "Quando você entra em um lugar novo, normalmente:",

    respostas: [

        {
            texto: "Cumprimento todo mundo.",
            efeitos: {
                carisma: 1,
                bondade: 1
            }
        },

        {
            texto: "Observo primeiro.",
            efeitos: {
                inteligencia: 1,
                paciencia: 1
            }
        },

        {
            texto: "Vou direto ao que quero fazer.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "Procuro algo interessante.",
            efeitos: {
                criatividade: 2
            }
        },

        {
            texto: "Analiso quem pode ser útil.",
            efeitos: {
                manipulacao: 2
            }
        }
    ]
},
{
    pergunta: "Você encontra uma máscara de pedra.",

    respostas: [

        {
            texto: "Destruo imediatamente.",
            efeitos: {
                justica: 2
            }
        },

        {
            texto: "Entrego para especialistas.",
            efeitos: {
                ordem: 2
            }
        },

        {
            texto: "Estudo ela.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Guardo para emergências.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Uso em mim.",
            efeitos: {
                ego: 2,
                coragem: 1
            }
        }
    ]
},
{
    pergunta: "Você ganha uma corrida impossível de vencer.",

    respostas: [

        {
            texto: "Agradeço quem me ajudou.",
            efeitos: {
                    ego: -2,
                    altruismo: 1
            }
        },

        {
            texto: "Comemoro com amigos.",
            efeitos: {
                lealdade: 2
            }
        },

        {
            texto: "Analiso como consegui.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Penso no próximo desafio.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "Mostro para todos quem é o melhor.",
            efeitos: {
                ego: 2
            }
        }
    ]
},
{
    pergunta: "Você recebe a chance de realizar um sonho, mas terá que abandonar algo importante.",

    respostas: [

        {
            texto: "Recuso a oportunidade.",
            efeitos: {
                lealdade: 2,
                sacrificio: 1
            }
        },

        {
            texto: "Aceito sem hesitar.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Analiso todas as consequências.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Procuro uma terceira opção.",
            efeitos: {
                criatividade: 2
            }
        },

        {
            texto: "Depende do tamanho do sonho.",
            efeitos: {
                paciencia: 1,
                ambicao: 1
            }
        }
    ]
},
{
    pergunta: "O que mais te motiva a continuar?",

    respostas: [

        {
            texto: "As pessoas que amo.",
            efeitos: {
                lealdade: 2,
                empatia: 1
            }
        },

        {
            texto: "Meus objetivos.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Minha curiosidade.",
            efeitos: {
                criatividade: 2
            }
        },

        {
            texto: "Meu dever.",
            efeitos: {
                honra: 2
            }
        },

        {
            texto: "O desafio em si.",
            efeitos: {
                determinacao: 2
            }
        }
    ]
},
{
    pergunta: "Você descobre algo que pode mudar o mundo.",

    respostas: [

        {
            texto: "Divulgo para todos.",
            efeitos: {
                altruismo: 2
            }
        },

        {
            texto: "Estudo melhor antes.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Uso para ajudar quem está próximo.",
            efeitos: {
                bondade: 2
            }
        },

        {
            texto: "Uso para alcançar meus objetivos.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Guardo em segredo.",
            efeitos: {
                manipulacao: 2
            }
        }
    ]
},
{
    pergunta: "Qual defeito você tolera mais facilmente?",

    respostas: [

        {
            texto: "Impulsividade.",
            efeitos: {
                impulsividade: 1
            }
        },

        {
            texto: "Orgulho.",
            efeitos: {
                ego: 1
            }
        },

        {
            texto: "Frieza.",
            efeitos: {
                inteligencia: 1
            }
        },

        {
            texto: "Obstinação.",
            efeitos: {
                determinacao: 1
            }
        },

        {
            texto: "Ambição excessiva.",
            efeitos: {
                ambicao: 1
            }
        }
    ]
},
{
    pergunta: "Você pode apagar um único evento da história.",

    respostas: [

        {
            texto: "Uma tragédia.",
            efeitos: {
                bondade: 2,
                empatia: 1
            }
        },

        {
            texto: "Um erro meu.",
            efeitos: {
                vinganca: -1,
                paciencia: 1
            }
        },

        {
            texto: "Nada. O passado deve permanecer.",
            efeitos: {
                ordem: 2
            }
        },

        {
            texto: "Algo que me impediria de alcançar meus objetivos.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Algo que me daria vantagem hoje.",
            efeitos: {
                manipulacao: 2
            }
        }
    ]
},
{
    pergunta: "Qual dessas qualidades você gostaria de ter mais?",

    respostas: [

        {
            texto: "Coragem.",
            efeitos: { coragem: 2 }
        },

        {
            texto: "Paciência.",
            efeitos: { paciencia: 2 }
        },

        {
            texto: "Inteligência.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Carisma.",
            efeitos: { carisma: 2 }
        },

        {
            texto: "Determinação.",
            efeitos: { determinacao: 2 }
        }
    ]
},
{
    pergunta: "Quando algo dá errado:",

    respostas: [

        {
            texto: "Tento novamente.",
            efeitos: { determinacao: 2 }
        },

        {
            texto: "Mudo de estratégia.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Analiso o erro.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Peço ajuda.",
            efeitos: { empatia: 1, lealdade: 1 }
        },

        {
            texto: "Procuro outro caminho.",
            efeitos: { liberdade: 2 }
        }
    ]
},
{
    pergunta: "Você recebe uma fortuna enorme.",

    respostas: [

        {
            texto: "Ajudo pessoas.",
            efeitos: { altruismo: 2 }
        },

        {
            texto: "Invisto no futuro.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Realizo meus sonhos.",
            efeitos: { ambicao: 2 }
        },

        {
            texto: "Guardo para emergências.",
            efeitos: { paciencia: 2 }
        },

        {
            texto: "Quero mais ainda.",
            efeitos: { ego: 1, ambicao: 1 }
        }
    ]
},
{
    pergunta: "Qual destas coisas mais te irrita?",

    respostas: [

        {
            texto: "Injustiça.",
            efeitos: { justica: 2 }
        },

        {
            texto: "Traição.",
            efeitos: { lealdade: 2 }
        },

        {
            texto: "Ignorância.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Fraqueza.",
            efeitos: { ego: 1, determinacao: 1 }
        },

        {
            texto: "Perder liberdade.",
            efeitos: { liberdade: 2 }
        }
    ]
},
{
    pergunta: "Você encontra um mistério impossível.",

    respostas: [

        {
            texto: "Investigo imediatamente.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Crio teorias malucas.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Chamo outras pessoas.",
            efeitos: { lealdade: 1, empatia: 1 }
        },

        {
            texto: "Ignoro.",
            efeitos: { paciencia: 1 }
        },

        {
            texto: "Uso a informação.",
            efeitos: { manipulacao: 2 }
        }
    ]
},
{
    pergunta: "Qual destes papéis combina mais com você?",

    respostas: [

        {
            texto: "Herói.",
            efeitos: { bondade: 2 }
        },

        {
            texto: "Líder.",
            efeitos: { carisma: 2 }
        },

        {
            texto: "Estrategista.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Explorador.",
            efeitos: { liberdade: 2 }
        },

        {
            texto: "Conquistador.",
            efeitos: { ambicao: 2 }
        }
    ]
},
{
    pergunta: "Você pode vencer facilmente um inimigo.",

    respostas: [

        {
            texto: "Dou uma chance para ele.",
            efeitos: { bondade: 2 }
        },

        {
            texto: "Acabo logo com isso.",
            efeitos: { determinacao: 2 }
        },

        {
            texto: "Uso ele para conseguir informações.",
            efeitos: { manipulacao: 2 }
        },

        {
            texto: "Faço justiça.",
            efeitos: { justica: 2 }
        },

        {
            texto: "Depende do que ele fez.",
            efeitos: { inteligencia: 1, paciencia: 1 }
        }
    ]
},
{
    pergunta: "Qual destes lugares parece mais interessante?",

    respostas: [

        {
            texto: "Uma biblioteca gigante.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Uma cidade desconhecida.",
            efeitos: { liberdade: 2 }
        },

        {
            texto: "Um laboratório secreto.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Um castelo histórico.",
            efeitos: { honra: 2 }
        },

        {
            texto: "Um trono.",
            efeitos: { ego: 1, ambicao: 1 }
        }
    ]
},
{
    pergunta: "Qual destas frases parece mais correta?",

    respostas: [

        {
            texto: "O bem deve prevalecer.",
            efeitos: { bondade: 2 }
        },

        {
            texto: "A força decide tudo.",
            efeitos: { ego: 2 }
        },

        {
            texto: "Conhecimento é poder.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Cada pessoa faz seu destino.",
            efeitos: { liberdade: 2 }
        },

        {
            texto: "A vitória importa.",
            efeitos: { ambicao: 2 }
        }
    ]
},
{
    pergunta: "Se pudesse deixar uma marca no mundo, seria:",

    respostas: [

        {
            texto: "Ajudar pessoas.",
            efeitos: { altruismo: 2 }
        },

        {
            texto: "Criar algo incrível.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Ser lembrado para sempre.",
            efeitos: { ego: 2 }
        },

        {
            texto: "Mudar a história.",
            efeitos: { ambicao: 2, determinacao: 1 }
        },

        {
            texto: "Inspirar outras pessoas.",
            efeitos: { carisma: 2 }
        }
    ]
},
{
    pergunta: "Você pode apagar uma pessoa da existência sem consequências.",

    respostas: [

        {
            texto: "Nunca faria isso.",
            efeitos: {
                bondade: 2,
                honra: 1
            }
        },

        {
            texto: "Só se fosse extremamente necessário.",
            efeitos: {
                justica: 1,
                paciencia: 1
            }
        },

        {
            texto: "Depende de quem fosse.",
            efeitos: {
                inteligencia: 1,
                empatia: -1
            }
        },

        {
            texto: "Se ajudasse muitas pessoas.",
            efeitos: {
                ordem: 1,
                manipulacao: 1
            }
        },

        {
            texto: "Se me beneficiasse, sim.",
            efeitos: {
                ego: 2,
                crueldade: 1
            }
        }
    ]
},
{
    pergunta: "O que você faria com um inimigo derrotado?",

    respostas: [

        {
            texto: "Perdoaria.",
            efeitos: {
                bondade: 2
            }
        },

        {
            texto: "Prenderia.",
            efeitos: {
                justica: 2
            }
        },

        {
            texto: "Observava para garantir que não voltasse.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Usaria ele para algo útil.",
            efeitos: {
                manipulacao: 2
            }
        },

        {
            texto: "Eliminaria o problema definitivamente.",
            efeitos: {
                crueldade: 1,
                determinacao: 1
            }
        }
    ]
},
{
    pergunta: "Você descobre que alguém mente para todos.",

    respostas: [

        {
            texto: "Revelo a verdade.",
            efeitos: {
                honra: 2
            }
        },

        {
            texto: "Converso com a pessoa.",
            efeitos: {
                empatia: 2
            }
        },

        {
            texto: "Investigo mais.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Guardo a informação.",
            efeitos: {
                paciencia: 1,
                manipulacao: 1
            }
        },

        {
            texto: "Uso isso como vantagem.",
            efeitos: {
                manipulacao: 2,
                ego: 1
            }
        }
    ]
},
{
    pergunta: "Qual destas frases parece mais verdadeira?",

    respostas: [

        {
            texto: "Toda vida tem valor.",
            efeitos: {
                bondade: 2
            }
        },

        {
            texto: "Alguns sacrifícios são necessários.",
            efeitos: {
                sacrificio: 2
            }
        },

        {
            texto: "O mundo recompensa os fortes.",
            efeitos: {
                determinacao: 1,
                ego: 1
            }
        },

        {
            texto: "A ordem deve ser mantida.",
            efeitos: {
                ordem: 2
            }
        },

        {
            texto: "Quem vence escreve a história.",
            efeitos: {
                ambicao: 1,
                manipulacao: 1
            }
        }
    ]
},
{
    pergunta: "Você encontra uma oportunidade única.",

    respostas: [

        {
            texto: "Divido com outras pessoas.",
            efeitos: {
                altruismo: 2
            }
        },

        {
            texto: "Penso bastante antes.",
            efeitos: {
                paciencia: 2
            }
        },

        {
            texto: "Aproveito imediatamente.",
            efeitos: {
                impulsividade: 2
            }
        },

        {
            texto: "Uso para crescer.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Uso para ficar acima dos outros.",
            efeitos: {
                ego: 2,
                crueldade: 1
            }
        }
    ]
},
{
    pergunta: "Você pode alcançar seu objetivo, mas alguém inocente será prejudicado.",

    respostas: [

        {
            texto: "Desisto do objetivo.",
            efeitos: { bondade: 2, altruismo: 1 }
        },

        {
            texto: "Procuro outra solução.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Analiso se vale o custo.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Aceito se o objetivo for importante.",
            efeitos: { sacrificio: 2 }
        },

        {
            texto: "Aceito sem problemas.",
            efeitos: { crueldade: 2, ego: 1 }
        }
    ]
},
{
    pergunta: "Qual dessas coisas parece mais valiosa?",

    respostas: [

        {
            texto: "Felicidade.",
            efeitos: { bondade: 2 }
        },

        {
            texto: "Liberdade.",
            efeitos: { liberdade: 2 }
        },

        {
            texto: "Conhecimento.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Poder.",
            efeitos: { ambicao: 2 }
        },

        {
            texto: "Controle.",
            efeitos: { manipulacao: 2, ordem: 1 }
        }
    ]
},
{
    pergunta: "Você descobre que está destinado ao fracasso.",

    respostas: [

        {
            texto: "Aceito.",
            efeitos: { paciencia: 2 }
        },

        {
            texto: "Tento mudar meu destino.",
            efeitos: { determinacao: 2 }
        },

        {
            texto: "Procuro entender o motivo.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Uso isso a meu favor.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Recuso completamente essa ideia.",
            efeitos: { liberdade: 2 }
        }
    ]
},
{
    pergunta: "O que mais pode corromper uma pessoa?",

    respostas: [

        {
            texto: "Ganância.",
            efeitos: { justica: 2 }
        },

        {
            texto: "Medo.",
            efeitos: { coragem: 2 }
        },

        {
            texto: "Poder.",
            efeitos: { inteligencia: 1, ambicao: 1 }
        },

        {
            texto: "Solidão.",
            efeitos: { empatia: 2 }
        },

        {
            texto: "Obsessão.",
            efeitos: { determinacao: 1, ego: 1 }
        }
    ]
},
{
    pergunta: "Você recebe autoridade absoluta por um dia.",

    respostas: [

        {
            texto: "Ajudo quem precisa.",
            efeitos: { altruismo: 2 }
        },

        {
            texto: "Melhoro as regras.",
            efeitos: { ordem: 2 }
        },

        {
            texto: "Faço experimentos.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Realizo meus planos.",
            efeitos: { ambicao: 2 }
        },

        {
            texto: "Mostro quem manda.",
            efeitos: { ego: 2, carisma: 1 }
        }
    ]
},
{
    pergunta: "Qual dessas vitórias parece mais impressionante?",

    respostas: [

        {
            texto: "Salvar alguém.",
            efeitos: { bondade: 2 }
        },

        {
            texto: "Superar seus limites.",
            efeitos: { determinacao: 2 }
        },

        {
            texto: "Vencer alguém mais forte.",
            efeitos: { coragem: 2 }
        },

        {
            texto: "Executar um plano perfeito.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Dominar seus inimigos.",
            efeitos: { ambicao: 1, manipulacao: 1 }
        }
    ]
},
{
    pergunta: "Você pode apagar uma emoção para sempre.",

    respostas: [

        {
            texto: "Ódio.",
            efeitos: { bondade: 2 }
        },

        {
            texto: "Medo.",
            efeitos: { coragem: 2 }
        },

        {
            texto: "Tristeza.",
            efeitos: { empatia: 1, paciencia: 1 }
        },

        {
            texto: "Arrependimento.",
            efeitos: { determinacao: 2 }
        },

        {
            texto: "Nenhuma.",
            efeitos: { inteligencia: 2 }
        }
    ]
},
{
    pergunta: "O que faz alguém merecer confiança?",

    respostas: [

        {
            texto: "Honestidade.",
            efeitos: { honra: 2 }
        },

        {
            texto: "Lealdade.",
            efeitos: { lealdade: 2 }
        },

        {
            texto: "Competência.",
            efeitos: { inteligencia: 2 }
        },

        {
            texto: "Resultados.",
            efeitos: { ambicao: 2 }
        },

        {
            texto: "Influência.",
            efeitos: { carisma: 1, manipulacao: 1 }
        }
    ]
},
{
    pergunta: "Você pode mudar uma regra do mundo.",

    respostas: [

        {
            texto: "Eliminar injustiças.",
            efeitos: { justica: 2 }
        },

        {
            texto: "Dar mais liberdade às pessoas.",
            efeitos: { liberdade: 2 }
        },

        {
            texto: "Acelerar o progresso.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Criar mais ordem.",
            efeitos: { ordem: 2 }
        },

        {
            texto: "Beneficiar meus objetivos.",
            efeitos: { ego: 1, ambicao: 1 }
        }
    ]
},
{
    pergunta: "O que você faria para alcançar seu sonho?",

    respostas: [

        {
            texto: "Tudo, exceto prejudicar alguém.",
            efeitos: { honra: 2 }
        },

        {
            texto: "Persistiria por anos se necessário.",
            efeitos: { determinacao: 2 }
        },

        {
            texto: "Mudaria meus métodos quando preciso.",
            efeitos: { criatividade: 2 }
        },

        {
            texto: "Faria sacrifícios difíceis.",
            efeitos: { sacrificio: 2 }
        },

        {
            texto: "Qualquer coisa.",
            efeitos: { ambicao: 2, crueldade: 1 }
        }
    ]
},
{
    pergunta: "Você prefere viver em qual cenário?",

    respostas: [

        {
            texto: "Uma vida simples e tranquila.",
            efeitos: {
                paciencia: 2,
                liberdade: 1,
                ambicao: -1
            }
        },

        {
            texto: "Uma vida cheia de aventuras.",
            efeitos: {
                coragem: 2,
                liberdade: 1
            }
        },

        {
            texto: "Uma vida dedicada ao conhecimento.",
            efeitos: {
                inteligencia: 2,
                paciencia: 1
            }
        },

        {
            texto: "Uma vida mudando o mundo.",
            efeitos: {
                determinacao: 2,
                ambicao: 1
            }
        },

        {
            texto: "Uma vida no topo.",
            efeitos: {
                ego: 2,
                ambicao: 2
            }
        }
    ]
},
{
    pergunta: "O que você faria com uma verdade perigosa?",

    respostas: [

        {
            texto: "Contaria para todos.",
            efeitos: {
                honra: 2,
                coragem: 1
            }
        },

        {
            texto: "Contaria apenas para pessoas próximas.",
            efeitos: {
                lealdade: 2
            }
        },

        {
            texto: "Investigaria mais.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Esperaria o momento certo.",
            efeitos: {
                paciencia: 2,
                manipulacao: 1
            }
        },

        {
            texto: "Esconderia para meu benefício.",
            efeitos: {
                manipulacao: 2,
                ego: 1
            }
        }
    ]
},
{
    pergunta: "Qual destas falhas você considera mais aceitável?",

    respostas: [

        {
            texto: "Ser inocente demais.",
            efeitos: {
                bondade: 2
            }
        },

        {
            texto: "Ser teimoso.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "Ser frio.",
            efeitos: {
                inteligencia: 2,
                empatia: -1
            }
        },

        {
            texto: "Ser ambicioso.",
            efeitos: {
                ambicao: 2
            }
        },

        {
            texto: "Ser manipulador.",
            efeitos: {
                manipulacao: 2
            }
        }
    ]
},
{
    pergunta: "Qual dessas frases parece mais correta?",

    respostas: [

        {
            texto: "As pessoas podem mudar.",
            efeitos: {
                bondade: 2,
                empatia: 1
            }
        },

        {
            texto: "As pessoas revelam quem realmente são.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "O destino guia todos nós.",
            efeitos: {
                ordem: 2
            }
        },

        {
            texto: "O mundo pertence aos que agem.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "A maioria das pessoas é previsível.",
            efeitos: {
                manipulacao: 2,
                paciencia: 1
            }
        }
    ]
},
{
    pergunta: "O que mais te atrai em um personagem?",

    respostas: [

        {
            texto: "Bondade.",
            efeitos: {
                bondade: 2
            }
        },

        {
            texto: "Persistência.",
            efeitos: {
                determinacao: 2
            }
        },

        {
            texto: "Inteligência.",
            efeitos: {
                inteligencia: 2
            }
        },

        {
            texto: "Carisma.",
            efeitos: {
                carisma: 2
            }
        },

        {
            texto: "Complexidade.",
            efeitos: {
                criatividade: 1,
                inteligencia: 1
            }
        }
    ]
},
{
    pergunta: "Você recebe uma oportunidade única de liderar milhares de pessoas.",

    respostas: [

        {
            texto: "Aceito para ajudá-las.",
            efeitos: {
                altruismo: 2,
                ego: -1
            }
        },

        {
            texto: "Aceito porque seria um desafio.",
            efeitos: {
                determinacao: 2,
                paciencia: -1
            }
        },

        {
            texto: "Aceito para implementar minhas ideias.",
            efeitos: {
                criatividade: 2,
                ordem: -1
            }
        },

        {
            texto: "Aceito para mudar o mundo.",
            efeitos: {
                ambicao: 2,
                liberdade: -1
            }
        },

        {
            texto: "Aceito porque gosto de poder.",
            efeitos: {
                ego: 2,
                empatia: -1
            }
        }
    ]
},
{
    pergunta: "O que mais atrapalha uma pessoa?",

    respostas: [

        {
            texto: "Egoísmo.",
            efeitos: {
                bondade: 2,
                ego: -1
            }
        },

        {
            texto: "Medo.",
            efeitos: {
                coragem: 2,
                paciencia: -1
            }
        },

        {
            texto: "Ignorância.",
            efeitos: {
                inteligencia: 2,
                empatia: -1
            }
        },

        {
            texto: "Indecisão.",
            efeitos: {
                determinacao: 2,
                paciencia: -1
            }
        },

        {
            texto: "Fraqueza.",
            efeitos: {
                ambicao: 2,
                bondade: -1
            }
        }
    ]
},
{
    pergunta: "Qual dessas coisas você mais inveja?",

    respostas: [

        {
            texto: "A felicidade de alguém.",
            efeitos: {
                empatia: 2,
                ego: -1
            }
        },

        {
            texto: "A liberdade de alguém.",
            efeitos: {
                liberdade: 2,
                ordem: -1
            }
        },

        {
            texto: "A inteligência de alguém.",
            efeitos: {
                inteligencia: 2,
                carisma: -1
            }
        },

        {
            texto: "O sucesso de alguém.",
            efeitos: {
                ambicao: 2,
                altruismo: -1
            }
        },

        {
            texto: "O poder de alguém.",
            efeitos: {
                ego: 2,
                bondade: -1
            }
        }
    ]
},
{
    pergunta: "Qual destas vitórias vale mais?",

    respostas: [

        {
            texto: "Salvar uma vida.",
            efeitos: {
                bondade: 2,
                ambicao: -1
            }
        },

        {
            texto: "Superar seus limites.",
            efeitos: {
                determinacao: 2,
                paciencia: -1
            }
        },

        {
            texto: "Resolver algo impossível.",
            efeitos: {
                inteligencia: 2,
                impulsividade: -1
            }
        },

        {
            texto: "Realizar seu sonho.",
            efeitos: {
                ambicao: 2,
                altruismo: -1
            }
        },

        {
            texto: "Vencer um rival.",
            efeitos: {
                vinganca: 2,
                empatia: -1
            }
        }
    ]
},
{
    pergunta: "Você pode apagar uma memória sua.",

    respostas: [

        {
            texto: "Uma memória triste.",
            efeitos: {
                paciencia: 2,
                vinganca: -1
            }
        },

        {
            texto: "Uma memória vergonhosa.",
            efeitos: {
                ego: 2,
                honra: -1
            }
        },

        {
            texto: "Uma memória inútil.",
            efeitos: {
                inteligencia: 2,
                empatia: -1
            }
        },

        {
            texto: "Nenhuma.",
            efeitos: {
                honra: 2,
                paciencia: 1
            }
        },

        {
            texto: "Uma memória que me impede de avançar.",
            efeitos: {
                determinacao: 2,
                empatia: -1
            }
        }
    ]
},
{
    pergunta: "O que você mais valoriza em si mesmo?",

    respostas: [

        {
            texto: "Meu coração.",
            efeitos: {
                bondade: 2,
                inteligencia: -1
            }
        },

        {
            texto: "Minha coragem.",
            efeitos: {
                coragem: 2,
                paciencia: -1
            }
        },

        {
            texto: "Minha mente.",
            efeitos: {
                inteligencia: 2,
                empatia: -1
            }
        },

        {
            texto: "Minha persistência.",
            efeitos: {
                determinacao: 2,
                impulsividade: -1
            }
        },

        {
            texto: "Minha ambição.",
            efeitos: {
                ambicao: 2,
                altruismo: -1
            }
        }
    ]
},
{
    pergunta: "Qual dessas pessoas tem mais chance de mudar o mundo?",

    respostas: [

        {
            texto: "Uma pessoa bondosa.",
            efeitos: {
                bondade: 2,
                crueldade: -1
            }
        },

        {
            texto: "Uma pessoa determinada.",
            efeitos: {
                determinacao: 2,
                paciencia: -1
            }
        },

        {
            texto: "Um gênio.",
            efeitos: {
                inteligencia: 2,
                empatia: -1
            }
        },

        {
            texto: "Um líder.",
            efeitos: {
                carisma: 2,
                liberdade: -1
            }
        },

        {
            texto: "Alguém disposto a tudo.",
            efeitos: {
                ambicao: 2,
                bondade: -1
            }
        }
    ]
},
{
    pergunta: "Você descobre que um amigo te traiu.",

    respostas: [

        {
            texto: "Perdoo.",
            efeitos: {
                bondade: 2,
                vinganca: -2
            }
        },

        {
            texto: "Converso com ele.",
            efeitos: {
                empatia: 2,
                ego: -1
            }
        },

        {
            texto: "Me afasto.",
            efeitos: {
                liberdade: 2,
                lealdade: -1
            }
        },

        {
            texto: "Nunca esqueço.",
            efeitos: {
                vinganca: 2,
                paciencia: -1
            }
        },

        {
            texto: "Faço ele se arrepender.",
            efeitos: {
                vinganca: 2,
                crueldade: 1
            }
        }
    ]
},
{
    pergunta: "O que é mais importante para um líder?",

    respostas: [

        {
            texto: "Proteger os outros.",
            efeitos: {
                altruismo: 2,
                ego: -1
            }
        },

        {
            texto: "Inspirar pessoas.",
            efeitos: {
                carisma: 2,
                manipulacao: -1
            }
        },

        {
            texto: "Tomar decisões corretas.",
            efeitos: {
                inteligencia: 2,
                impulsividade: -1
            }
        },

        {
            texto: "Nunca desistir.",
            efeitos: {
                determinacao: 2,
                paciencia: -1
            }
        },

        {
            texto: "Ter controle.",
            efeitos: {
                manipulacao: 2,
                empatia: -1
            }
        }
    ]
},
{
    pergunta: "Qual dessas frases parece mais verdadeira?",

    respostas: [

        {
            texto: "A felicidade importa mais.",
            efeitos: {
                bondade: 2,
                ambicao: -1
            }
        },

        {
            texto: "A liberdade importa mais.",
            efeitos: {
                liberdade: 2,
                ordem: -1
            }
        },

        {
            texto: "A verdade importa mais.",
            efeitos: {
                inteligencia: 2,
                empatia: -1
            }
        },

        {
            texto: "Os resultados importam mais.",
            efeitos: {
                ambicao: 2,
                altruismo: -1
            }
        },

        {
            texto: "O controle importa mais.",
            efeitos: {
                manipulacao: 2,
                bondade: -1
            }
        }
    ]
},

];