let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;
let btn = document.getElementById("btn") as HTMLButtonElement;

function adicionarNumeros(n1: number, n2: number) {
    return n1 + n2;
}

btn.addEventListener("click", () => {

    console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));

});