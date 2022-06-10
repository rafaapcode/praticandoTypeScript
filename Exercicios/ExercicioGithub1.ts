interface IFuncionario {
    code: number,
    name: string
}

let employee: IFuncionario = {
    code: 1,
    name: "Bryan"
}



employee.code = 20;
employee.name = "John";


// Mais 1 maneira de responder
let employee2 = {} as IFuncionario;

employee2.code = 20;
employee2.name = "John";
