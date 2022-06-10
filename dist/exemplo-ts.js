"use strict";
var posicao;
(function (posicao) {
    posicao[posicao["Atacante"] = 0] = "Atacante";
    posicao[posicao["MeioCampo"] = 1] = "MeioCampo";
    posicao[posicao["Defesa"] = 2] = "Defesa";
    posicao[posicao["Goleiro"] = 3] = "Goleiro";
})(posicao || (posicao = {}));
const jogador = {
    nome: "Rafael",
    posicao: posicao.MeioCampo,
    idade: 18
};
const jogador1 = {
    nome: "Rafael",
    posicao: posicao.Atacante,
    idade: 18
};
const marquinho = {
    nome: "Marquinhos",
    idade: 20,
    posicao: posicao.Atacante,
    materias: ["LP", "MAT", "INGLES", "FILOSOFIA", "EDUCAÇÂO FÌSICA"]
};
function lista(lista) {
    for (let item of lista) {
        console.log("Sua matéria é esta : " + item);
    }
}
lista(marquinho.materias);
