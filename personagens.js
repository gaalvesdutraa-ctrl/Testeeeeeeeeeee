const atributos = [
    "bondade",
    "justica",
    "crueldade",
    "empatia",
    "honra",
    "lealdade",

    "inteligencia",
    "criatividade",
    "coragem",
    "determinacao",
    "manipulacao",

    "ego",
    "impulsividade",
    "paciencia",
    "carisma",

    "liberdade",
    "ordem",
    "ambicao",
    "altruismo",

    "vinganca",
    "sacrificio"
];



const personagens = [


//////////////////
// PARTE 1
//////////////////
{ 
    nome: "Jonathan Joestar",

    bondade: 10,
    justica: 10,
    crueldade: 0,
    empatia: 9,
    honra: 10,
    lealdade: 10,

    inteligencia: 6,
    criatividade: 5,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 1,
    impulsividade: 3,
    paciencia: 7,
    carisma: 8,

    liberdade: 7,
    ordem: 6,
    ambicao: 2,
    altruismo: 10,

    vinganca: 2,
    sacrificio: 10,
},
{
    nome: "Robert E. O. Speedwagon",

    bondade: 9,
    justica: 8,
    crueldade: 2,
    empatia: 8,
    honra: 8,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 6,
    coragem: 8,
    determinacao: 9,
    manipulacao: 2,

    ego: 2,
    impulsividade: 5,
    paciencia: 7,
    carisma: 8,

    liberdade: 7,
    ordem: 5,
    ambicao: 4,
    altruismo: 9,

    vinganca: 4,
    sacrificio: 9,
}
,
{
    nome: "Will A. Zeppeli",

    bondade: 9,
    justica: 8,
    crueldade: 1,
    empatia: 8,
    honra: 10,
    lealdade: 8,

    inteligencia: 8,
    criatividade: 7,
    coragem: 9,
    determinacao: 10,
    manipulacao: 1,

    ego: 3,
    impulsividade: 3,
    paciencia: 9,
    carisma: 8,

    liberdade: 6,
    ordem: 8,
    ambicao: 4,
    altruismo: 10,

    vinganca: 2,
    sacrificio: 10
}
,
{
    nome: "Erina Pendleton",

    bondade: 10,
    justica: 8,
    crueldade: 0,
    empatia: 10,
    honra: 9,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 5,
    coragem: 8,
    determinacao: 10,
    manipulacao: 0,

    ego: 1,
    impulsividade: 1,
    paciencia: 10,
    carisma: 8,

    liberdade: 5,
    ordem: 7,
    ambicao: 1,
    altruismo: 10,

    vinganca: 0,
    sacrificio: 10
}
,
{
    nome: "Poco",

    bondade: 8,
    justica: 7,
    crueldade: 0,
    empatia: 8,
    honra: 6,
    lealdade: 8,

    inteligencia: 5,
    criatividade: 5,
    coragem: 7,
    determinacao: 8,
    manipulacao: 0,

    ego: 2,
    impulsividade: 6,
    paciencia: 4,
    carisma: 5,

    liberdade: 8,
    ordem: 2,
    ambicao: 2,
    altruismo: 8,

    vinganca: 0,
    sacrificio: 7
}
,
{
    nome: "Dire",

    bondade: 8,
    justica: 8,
    crueldade: 1,
    empatia: 6,
    honra: 9,
    lealdade: 8,

    inteligencia: 6,
    criatividade: 5,
    coragem: 10,
    determinacao: 9,
    manipulacao: 0,

    ego: 6,
    impulsividade: 6,
    paciencia: 5,
    carisma: 5,

    liberdade: 5,
    ordem: 7,
    ambicao: 4,
    altruismo: 8,

    vinganca: 1,
    sacrificio: 10
}
,
{
    nome: "Straizo (Parte 1)",

    bondade: 7,
    justica: 7,
    crueldade: 2,
    empatia: 5,
    honra: 8,
    lealdade: 8,

    inteligencia: 8,
    criatividade: 6,
    coragem: 8,
    determinacao: 8,
    manipulacao: 3,

    ego: 5,
    impulsividade: 3,
    paciencia: 8,
    carisma: 7,

    liberdade: 5,
    ordem: 8,
    ambicao: 4,
    altruismo: 7,

    vinganca: 1,
    sacrificio: 8
}
,
{
    nome: "Bruford",

    bondade: 6,
    justica: 4,
    crueldade: 5,
    empatia: 4,
    honra: 10,
    lealdade: 9,

    inteligencia: 6,
    criatividade: 4,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 6,
    impulsividade: 4,
    paciencia: 7,
    carisma: 7,

    liberdade: 2,
    ordem: 8,
    ambicao: 3,
    altruismo: 4,

    vinganca: 2,
    sacrificio: 8
}
,
{
    nome: "Tarkus",

    bondade: 1,
    justica: 0,
    crueldade: 9,
    empatia: 0,
    honra: 7,
    lealdade: 8,

    inteligencia: 3,
    criatividade: 2,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 7,
    impulsividade: 7,
    paciencia: 3,
    carisma: 4,

    liberdade: 2,
    ordem: 8,
    ambicao: 4,
    altruismo: 0,

    vinganca: 6,
    sacrificio: 4
}
,
{
    nome: "George Joestar I",

    bondade: 9,
    justica: 8,
    crueldade: 0,
    empatia: 8,
    honra: 8,
    lealdade: 10,

    inteligencia: 6,
    criatividade: 4,
    coragem: 6,
    determinacao: 7,
    manipulacao: 0,

    ego: 2,
    impulsividade: 2,
    paciencia: 8,
    carisma: 7,

    liberdade: 5,
    ordem: 8,
    ambicao: 3,
    altruismo: 9,

    vinganca: 0,
    sacrificio: 8
}
,
{
    nome: "Wang Chan",

    bondade: 0,
    justica: 0,
    crueldade: 8,
    empatia: 0,
    honra: 1,
    lealdade: 9,

    inteligencia: 6,
    criatividade: 4,
    coragem: 5,
    determinacao: 8,
    manipulacao: 4,

    ego: 4,
    impulsividade: 4,
    paciencia: 7,
    carisma: 3,

    liberdade: 2,
    ordem: 8,
    ambicao: 4,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 7
}
,
{
    nome: "Tonpetty",

    bondade: 9,
    justica: 8,
    crueldade: 0,
    empatia: 8,
    honra: 9,
    lealdade: 8,

    inteligencia: 8,
    criatividade: 7,
    coragem: 8,
    determinacao: 8,
    manipulacao: 0,

    ego: 1,
    impulsividade: 1,
    paciencia: 10,
    carisma: 7,

    liberdade: 5,
    ordem: 8,
    ambicao: 1,
    altruismo: 9,

    vinganca: 0,
    sacrificio: 8
}
,
{
    nome: "Doobie",

    bondade: 0,
    justica: 0,
    crueldade: 8,
    empatia: 0,
    honra: 1,
    lealdade: 8,

    inteligencia: 4,
    criatividade: 6,
    coragem: 6,
    determinacao: 7,
    manipulacao: 2,

    ego: 4,
    impulsividade: 6,
    paciencia: 4,
    carisma: 2,

    liberdade: 2,
    ordem: 7,
    ambicao: 3,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 3
}
,
{
    nome: "Jack the Ripper",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 0,

    inteligencia: 5,
    criatividade: 4,
    coragem: 7,
    determinacao: 7,
    manipulacao: 2,

    ego: 5,
    impulsividade: 9,
    paciencia: 1,
    carisma: 2,

    liberdade: 8,
    ordem: 0,
    ambicao: 3,
    altruismo: 0,

    vinganca: 2,
    sacrificio: 0
}
,
{
    nome: "Dio Brando (Parte 1)",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 2,

    inteligencia: 9,
    criatividade: 8,
    coragem: 8,
    determinacao: 10,
    manipulacao: 10,

    ego: 10,
    impulsividade: 3,
    paciencia: 8,
    carisma: 9,

    liberdade: 4,
    ordem: 6,
    ambicao: 10,
    altruismo: 0,

    vinganca: 8,
    sacrificio: 1
}
,
//////////////////
// PARTE 2
//////////////////

{
    nome: "Lisa Lisa",

    bondade: 8,
    justica: 8,
    crueldade: 2,
    empatia: 7,
    honra: 9,
    lealdade: 8,

    inteligencia: 9,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 4,

    ego: 5,
    impulsividade: 2,
    paciencia: 10,
    carisma: 9,

    liberdade: 6,
    ordem: 8,
    ambicao: 4,
    altruismo: 8,

    vinganca: 2,
    sacrificio: 8
}
,
{
    nome: "Smokey Brown",

    bondade: 9,
    justica: 7,
    crueldade: 0,
    empatia: 9,
    honra: 7,
    lealdade: 9,

    inteligencia: 6,
    criatividade: 5,
    coragem: 7,
    determinacao: 8,
    manipulacao: 1,

    ego: 2,
    impulsividade: 5,
    paciencia: 5,
    carisma: 7,

    liberdade: 8,
    ordem: 3,
    ambicao: 6,
    altruismo: 9,

    vinganca: 1,
    sacrificio: 7
}
,
{
    nome: "Rudol von Stroheim",

    bondade: 5,
    justica: 7,
    crueldade: 8,
    empatia: 3,
    honra: 8,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 7,
    coragem: 10,
    determinacao: 10,
    manipulacao: 3,

    ego: 8,
    impulsividade: 6,
    paciencia: 6,
    carisma: 8,

    liberdade: 2,
    ordem: 10,
    ambicao: 6,
    altruismo: 5,

    vinganca: 2,
    sacrificio: 10
},
{
    nome: "Santana",

    bondade: 0,
    justica: 0,
    crueldade: 9,
    empatia: 0,
    honra: 1,
    lealdade: 0,

    inteligencia: 5,
    criatividade: 4,
    coragem: 9,
    determinacao: 8,
    manipulacao: 0,

    ego: 2,
    impulsividade: 9,
    paciencia: 1,
    carisma: 0,

    liberdade: 8,
    ordem: 0,
    ambicao: 3,
    altruismo: 0,

    vinganca: 0,
    sacrificio: 0
},
{
    nome: "Esidisi",

    bondade: 0,
    justica: 0,
    crueldade: 9,
    empatia: 1,
    honra: 4,
    lealdade: 8,

    inteligencia: 8,
    criatividade: 7,
    coragem: 9,
    determinacao: 9,
    manipulacao: 6,

    ego: 8,
    impulsividade: 8,
    paciencia: 4,
    carisma: 6,

    liberdade: 5,
    ordem: 7,
    ambicao: 7,
    altruismo: 0,

    vinganca: 7,
    sacrificio: 4
},
{
    nome: "Wamuu",

    bondade: 4,
    justica: 5,
    crueldade: 6,
    empatia: 4,
    honra: 10,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 7,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 6,
    impulsividade: 4,
    paciencia: 8,
    carisma: 8,

    liberdade: 5,
    ordem: 8,
    ambicao: 5,
    altruismo: 4,

    vinganca: 1,
    sacrificio: 8
},
{
    nome: "Kars",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 1,
    honra: 2,
    lealdade: 4,

    inteligencia: 10,
    criatividade: 9,
    coragem: 8,
    determinacao: 10,
    manipulacao: 9,

    ego: 10,
    impulsividade: 2,
    paciencia: 10,
    carisma: 8,

    liberdade: 9,
    ordem: 4,
    ambicao: 10,
    altruismo: 0,

    vinganca: 2,
    sacrificio: 1
}
//////////////////
// PARTE 3
//////////////////

,
{
    nome: "Dio Brando (Parte 3)",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 1,
    honra: 0,
    lealdade: 3,

    inteligencia: 10,
    criatividade: 9,
    coragem: 8,
    determinacao: 10,
    manipulacao: 10,

    ego: 10,
    impulsividade: 1,
    paciencia: 10,
    carisma: 10,

    liberdade: 5,
    ordem: 7,
    ambicao: 10,
    altruismo: 0,

    vinganca: 6,
    sacrificio: 1

},
{
    nome: "Muhammad Avdol",

    bondade: 8,
    justica: 9,
    crueldade: 2,
    empatia: 8,
    honra: 9,
    lealdade: 10,

    inteligencia: 9,
    criatividade: 7,
    coragem: 9,
    determinacao: 9,
    manipulacao: 2,

    ego: 3,
    impulsividade: 2,
    paciencia: 9,
    carisma: 8,

    liberdade: 6,
    ordem: 8,
    ambicao: 3,
    altruismo: 9,

    vinganca: 2,
    sacrificio: 9
},
{
    nome: "Iggy",

    bondade: 6,
    justica: 4,
    crueldade: 3,
    empatia: 3,
    honra: 5,
    lealdade: 8,

    inteligencia: 9,
    criatividade: 8,
    coragem: 8,
    determinacao: 8,
    manipulacao: 1,

    ego: 8,
    impulsividade: 7,
    paciencia: 5,
    carisma: 4,

    liberdade: 10,
    ordem: 0,
    ambicao: 2,
    altruismo: 6,

    vinganca: 2,
    sacrificio: 9
},
{
    nome: "Vanilla Ice",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 4,
    lealdade: 10,

    inteligencia: 6,
    criatividade: 7,
    coragem: 10,
    determinacao: 10,
    manipulacao: 1,

    ego: 3,
    impulsividade: 6,
    paciencia: 5,
    carisma: 3,

    liberdade: 0,
    ordem: 9,
    ambicao: 2,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 10
},
{
    nome: "Hol Horse",

    bondade: 4,
    justica: 2,
    crueldade: 5,
    empatia: 5,
    honra: 3,
    lealdade: 2,

    inteligencia: 8,
    criatividade: 8,
    coragem: 3,
    determinacao: 4,
    manipulacao: 8,

    ego: 8,
    impulsividade: 5,
    paciencia: 7,
    carisma: 8,

    liberdade: 10,
    ordem: 1,
    ambicao: 6,
    altruismo: 2,

    vinganca: 2,
    sacrificio: 1
},
{
    nome: "N'Doul",

    bondade: 2,
    justica: 1,
    crueldade: 8,
    empatia: 3,
    honra: 8,
    lealdade: 10,

    inteligencia: 9,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 2,

    ego: 2,
    impulsividade: 1,
    paciencia: 10,
    carisma: 3,

    liberdade: 1,
    ordem: 9,
    ambicao: 2,
    altruismo: 1,

    vinganca: 1,
    sacrificio: 9
},
{
    nome: "Joseph Joestar (Parte 3)",

    bondade: 8,
    justica: 8,
    crueldade: 2,
    empatia: 9,
    honra: 6,
    lealdade: 10,

    inteligencia: 10,
    criatividade: 9,
    coragem: 8,
    determinacao: 8,
    manipulacao: 8,

    ego: 5,
    impulsividade: 3,
    paciencia: 9,
    carisma: 9,

    liberdade: 8,
    ordem: 5,
    ambicao: 2,
    altruismo: 9,

    vinganca: 2,
    sacrificio: 8
},
{
    nome: "Jotaro Kujo (Parte 3)",

    bondade: 7,
    justica: 10,
    crueldade: 4,
    empatia: 7,
    honra: 8,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 7,
    coragem: 10,
    determinacao: 10,
    manipulacao: 2,

    ego: 5,
    impulsividade: 5,
    paciencia: 7,
    carisma: 7,

    liberdade: 8,
    ordem: 5,
    ambicao: 2,
    altruismo: 9,

    vinganca: 5,
    sacrificio: 10
},
{
    nome: "Noriaki Kakyoin",

    bondade: 8,
    justica: 8,
    crueldade: 2,
    empatia: 8,
    honra: 8,
    lealdade: 10,

    inteligencia: 9,
    criatividade: 8,
    coragem: 8,
    determinacao: 9,
    manipulacao: 4,

    ego: 3,
    impulsividade: 2,
    paciencia: 9,
    carisma: 6,

    liberdade: 6,
    ordem: 6,
    ambicao: 2,
    altruismo: 8,

    vinganca: 2,
    sacrificio: 10
},
{
    nome: "Jean Pierre Polnareff (Parte 3)",

    bondade: 8,
    justica: 8,
    crueldade: 3,
    empatia: 7,
    honra: 9,
    lealdade: 10,

    inteligencia: 6,
    criatividade: 6,
    coragem: 10,
    determinacao: 9,
    manipulacao: 1,

    ego: 6,
    impulsividade: 8,
    paciencia: 3,
    carisma: 8,

    liberdade: 8,
    ordem: 4,
    ambicao: 4,
    altruismo: 8,

    vinganca: 10,
    sacrificio: 9
},
{
    nome: "Oingo",

    bondade: 2,
    justica: 0,
    crueldade: 4,
    empatia: 2,
    honra: 1,
    lealdade: 7,

    inteligencia: 6,
    criatividade: 8,
    coragem: 5,
    determinacao: 7,
    manipulacao: 8,

    ego: 9,
    impulsividade: 6,
    paciencia: 5,
    carisma: 6,

    liberdade: 8,
    ordem: 2,
    ambicao: 5,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 1
},
{
    nome: "Boingo",

    bondade: 4,
    justica: 2,
    crueldade: 1,
    empatia: 6,
    honra: 3,
    lealdade: 8,

    inteligencia: 7,
    criatividade: 7,
    coragem: 1,
    determinacao: 5,
    manipulacao: 1,

    ego: 1,
    impulsividade: 1,
    paciencia: 8,
    carisma: 1,

    liberdade: 3,
    ordem: 8,
    ambicao: 1,
    altruismo: 2,

    vinganca: 0,
    sacrificio: 1
},
{
    nome: "Daniel J. D'Arby",

    bondade: 2,
    justica: 1,
    crueldade: 5,
    empatia: 7,
    honra: 4,
    lealdade: 6,

    inteligencia: 10,
    criatividade: 9,
    coragem: 6,
    determinacao: 8,
    manipulacao: 10,

    ego: 9,
    impulsividade: 1,
    paciencia: 10,
    carisma: 8,

    liberdade: 7,
    ordem: 5,
    ambicao: 8,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 1
},
{
    nome: "Telence T. D'Arby",

    bondade: 2,
    justica: 1,
    crueldade: 5,
    empatia: 5,
    honra: 5,
    lealdade: 6,

    inteligencia: 9,
    criatividade: 8,
    coragem: 4,
    determinacao: 8,
    manipulacao: 8,

    ego: 8,
    impulsividade: 2,
    paciencia: 9,
    carisma: 5,

    liberdade: 7,
    ordem: 5,
    ambicao: 7,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 1
},
{
    nome: "Alessi",

    bondade: 0,
    justica: 0,
    crueldade: 9,
    empatia: 0,
    honra: 0,
    lealdade: 3,

    inteligencia: 6,
    criatividade: 7,
    coragem: 1,
    determinacao: 4,
    manipulacao: 8,

    ego: 7,
    impulsividade: 5,
    paciencia: 5,
    carisma: 2,

    liberdade: 8,
    ordem: 1,
    ambicao: 4,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Steely Dan",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 2,

    inteligencia: 8,
    criatividade: 7,
    coragem: 1,
    determinacao: 6,
    manipulacao: 9,

    ego: 9,
    impulsividade: 4,
    paciencia: 8,
    carisma: 4,

    liberdade: 8,
    ordem: 2,
    ambicao: 7,
    altruismo: 0,

    vinganca: 2,
    sacrificio: 0
},
{
    nome: "Mariah",

    bondade: 2,
    justica: 0,
    crueldade: 6,
    empatia: 2,
    honra: 2,
    lealdade: 7,

    inteligencia: 7,
    criatividade: 8,
    coragem: 5,
    determinacao: 6,
    manipulacao: 7,

    ego: 8,
    impulsividade: 4,
    paciencia: 7,
    carisma: 8,

    liberdade: 7,
    ordem: 4,
    ambicao: 5,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 1
},
{
    nome: "Pet Shop",

    bondade: 0,
    justica: 0,
    crueldade: 9,
    empatia: 0,
    honra: 6,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 6,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 2,
    impulsividade: 3,
    paciencia: 8,
    carisma: 0,

    liberdade: 1,
    ordem: 10,
    ambicao: 0,
    altruismo: 0,

    vinganca: 0,
    sacrificio: 8
},
{
    nome: "Anubis",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 5,
    lealdade: 0,

    inteligencia: 8,
    criatividade: 7,
    coragem: 10,
    determinacao: 10,
    manipulacao: 10,

    ego: 10,
    impulsividade: 6,
    paciencia: 9,
    carisma: 2,

    liberdade: 10,
    ordem: 0,
    ambicao: 10,
    altruismo: 0,

    vinganca: 8,
    sacrificio: 0
},
{
    nome: "Mannish Boy",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 0,

    inteligencia: 9,
    criatividade: 8,
    coragem: 4,
    determinacao: 7,
    manipulacao: 10,

    ego: 8,
    impulsividade: 5,
    paciencia: 8,
    carisma: 2,

    liberdade: 8,
    ordem: 2,
    ambicao: 7,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Forever",

    bondade: 0,
    justica: 0,
    crueldade: 8,
    empatia: 0,
    honra: 0,
    lealdade: 0,

    inteligencia: 7,
    criatividade: 7,
    coragem: 5,
    determinacao: 5,
    manipulacao: 5,

    ego: 9,
    impulsividade: 8,
    paciencia: 3,
    carisma: 1,

    liberdade: 10,
    ordem: 0,
    ambicao: 5,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Rubber Soul",

    bondade: 1,
    justica: 0,
    crueldade: 8,
    empatia: 1,
    honra: 1,
    lealdade: 4,

    inteligencia: 8,
    criatividade: 8,
    coragem: 6,
    determinacao: 7,
    manipulacao: 8,

    ego: 7,
    impulsividade: 4,
    paciencia: 8,
    carisma: 5,

    liberdade: 7,
    ordem: 3,
    ambicao: 5,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 1
},
{
    nome: "J. Geil",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 4,

    inteligencia: 7,
    criatividade: 8,
    coragem: 5,
    determinacao: 7,
    manipulacao: 8,

    ego: 8,
    impulsividade: 6,
    paciencia: 6,
    carisma: 4,

    liberdade: 8,
    ordem: 1,
    ambicao: 5,
    altruismo: 0,

    vinganca: 5,
    sacrificio: 0
},
{
    nome: "Devo",

    bondade: 0,
    justica: 0,
    crueldade: 9,
    empatia: 0,
    honra: 0,
    lealdade: 5,

    inteligencia: 7,
    criatividade: 8,
    coragem: 3,
    determinacao: 7,
    manipulacao: 8,

    ego: 7,
    impulsividade: 5,
    paciencia: 8,
    carisma: 3,

    liberdade: 6,
    ordem: 3,
    ambicao: 5,
    altruismo: 0,

    vinganca: 9,
    sacrificio: 0
}
////////////////////////////////////////
// PARTE 4 - DIAMOND IS UNBREAKABLE
////////////////////////////////////////
,
{
    nome: "Josuke Higashikata",

    bondade: 9,
    justica: 8,
    crueldade: 2,
    empatia: 9,
    honra: 7,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 9,
    coragem: 8,
    determinacao: 8,
    manipulacao: 3,

    ego: 5,
    impulsividade: 8,
    paciencia: 4,
    carisma: 8,

    liberdade: 8,
    ordem: 4,
    ambicao: 3,
    altruismo: 9,

    vinganca: 7,
    sacrificio: 8
},
{
    nome: "Jotaro Kujo (Parte 4)",

    bondade: 8,
    justica: 10,
    crueldade: 3,
    empatia: 8,
    honra: 9,
    lealdade: 10,

    inteligencia: 10,
    criatividade: 8,
    coragem: 10,
    determinacao: 10,
    manipulacao: 4,

    ego: 3,
    impulsividade: 2,
    paciencia: 10,
    carisma: 7,

    liberdade: 6,
    ordem: 8,
    ambicao: 1,
    altruismo: 9,

    vinganca: 2,
    sacrificio: 10
},
{
    nome: "Yoshikage Kira",

    bondade: 1,
    justica: 0,
    crueldade: 9,
    empatia: 1,
    honra: 2,
    lealdade: 1,

    inteligencia: 9,
    criatividade: 8,
    coragem: 4,
    determinacao: 8,
    manipulacao: 8,

    ego: 7,
    impulsividade: 2,
    paciencia: 10,
    carisma: 5,

    liberdade: 10,
    ordem: 7,
    ambicao: 8,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Hayato Kawajiri",

    bondade: 8,
    justica: 9,
    crueldade: 0,
    empatia: 7,
    honra: 8,
    lealdade: 9,

    inteligencia: 9,
    criatividade: 8,
    coragem: 10,
    determinacao: 10,
    manipulacao: 3,

    ego: 2,
    impulsividade: 3,
    paciencia: 9,
    carisma: 3,

    liberdade: 4,
    ordem: 8,
    ambicao: 1,
    altruismo: 8,

    vinganca: 2,
    sacrificio: 10
},
{
    nome: "Angelo",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 0,

    inteligencia: 7,
    criatividade: 6,
    coragem: 5,
    determinacao: 7,
    manipulacao: 8,

    ego: 8,
    impulsividade: 7,
    paciencia: 4,
    carisma: 2,

    liberdade: 10,
    ordem: 0,
    ambicao: 4,
    altruismo: 0,

    vinganca: 5,
    sacrificio: 0
},
{
    nome: "Angelo Pedra",

    bondade: 0,
    justica: 0,
    crueldade: 7,
    empatia: 0,
    honra: 0,
    lealdade: 0,

    inteligencia: 2,
    criatividade: 0,
    coragem: 0,
    determinacao: 1,
    manipulacao: 0,

    ego: 10,
    impulsividade: 0,
    paciencia: 10,
    carisma: 0,

    liberdade: 0,
    ordem: 10,
    ambicao: 0,
    altruismo: 0,

    vinganca: 10,
    sacrificio: 0
},
{
    nome: "Koichi Hirose",

    bondade: 10,
    justica: 8,
    crueldade: 0,
    empatia: 10,
    honra: 8,
    lealdade: 9,

    inteligencia: 7,
    criatividade: 7,
    coragem: 7,
    determinacao: 9,
    manipulacao: 1,

    ego: 1,
    impulsividade: 2,
    paciencia: 8,
    carisma: 7,

    liberdade: 6,
    ordem: 6,
    ambicao: 2,
    altruismo: 10,

    vinganca: 1,
    sacrificio: 8
},
{
    nome: "Okuyasu Nijimura",

    bondade: 9,
    justica: 7,
    crueldade: 1,
    empatia: 8,
    honra: 8,
    lealdade: 10,

    inteligencia: 2,
    criatividade: 4,
    coragem: 8,
    determinacao: 7,
    manipulacao: 0,

    ego: 3,
    impulsividade: 10,
    paciencia: 2,
    carisma: 7,

    liberdade: 8,
    ordem: 2,
    ambicao: 2,
    altruismo: 9,

    vinganca: 4,
    sacrificio: 8
},
{
    nome: "Rohan Kishibe",

    bondade: 5,
    justica: 5,
    crueldade: 3,
    empatia: 4,
    honra: 7,
    lealdade: 6,

    inteligencia: 10,
    criatividade: 10,
    coragem: 7,
    determinacao: 10,
    manipulacao: 5,

    ego: 9,
    impulsividade: 4,
    paciencia: 8,
    carisma: 7,

    liberdade: 10,
    ordem: 2,
    ambicao: 9,
    altruismo: 3,

    vinganca: 2,
    sacrificio: 4
},
{
    nome: "Yukako Yamagishi",

    bondade: 5,
    justica: 3,
    crueldade: 5,
    empatia: 6,
    honra: 4,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 7,
    coragem: 8,
    determinacao: 10,
    manipulacao: 8,

    ego: 7,
    impulsividade: 9,
    paciencia: 2,
    carisma: 7,

    liberdade: 3,
    ordem: 5,
    ambicao: 6,
    altruismo: 5,

    vinganca: 4,
    sacrificio: 8
},
{
    nome: "Shigekiyo Yangu",

    bondade: 7,
    justica: 5,
    crueldade: 1,
    empatia: 5,
    honra: 4,
    lealdade: 7,

    inteligencia: 6,
    criatividade: 8,
    coragem: 4,
    determinacao: 8,
    manipulacao: 4,

    ego: 6,
    impulsividade: 5,
    paciencia: 4,
    carisma: 2,

    liberdade: 7,
    ordem: 3,
    ambicao: 8,
    altruismo: 5,

    vinganca: 3,
    sacrificio: 9
},
{
    nome: "Mikitaka Hazekura",

    bondade: 8,
    justica: 6,
    crueldade: 0,
    empatia: 7,
    honra: 8,
    lealdade: 6,

    inteligencia: 8,
    criatividade: 10,
    coragem: 7,
    determinacao: 6,
    manipulacao: 0,

    ego: 1,
    impulsividade: 2,
    paciencia: 8,
    carisma: 4,

    liberdade: 10,
    ordem: 1,
    ambicao: 0,
    altruismo: 8,

    vinganca: 0,
    sacrificio: 7
},
{
    nome: "Keicho Nijimura",

    bondade: 4,
    justica: 4,
    crueldade: 6,
    empatia: 3,
    honra: 7,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 7,
    coragem: 9,
    determinacao: 10,
    manipulacao: 7,

    ego: 5,
    impulsividade: 3,
    paciencia: 8,
    carisma: 5,

    liberdade: 2,
    ordem: 10,
    ambicao: 7,
    altruismo: 3,

    vinganca: 9,
    sacrificio: 8
},
{
    nome: "Akira Otoishi",

    bondade: 2,
    justica: 0,
    crueldade: 7,
    empatia: 2,
    honra: 2,
    lealdade: 1,

    inteligencia: 8,
    criatividade: 9,
    coragem: 7,
    determinacao: 8,
    manipulacao: 5,

    ego: 10,
    impulsividade: 7,
    paciencia: 4,
    carisma: 9,

    liberdade: 10,
    ordem: 1,
    ambicao: 8,
    altruismo: 0,

    vinganca: 2,
    sacrificio: 1
},
{
    nome: "Tamami Kobayashi",

    bondade: 3,
    justica: 1,
    crueldade: 4,
    empatia: 4,
    honra: 1,
    lealdade: 3,

    inteligencia: 8,
    criatividade: 8,
    coragem: 2,
    determinacao: 5,
    manipulacao: 10,

    ego: 8,
    impulsividade: 3,
    paciencia: 9,
    carisma: 7,

    liberdade: 8,
    ordem: 3,
    ambicao: 8,
    altruismo: 1,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Toshikazu Hazamada",

    bondade: 2,
    justica: 1,
    crueldade: 5,
    empatia: 2,
    honra: 2,
    lealdade: 1,

    inteligencia: 7,
    criatividade: 7,
    coragem: 2,
    determinacao: 6,
    manipulacao: 8,

    ego: 9,
    impulsividade: 4,
    paciencia: 7,
    carisma: 3,

    liberdade: 8,
    ordem: 2,
    ambicao: 7,
    altruismo: 0,

    vinganca: 5,
    sacrificio: 0
},
{
    nome: "Yuya Fungami",

    bondade: 6,
    justica: 5,
    crueldade: 3,
    empatia: 6,
    honra: 5,
    lealdade: 6,

    inteligencia: 7,
    criatividade: 7,
    coragem: 7,
    determinacao: 8,
    manipulacao: 4,

    ego: 8,
    impulsividade: 5,
    paciencia: 6,
    carisma: 10,

    liberdade: 9,
    ordem: 2,
    ambicao: 6,
    altruismo: 4,

    vinganca: 2,
    sacrificio: 5
},
{
    nome: "Reimi Sugimoto",

    bondade: 10,
    justica: 10,
    crueldade: 0,
    empatia: 10,
    honra: 9,
    lealdade: 8,

    inteligencia: 7,
    criatividade: 6,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 0,
    impulsividade: 1,
    paciencia: 10,
    carisma: 8,

    liberdade: 3,
    ordem: 7,
    ambicao: 0,
    altruismo: 10,

    vinganca: 4,
    sacrificio: 10
},
{
    nome: "Aya Tsuji",

    bondade: 8,
    justica: 6,
    crueldade: 0,
    empatia: 9,
    honra: 8,
    lealdade: 6,

    inteligencia: 8,
    criatividade: 9,
    coragem: 6,
    determinacao: 7,
    manipulacao: 1,

    ego: 2,
    impulsividade: 2,
    paciencia: 8,
    carisma: 8,

    liberdade: 6,
    ordem: 5,
    ambicao: 3,
    altruismo: 9,

    vinganca: 0,
    sacrificio: 6
},
{
    nome: "Terunosuke Miyamoto",

    bondade: 1,
    justica: 0,
    crueldade: 8,
    empatia: 1,
    honra: 1,
    lealdade: 3,

    inteligencia: 8,
    criatividade: 8,
    coragem: 2,
    determinacao: 7,
    manipulacao: 9,

    ego: 8,
    impulsividade: 2,
    paciencia: 9,
    carisma: 5,

    liberdade: 7,
    ordem: 3,
    ambicao: 7,
    altruismo: 0,

    vinganca: 3,
    sacrificio: 0
},
{
    nome: "Stray Cat",

    bondade: 4,
    justica: 0,
    crueldade: 3,
    empatia: 1,
    honra: 0,
    lealdade: 0,

    inteligencia: 3,
    criatividade: 7,
    coragem: 6,
    determinacao: 8,
    manipulacao: 0,

    ego: 1,
    impulsividade: 8,
    paciencia: 3,
    carisma: 0,

    liberdade: 10,
    ordem: 0,
    ambicao: 0,
    altruismo: 0,

    vinganca: 0,
    sacrificio: 0
},
{
    nome: "Cheap Trick",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 0,

    inteligencia: 8,
    criatividade: 6,
    coragem: 1,
    determinacao: 10,
    manipulacao: 10,

    ego: 9,
    impulsividade: 0,
    paciencia: 10,
    carisma: 8,

    liberdade: 10,
    ordem: 0,
    ambicao: 0,
    altruismo: 0,

    vinganca: 10,
    sacrificio: 0
},
{
    nome: "Super Fly",

    bondade: 5,
    justica: 0,
    crueldade: 0,
    empatia: 0,
    honra: 0,
    lealdade: 0,

    inteligencia: 0,
    criatividade: 0,
    coragem: 0,
    determinacao: 10,
    manipulacao: 0,

    ego: 0,
    impulsividade: 0,
    paciencia: 10,
    carisma: 0,

    liberdade: 0,
    ordem: 10,
    ambicao: 0,
    altruismo: 0,

    vinganca: 0,
    sacrificio: 10
}
////////////////////////////////////////
// PARTE 5 - VENTO AUREO
////////////////////////////////////////
,
{
    nome: "Giorno Giovanna",

    bondade: 8,
    justica: 9,
    crueldade: 6,
    empatia: 7,
    honra: 8,
    lealdade: 9,

    inteligencia: 10,
    criatividade: 9,
    coragem: 9,
    determinacao: 10,
    manipulacao: 7,

    ego: 4,
    impulsividade: 2,
    paciencia: 10,
    carisma: 8,

    liberdade: 6,
    ordem: 8,
    ambicao: 10,
    altruismo: 8,

    vinganca: 3,
    sacrificio: 8
}
,
{
    nome: "Guido Mista",

    bondade: 8,
    justica: 7,
    crueldade: 3,
    empatia: 7,
    honra: 7,
    lealdade: 10,

    inteligencia: 6,
    criatividade: 8,
    coragem: 10,
    determinacao: 8,
    manipulacao: 2,

    ego: 7,
    impulsividade: 9,
    paciencia: 2,
    carisma: 9,

    liberdade: 9,
    ordem: 2,
    ambicao: 3,
    altruismo: 8,

    vinganca: 3,
    sacrificio: 9
},
{
    nome: "Narancia Ghirga",

    bondade: 8,
    justica: 6,
    crueldade: 3,
    empatia: 8,
    honra: 6,
    lealdade: 10,

    inteligencia: 3,
    criatividade: 6,
    coragem: 9,
    determinacao: 8,
    manipulacao: 0,

    ego: 5,
    impulsividade: 10,
    paciencia: 1,
    carisma: 8,

    liberdade: 8,
    ordem: 2,
    ambicao: 3,
    altruismo: 8,

    vinganca: 4,
    sacrificio: 8
},
{
    nome: "Leone Abbacchio",

    bondade: 6,
    justica: 6,
    crueldade: 4,
    empatia: 4,
    honra: 8,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 7,
    coragem: 8,
    determinacao: 9,
    manipulacao: 3,

    ego: 5,
    impulsividade: 4,
    paciencia: 8,
    carisma: 5,

    liberdade: 3,
    ordem: 9,
    ambicao: 2,
    altruismo: 7,

    vinganca: 5,
    sacrificio: 10
},
{
    nome: "Pannacotta Fugo",

    bondade: 6,
    justica: 5,
    crueldade: 4,
    empatia: 6,
    honra: 7,
    lealdade: 8,

    inteligencia: 10,
    criatividade: 8,
    coragem: 5,
    determinacao: 4,
    manipulacao: 2,

    ego: 4,
    impulsividade: 10,
    paciencia: 1,
    carisma: 4,

    liberdade: 4,
    ordem: 7,
    ambicao: 2,
    altruismo: 6,

    vinganca: 2,
    sacrificio: 4
},
{
    nome: "Trish Una",

    bondade: 7,
    justica: 6,
    crueldade: 2,
    empatia: 7,
    honra: 7,
    lealdade: 8,

    inteligencia: 7,
    criatividade: 7,
    coragem: 8,
    determinacao: 8,
    manipulacao: 2,

    ego: 5,
    impulsividade: 5,
    paciencia: 6,
    carisma: 8,

    liberdade: 7,
    ordem: 4,
    ambicao: 4,
    altruismo: 7,

    vinganca: 2,
    sacrificio: 8
},

{
    nome: "Diavolo",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 1,

    inteligencia: 9,
    criatividade: 8,
    coragem: 7,
    determinacao: 10,
    manipulacao: 10,

    ego: 9,
    impulsividade: 2,
    paciencia: 9,
    carisma: 7,

    liberdade: 8,
    ordem: 8,
    ambicao: 10,
    altruismo: 0,

    vinganca: 2,
    sacrificio: 1
},
{
    nome: "Vinegar Doppio",

    bondade: 5,
    justica: 3,
    crueldade: 4,
    empatia: 7,
    honra: 4,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 6,
    coragem: 6,
    determinacao: 9,
    manipulacao: 2,

    ego: 2,
    impulsividade: 6,
    paciencia: 5,
    carisma: 6,

    liberdade: 3,
    ordem: 9,
    ambicao: 2,
    altruismo: 4,

    vinganca: 1,
    sacrificio: 8
},
{
    nome: "Risotto Nero",

    bondade: 4,
    justica: 5,
    crueldade: 8,
    empatia: 4,
    honra: 8,
    lealdade: 10,

    inteligencia: 10,
    criatividade: 9,
    coragem: 9,
    determinacao: 10,
    manipulacao: 8,

    ego: 4,
    impulsividade: 2,
    paciencia: 10,
    carisma: 4,

    liberdade: 5,
    ordem: 8,
    ambicao: 5,
    altruismo: 3,

    vinganca: 9,
    sacrificio: 8
},
{
    nome: "Ghiaccio",

    bondade: 3,
    justica: 2,
    crueldade: 7,
    empatia: 2,
    honra: 6,
    lealdade: 8,

    inteligencia: 8,
    criatividade: 7,
    coragem: 10,
    determinacao: 9,
    manipulacao: 1,

    ego: 8,
    impulsividade: 10,
    paciencia: 0,
    carisma: 3,

    liberdade: 6,
    ordem: 4,
    ambicao: 5,
    altruismo: 0,

    vinganca: 4,
    sacrificio: 5
},
{
    nome: "Cioccolata",

    bondade: 0,
    justica: 0,
    crueldade: 10,
    empatia: 0,
    honra: 0,
    lealdade: 2,

    inteligencia: 9,
    criatividade: 8,
    coragem: 5,
    determinacao: 8,
    manipulacao: 10,

    ego: 9,
    impulsividade: 3,
    paciencia: 8,
    carisma: 7,

    liberdade: 8,
    ordem: 2,
    ambicao: 8,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Prosciutto",

    bondade: 2,
    justica: 2,
    crueldade: 8,
    empatia: 2,
    honra: 8,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 7,
    coragem: 9,
    determinacao: 10,
    manipulacao: 6,

    ego: 5,
    impulsividade: 3,
    paciencia: 9,
    carisma: 8,

    liberdade: 3,
    ordem: 10,
    ambicao: 6,
    altruismo: 1,

    vinganca: 2,
    sacrificio: 9
},
{
    nome: "Pesci",

    bondade: 4,
    justica: 2,
    crueldade: 5,
    empatia: 5,
    honra: 4,
    lealdade: 10,

    inteligencia: 5,
    criatividade: 5,
    coragem: 3,
    determinacao: 9,
    manipulacao: 1,

    ego: 2,
    impulsividade: 5,
    paciencia: 7,
    carisma: 2,

    liberdade: 2,
    ordem: 9,
    ambicao: 3,
    altruismo: 2,

    vinganca: 1,
    sacrificio: 8
},
{
    nome: "Melone",

    bondade: 0,
    justica: 0,
    crueldade: 9,
    empatia: 1,
    honra: 1,
    lealdade: 6,

    inteligencia: 10,
    criatividade: 10,
    coragem: 4,
    determinacao: 7,
    manipulacao: 8,

    ego: 8,
    impulsividade: 3,
    paciencia: 9,
    carisma: 5,

    liberdade: 8,
    ordem: 3,
    ambicao: 7,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Secco",

    bondade: 1,
    justica: 0,
    crueldade: 9,
    empatia: 1,
    honra: 1,
    lealdade: 10,

    inteligencia: 4,
    criatividade: 7,
    coragem: 9,
    determinacao: 10,
    manipulacao: 0,

    ego: 4,
    impulsividade: 9,
    paciencia: 2,
    carisma: 1,

    liberdade: 1,
    ordem: 10,
    ambicao: 1,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 10
},
{
    nome: "Jean Pierre Polnareff (Parte 5)",

    bondade: 8,
    justica: 8,
    crueldade: 2,
    empatia: 8,
    honra: 10,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 7,
    coragem: 10,
    determinacao: 10,
    manipulacao: 1,

    ego: 4,
    impulsividade: 3,
    paciencia: 8,
    carisma: 8,

    liberdade: 6,
    ordem: 7,
    ambicao: 2,
    altruismo: 9,

    vinganca: 4,
    sacrificio: 10
},
{
    nome: "Coco Jumbo",

    bondade: 8,
    justica: 0,
    crueldade: 0,
    empatia: 6,
    honra: 0,
    lealdade: 10,

    inteligencia: 3,
    criatividade: 0,
    coragem: 5,
    determinacao: 8,
    manipulacao: 0,

    ego: 0,
    impulsividade: 0,
    paciencia: 10,
    carisma: 0,

    liberdade: 2,
    ordem: 8,
    ambicao: 0,
    altruismo: 8,

    vinganca: 0,
    sacrificio: 5
},
{
    nome: "Silver Chariot Requiem",

    bondade: 5,
    justica: 0,
    crueldade: 0,
    empatia: 0,
    honra: 0,
    lealdade: 10,

    inteligencia: 1,
    criatividade: 0,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 0,
    impulsividade: 0,
    paciencia: 10,
    carisma: 0,

    liberdade: 0,
    ordem: 10,
    ambicao: 0,
    altruismo: 0,

    vinganca: 0,
    sacrificio: 10
}
////////////////////////////////////////
// PARTE 6 - STONE OCEAN
////////////////////////////////////////
,
{
    nome: "Jolyne Cujoh",

    bondade: 8,
    justica: 8,
    crueldade: 2,
    empatia: 8,
    honra: 8,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 9,
    coragem: 10,
    determinacao: 10,
    manipulacao: 2,

    ego: 6,
    impulsividade: 7,
    paciencia: 5,
    carisma: 8,

    liberdade: 8,
    ordem: 4,
    ambicao: 3,
    altruismo: 9,

    vinganca: 4,
    sacrificio: 10
},
{
    nome: "Enrico Pucci",

    bondade: 2,
    justica: 8,
    crueldade: 8,
    empatia: 3,
    honra: 8,
    lealdade: 10,

    inteligencia: 10,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 10,

    ego: 6,
    impulsividade: 1,
    paciencia: 10,
    carisma: 10,

    liberdade: 2,
    ordem: 10,
    ambicao: 8,
    altruismo: 2,

    vinganca: 2,
    sacrificio: 10
},
{
    nome: "Weather Report",

    bondade: 8,
    justica: 8,
    crueldade: 5,
    empatia: 7,
    honra: 7,
    lealdade: 8,

    inteligencia: 8,
    criatividade: 8,
    coragem: 9,
    determinacao: 9,
    manipulacao: 1,

    ego: 2,
    impulsividade: 3,
    paciencia: 8,
    carisma: 5,

    liberdade: 8,
    ordem: 4,
    ambicao: 1,
    altruismo: 8,

    vinganca: 10,
    sacrificio: 8
},
{
    nome: "Foo Fighters",

    bondade: 9,
    justica: 7,
    crueldade: 2,
    empatia: 8,
    honra: 7,
    lealdade: 10,

    inteligencia: 6,
    criatividade: 7,
    coragem: 10,
    determinacao: 9,
    manipulacao: 0,

    ego: 4,
    impulsividade: 7,
    paciencia: 4,
    carisma: 8,

    liberdade: 9,
    ordem: 2,
    ambicao: 2,
    altruismo: 10,

    vinganca: 2,
    sacrificio: 10
},
{
    nome: "Narciso Anasui",

    bondade: 6,
    justica: 6,
    crueldade: 5,
    empatia: 4,
    honra: 5,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 8,
    coragem: 10,
    determinacao: 10,
    manipulacao: 3,

    ego: 7,
    impulsividade: 8,
    paciencia: 4,
    carisma: 7,

    liberdade: 7,
    ordem: 4,
    ambicao: 4,
    altruismo: 6,

    vinganca: 5,
    sacrificio: 10
},
{
    nome: "Emporio Alnino",

    bondade: 9,
    justica: 8,
    crueldade: 0,
    empatia: 9,
    honra: 8,
    lealdade: 10,

    inteligencia: 9,
    criatividade: 8,
    coragem: 8,
    determinacao: 10,
    manipulacao: 1,

    ego: 1,
    impulsividade: 2,
    paciencia: 9,
    carisma: 5,

    liberdade: 5,
    ordem: 7,
    ambicao: 1,
    altruismo: 10,

    vinganca: 4,
    sacrificio: 10
},
{
    nome: "Ermes Costello",

    bondade: 8,
    justica: 8,
    crueldade: 4,
    empatia: 8,
    honra: 7,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 2,

    ego: 5,
    impulsividade: 8,
    paciencia: 4,
    carisma: 8,

    liberdade: 8,
    ordem: 3,
    ambicao: 3,
    altruismo: 8,

    vinganca: 10,
    sacrificio: 8
},
{
    nome: "Jotaro Kujo (Parte 6)",

    bondade: 8,
    justica: 10,
    crueldade: 2,
    empatia: 8,
    honra: 9,
    lealdade: 10,

    inteligencia: 10,
    criatividade: 9,
    coragem: 10,
    determinacao: 10,
    manipulacao: 5,

    ego: 2,
    impulsividade: 1,
    paciencia: 10,
    carisma: 7,

    liberdade: 5,
    ordem: 9,
    ambicao: 0,
    altruismo: 10,

    vinganca: 1,
    sacrificio: 10
},
{
    nome: "Rykiel",

    bondade: 5,
    justica: 5,
    crueldade: 4,
    empatia: 5,
    honra: 5,
    lealdade: 9,

    inteligencia: 7,
    criatividade: 8,
    coragem: 6,
    determinacao: 9,
    manipulacao: 1,

    ego: 2,
    impulsividade: 3,
    paciencia: 8,
    carisma: 4,

    liberdade: 4,
    ordem: 8,
    ambicao: 4,
    altruismo: 2,

    vinganca: 1,
    sacrificio: 6
},
{
    nome: "Ungalo",

    bondade: 1,
    justica: 0,
    crueldade: 5,
    empatia: 1,
    honra: 0,
    lealdade: 2,

    inteligencia: 4,
    criatividade: 9,
    coragem: 1,
    determinacao: 2,
    manipulacao: 1,

    ego: 4,
    impulsividade: 9,
    paciencia: 0,
    carisma: 1,

    liberdade: 10,
    ordem: 0,
    ambicao: 1,
    altruismo: 0,

    vinganca: 0,
    sacrificio: 0
},
{
    nome: "Donatello Versus",

    bondade: 3,
    justica: 2,
    crueldade: 6,
    empatia: 3,
    honra: 3,
    lealdade: 4,

    inteligencia: 8,
    criatividade: 8,
    coragem: 6,
    determinacao: 8,
    manipulacao: 8,

    ego: 7,
    impulsividade: 4,
    paciencia: 7,
    carisma: 5,

    liberdade: 8,
    ordem: 2,
    ambicao: 8,
    altruismo: 0,

    vinganca: 4,
    sacrificio: 1
},
{
    nome: "Sports Maxx",

    bondade: 0,
    justica: 0,
    crueldade: 9,
    empatia: 0,
    honra: 0,
    lealdade: 1,

    inteligencia: 5,
    criatividade: 5,
    coragem: 7,
    determinacao: 7,
    manipulacao: 2,

    ego: 8,
    impulsividade: 8,
    paciencia: 2,
    carisma: 3,

    liberdade: 8,
    ordem: 0,
    ambicao: 4,
    altruismo: 0,

    vinganca: 3,
    sacrificio: 0
}
////////////////////////////////////////
// PARTE 7 - STEEL BALL RUN
////////////////////////////////////////
,
{
    nome: "Johnny Joestar",

    bondade: 7,
    justica: 7,
    crueldade: 4,
    empatia: 7,
    honra: 8,
    lealdade: 9,

    inteligencia: 8,
    criatividade: 9,
    coragem: 10,
    determinacao: 10,
    manipulacao: 2,

    ego: 4,
    impulsividade: 4,
    paciencia: 8,
    carisma: 6,

    liberdade: 8,
    ordem: 3,
    ambicao: 7,
    altruismo: 8,

    vinganca: 3,
    sacrificio: 10
},
{
    nome: "Gyro Zeppeli",

    bondade: 8,
    justica: 9,
    crueldade: 3,
    empatia: 8,
    honra: 10,
    lealdade: 9,

    inteligencia: 9,
    criatividade: 10,
    coragem: 10,
    determinacao: 10,
    manipulacao: 2,

    ego: 6,
    impulsividade: 4,
    paciencia: 8,
    carisma: 10,

    liberdade: 8,
    ordem: 5,
    ambicao: 4,
    altruismo: 10,

    vinganca: 1,
    sacrificio: 10
},
{
    nome: "Magent Magent",

    bondade: 2,
    justica: 3,
    crueldade: 6,
    empatia: 2,
    honra: 7,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 5,
    coragem: 8,
    determinacao: 9,
    manipulacao: 1,

    ego: 4,
    impulsividade: 2,
    paciencia: 9,
    carisma: 3,

    liberdade: 2,
    ordem: 10,
    ambicao: 3,
    altruismo: 1,

    vinganca: 1,
    sacrificio: 9
},
{
    nome: "Funny Valentine",

    bondade: 4,
    justica: 10,
    crueldade: 8,
    empatia: 3,
    honra: 7,
    lealdade: 10,

    inteligencia: 10,
    criatividade: 9,
    coragem: 10,
    determinacao: 10,
    manipulacao: 10,

    ego: 5,
    impulsividade: 1,
    paciencia: 10,
    carisma: 10,

    liberdade: 3,
    ordem: 10,
    ambicao: 10,
    altruismo: 8,

    vinganca: 1,
    sacrificio: 10
},
{
    nome: "Diego Brando",

    bondade: 2,
    justica: 2,
    crueldade: 8,
    empatia: 2,
    honra: 4,
    lealdade: 2,

    inteligencia: 9,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 9,

    ego: 9,
    impulsividade: 3,
    paciencia: 8,
    carisma: 8,

    liberdade: 8,
    ordem: 4,
    ambicao: 10,
    altruismo: 0,

    vinganca: 7,
    sacrificio: 2
},
{
    nome: "The World Diego",

    bondade: 1,
    justica: 1,
    crueldade: 9,
    empatia: 1,
    honra: 3,
    lealdade: 1,

    inteligencia: 10,
    criatividade: 8,
    coragem: 10,
    determinacao: 10,
    manipulacao: 10,

    ego: 10,
    impulsividade: 2,
    paciencia: 9,
    carisma: 9,

    liberdade: 8,
    ordem: 5,
    ambicao: 10,
    altruismo: 0,

    vinganca: 8,
    sacrificio: 1
},
{
    nome: "Lucy Steel",

    bondade: 10,
    justica: 9,
    crueldade: 0,
    empatia: 10,
    honra: 9,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 8,
    coragem: 10,
    determinacao: 10,
    manipulacao: 3,

    ego: 1,
    impulsividade: 3,
    paciencia: 9,
    carisma: 8,

    liberdade: 6,
    ordem: 7,
    ambicao: 1,
    altruismo: 10,

    vinganca: 2,
    sacrificio: 10
},
{
    nome: "Hot Pants",

    bondade: 6,
    justica: 7,
    crueldade: 5,
    empatia: 5,
    honra: 8,
    lealdade: 6,

    inteligencia: 8,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 4,

    ego: 4,
    impulsividade: 3,
    paciencia: 9,
    carisma: 6,

    liberdade: 5,
    ordem: 7,
    ambicao: 5,
    altruismo: 7,

    vinganca: 3,
    sacrificio: 10
},
{
    nome: "Pocoloco",

    bondade: 7,
    justica: 5,
    crueldade: 0,
    empatia: 6,
    honra: 6,
    lealdade: 5,

    inteligencia: 5,
    criatividade: 5,
    coragem: 7,
    determinacao: 7,
    manipulacao: 0,

    ego: 4,
    impulsividade: 5,
    paciencia: 6,
    carisma: 8,

    liberdade: 10,
    ordem: 0,
    ambicao: 8,
    altruismo: 3,

    vinganca: 0,
    sacrificio: 2
},
{
    nome: "Mountain Tim",

    bondade: 8,
    justica: 9,
    crueldade: 2,
    empatia: 8,
    honra: 10,
    lealdade: 8,

    inteligencia: 7,
    criatividade: 7,
    coragem: 9,
    determinacao: 8,
    manipulacao: 1,

    ego: 3,
    impulsividade: 3,
    paciencia: 8,
    carisma: 8,

    liberdade: 7,
    ordem: 7,
    ambicao: 2,
    altruismo: 9,

    vinganca: 1,
    sacrificio: 9
},
{
    nome: "Wekapipo",

    bondade: 6,
    justica: 7,
    crueldade: 4,
    empatia: 5,
    honra: 9,
    lealdade: 8,

    inteligencia: 8,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 2,

    ego: 4,
    impulsividade: 3,
    paciencia: 9,
    carisma: 5,

    liberdade: 5,
    ordem: 8,
    ambicao: 4,
    altruismo: 6,

    vinganca: 6,
    sacrificio: 8
},
{
    nome: "Sandman",

    bondade: 7,
    justica: 7,
    crueldade: 3,
    empatia: 8,
    honra: 8,
    lealdade: 7,

    inteligencia: 8,
    criatividade: 8,
    coragem: 10,
    determinacao: 10,
    manipulacao: 2,

    ego: 4,
    impulsividade: 4,
    paciencia: 8,
    carisma: 7,

    liberdade: 10,
    ordem: 2,
    ambicao: 8,
    altruismo: 7,

    vinganca: 3,
    sacrificio: 8
},
{
    nome: "Blackmore",

    bondade: 2,
    justica: 3,
    crueldade: 7,
    empatia: 2,
    honra: 7,
    lealdade: 10,

    inteligencia: 9,
    criatividade: 8,
    coragem: 8,
    determinacao: 10,
    manipulacao: 4,

    ego: 4,
    impulsividade: 1,
    paciencia: 10,
    carisma: 4,

    liberdade: 2,
    ordem: 10,
    ambicao: 3,
    altruismo: 1,

    vinganca: 1,
    sacrificio: 8
},
{
    nome: "Ringo Roadagain",

    bondade: 5,
    justica: 6,
    crueldade: 5,
    empatia: 4,
    honra: 10,
    lealdade: 3,

    inteligencia: 8,
    criatividade: 8,
    coragem: 10,
    determinacao: 10,
    manipulacao: 0,

    ego: 5,
    impulsividade: 1,
    paciencia: 10,
    carisma: 7,

    liberdade: 8,
    ordem: 3,
    ambicao: 4,
    altruismo: 3,

    vinganca: 0,
    sacrificio: 7
},
{
    nome: "Mike O.",

    bondade: 2,
    justica: 3,
    crueldade: 5,
    empatia: 2,
    honra: 6,
    lealdade: 10,

    inteligencia: 7,
    criatividade: 8,
    coragem: 8,
    determinacao: 9,
    manipulacao: 2,

    ego: 4,
    impulsividade: 3,
    paciencia: 8,
    carisma: 3,

    liberdade: 2,
    ordem: 10,
    ambicao: 2,
    altruismo: 1,

    vinganca: 1,
    sacrificio: 8
},
{
    nome: "Pork Pie Hat Kid",

    bondade: 2,
    justica: 1,
    crueldade: 6,
    empatia: 2,
    honra: 2,
    lealdade: 4,

    inteligencia: 7,
    criatividade: 9,
    coragem: 6,
    determinacao: 7,
    manipulacao: 5,

    ego: 6,
    impulsividade: 5,
    paciencia: 6,
    carisma: 3,

    liberdade: 7,
    ordem: 2,
    ambicao: 6,
    altruismo: 0,

    vinganca: 2,
    sacrificio: 1
},
{
    nome: "Axl RO",

    bondade: 1,
    justica: 1,
    crueldade: 8,
    empatia: 1,
    honra: 3,
    lealdade: 4,

    inteligencia: 8,
    criatividade: 8,
    coragem: 6,
    determinacao: 8,
    manipulacao: 8,

    ego: 7,
    impulsividade: 2,
    paciencia: 10,
    carisma: 5,

    liberdade: 8,
    ordem: 2,
    ambicao: 7,
    altruismo: 0,

    vinganca: 4,
    sacrificio: 0
}
////////////////////////////////////////
// PARTE 8 - JOJOLION
////////////////////////////////////////
,
{
    nome: "Josuke Higashikata (Parte 8)",

    bondade: 8,
    justica: 8,
    crueldade: 2,
    empatia: 8,
    honra: 7,
    lealdade: 9,

    inteligencia: 8,
    criatividade: 10,
    coragem: 9,
    determinacao: 10,
    manipulacao: 1,

    ego: 2,
    impulsividade: 4,
    paciencia: 8,
    carisma: 7,

    liberdade: 7,
    ordem: 4,
    ambicao: 2,
    altruismo: 9,

    vinganca: 2,
    sacrificio: 9
},
{
    nome: "Yasuho Hirose",

    bondade: 10,
    justica: 8,
    crueldade: 0,
    empatia: 10,
    honra: 8,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 8,
    coragem: 8,
    determinacao: 9,
    manipulacao: 1,

    ego: 1,
    impulsividade: 3,
    paciencia: 8,
    carisma: 8,

    liberdade: 7,
    ordem: 5,
    ambicao: 1,
    altruismo: 10,

    vinganca: 1,
    sacrificio: 9
},
{
    nome: "Rai Mamezuku",

    bondade: 7,
    justica: 7,
    crueldade: 3,
    empatia: 5,
    honra: 8,
    lealdade: 8,

    inteligencia: 9,
    criatividade: 9,
    coragem: 8,
    determinacao: 9,
    manipulacao: 1,

    ego: 5,
    impulsividade: 2,
    paciencia: 10,
    carisma: 6,

    liberdade: 7,
    ordem: 5,
    ambicao: 3,
    altruismo: 7,

    vinganca: 2,
    sacrificio: 8
},
{
    nome: "Jobin Higashikata",

    bondade: 5,
    justica: 4,
    crueldade: 6,
    empatia: 5,
    honra: 7,
    lealdade: 10,

    inteligencia: 9,
    criatividade: 8,
    coragem: 9,
    determinacao: 10,
    manipulacao: 7,

    ego: 6,
    impulsividade: 3,
    paciencia: 9,
    carisma: 8,

    liberdade: 5,
    ordem: 8,
    ambicao: 10,
    altruismo: 5,

    vinganca: 2,
    sacrificio: 9
},
{
    nome: "Tooru",

    bondade: 1,
    justica: 0,
    crueldade: 8,
    empatia: 1,
    honra: 1,
    lealdade: 1,

    inteligencia: 10,
    criatividade: 9,
    coragem: 6,
    determinacao: 9,
    manipulacao: 10,

    ego: 8,
    impulsividade: 1,
    paciencia: 10,
    carisma: 8,

    liberdade: 9,
    ordem: 4,
    ambicao: 9,
    altruismo: 0,

    vinganca: 1,
    sacrificio: 0
},
{
    nome: "Norisuke Higashikata IV",

    bondade: 9,
    justica: 8,
    crueldade: 0,
    empatia: 9,
    honra: 8,
    lealdade: 10,

    inteligencia: 8,
    criatividade: 8,
    coragem: 8,
    determinacao: 9,
    manipulacao: 1,

    ego: 2,
    impulsividade: 2,
    paciencia: 9,
    carisma: 8,

    liberdade: 5,
    ordem: 8,
    ambicao: 3,
    altruismo: 10,

    vinganca: 1,
    sacrificio: 9
},
{
    nome: "Joshu Higashikata",

    bondade: 2,
    justica: 1,
    crueldade: 3,
    empatia: 2,
    honra: 2,
    lealdade: 5,

    inteligencia: 6,
    criatividade: 6,
    coragem: 4,
    determinacao: 7,
    manipulacao: 4,

    ego: 10,
    impulsividade: 8,
    paciencia: 1,
    carisma: 3,

    liberdade: 8,
    ordem: 1,
    ambicao: 7,
    altruismo: 0,

    vinganca: 3,
    sacrificio: 1
},

];