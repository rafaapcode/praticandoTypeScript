interface IJogador {
    readonly nome: string;
    posicao: string;
    readonly dataDeNascimento: string;
    readonly nacionalidade: string;
    readonly altura: string;
    peso: string;
    time: string;
}

class Jogador implements IJogador {

    nome;
    posicao;
    dataDeNascimento;
    nacionalidade;
    altura;
    peso;
    time;

    constructor(nome: string, posicao: string, dataDeNascimento: string, nacionalidade: string, altura: string, peso: string, time: string) {
        this.nome = nome;
        this.posicao = posicao;
        this.dataDeNascimento = dataDeNascimento;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
        this.time = time;
    }

    get name() {
        return this.nome
    }

    get position() {
        return this.posicao;
    }

    get bornDate() {
        return this.dataDeNascimento;
    }

    get nacionality() {
        return this.nacionalidade;
    }

    get height() {
        return this.altura;
    }

    get weight() {
        return this.peso;
    }

    set changeTeam(newteam: string) {
        this.time = newteam;
    }

    set changePosition(newPosition: string) {
        this.posicao = newPosition;
    }

    jogadorDados() {
        let dados = {
            Nome: this.nome,
            Posicao: this.posicao,
            DataDeNascimento: this.dataDeNascimento,
            Nacionalidade: this.nacionalidade,
            Altura: this.altura,
            Peso: this.peso
        }

        return dados;
    }


    idadeJogador() {
        const dataAtual = new Date().getFullYear();
        const anoNascimento = Number(this.dataDeNascimento.substring(6));
        const idade = dataAtual - anoNascimento;
        
        return idade;
    }

}

