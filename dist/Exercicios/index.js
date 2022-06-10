"use strict";
class Jogador {
    constructor(nome, posicao, dataDeNascimento, nacionalidade, altura, peso, time) {
        this.nome = nome;
        this.posicao = posicao;
        this.dataDeNascimento = dataDeNascimento;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
        this.time = time;
    }
    get name() {
        return this.nome;
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
    set changeTeam(newteam) {
        this.time = newteam;
    }
    set changePosition(newPosition) {
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
        };
        return dados;
    }
    idadeJogador() {
        const dataAtual = new Date().getFullYear();
        const anoNascimento = Number(this.dataDeNascimento.substring(6));
        const idade = dataAtual - anoNascimento;
        return idade;
    }
}
