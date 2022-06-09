
// Erro que pode acontecer
function somarNumbers(n1: number, n2: number) {
    return n1 + n2.toLocaleString();
}

// Como evitar esses tipos de erros
function somarNumbers2(n1: number, n2: number): number {
    return n1 + n2;
}


// Void usado , pois estamos garantindo que nossa função não terá nenhum tipo de retorno.
function somarNumbers3(n1: number, n2: number): void {
    console.log(n1 + n2);
}


// Usando CB na função

function somaNumbers(n1: number, n2: number, n3: number, callback: (number1: number, number2: number) => number): number {
    let result = n1 + n2;

    return callback(result, n3);
}

function aoCubo(n1: number, n2: number): number {
    return n1 ** n2;
}

console.log(somaNumbers(2, 5, 2, aoCubo));
