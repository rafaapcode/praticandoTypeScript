"use strict";
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btn = document.getElementById("btn");
function adicionarNumeros(n1, n2, devePrintar, frase) {
    let result = n1 + n2;
    if (devePrintar) {
        console.log(frase + result);
    }
    return n1 + n2;
}
let frase = "O resultado é : ";
let devePrintar = true;
btn.addEventListener("click", () => {
    console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
});
