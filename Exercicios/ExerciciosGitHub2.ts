interface IPerson {
    nome: string;
    idade: number;
    profissao: Profissoes
}

enum Profissoes {
    Atriz,
    Padeiro,
    Jogador,
    Desenvoledor
}

let pessoa1 = {} as IPerson;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz

let pessoa2 = {} as IPerson;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissoes.Padeiro;

let pessoa3: IPerson = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let pessoa4: IPerson = {
    nome:"carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}

// Forma 2 de resolver
type humano = {
    nome: string;
    idade: number;
    profissao: Profissoes;
}

let pessoa10 = {} as  humano;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz

let pessoa12 = {} as  humano;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissoes.Padeiro;

let pessoa13:  humano = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let pessoa14:  humano = {
    nome:"carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}