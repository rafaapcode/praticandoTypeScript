
enum posicao{
    Atacante, 
    MeioCampo,
    Defesa, 
    Goleiro
}

interface pessoa{
    nome: string;
    idade: number;
    posicao: posicao;
}

interface IBase extends pessoa{
    materias: string[];
    media?: number;
}

const jogador: pessoa = {
    nome: "Rafael",
    posicao: posicao.MeioCampo,
    idade: 18
}

const jogador1: pessoa = {
    nome: "Rafael",
    posicao: posicao.Atacante,
    idade: 18
}

const marquinho: IBase = {
    nome: "Marquinhos",
    idade: 20,
    posicao: posicao.Atacante,
    materias: ["LP", "MAT", "INGLES", "FILOSOFIA", "EDUCAÇÂO FÌSICA"]
}

function lista(lista: string[]){
    for(let item of lista){
       console.log("Sua matéria é esta : " + item);
    }
}

lista(marquinho.materias);

